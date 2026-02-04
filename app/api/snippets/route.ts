import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import { marketplaceSnippets } from "@/lib/snippets";
import { snippetCreateSchema, snippetFilterSchema } from "@/lib/validators/snippet";

const sanitizeSnippet = (snippet: (typeof marketplaceSnippets)[number]) => {
  const { previewCode, ...rest } = snippet;
  return { ...rest, previewCode };
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const params = snippetFilterSchema.parse(Object.fromEntries(searchParams));

  let results = [...marketplaceSnippets];

  if (params.search) {
    const query = params.search.toLowerCase();
    results = results.filter(
      (snippet) =>
        snippet.title.toLowerCase().includes(query) ||
        snippet.description.toLowerCase().includes(query) ||
        snippet.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }

  if (params.language) {
    results = results.filter((snippet) => snippet.language === params.language);
  }

  if (params.licenseType) {
    results = results.filter(
      (snippet) => snippet.licenseType === params.licenseType
    );
  }

  if (params.tag) {
    results = results.filter((snippet) => snippet.tags.includes(params.tag!));
  }

  if (params.minPrice) {
    const min = Number(params.minPrice);
    results = results.filter((snippet) => snippet.priceCents >= min);
  }

  if (params.maxPrice) {
    const max = Number(params.maxPrice);
    results = results.filter((snippet) => snippet.priceCents <= max);
  }

  switch (params.sort) {
    case "top":
      results.sort((a, b) => b.ratingAvg - a.ratingAvg);
      break;
    case "newest":
      results.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
      break;
    case "value":
      results.sort((a, b) => a.priceCents - b.priceCents);
      break;
    default:
      results.sort((a, b) => b.salesCount - a.salesCount);
  }

  const page = Number(params.page ?? 1);
  const perPage = Number(params.perPage ?? 8);
  const start = (page - 1) * perPage;
  const paged = results.slice(start, start + perPage);

  return NextResponse.json({
    items: paged.map(sanitizeSnippet),
    total: results.length,
    page,
    perPage
  });
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const payload = snippetCreateSchema.parse(await request.json());

  return NextResponse.json(
    {
      ...payload,
      id: "snip_new",
      ratingAvg: 0,
      ratingCount: 0,
      salesCount: 0,
      createdAt: new Date().toISOString()
    },
    { status: 201 }
  );
}
