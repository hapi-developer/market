import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import { marketplaceSnippets } from "@/lib/snippets";
import { snippetUpdateSchema } from "@/lib/validators/snippet";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const snippet = marketplaceSnippets.find((item) => item.id === params.id);

  if (!snippet) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  return NextResponse.json({
    ...snippet,
    fullCode: undefined
  });
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const payload = snippetUpdateSchema.parse(await request.json());

  return NextResponse.json({ id: params.id, ...payload });
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({ id: params.id, deleted: true });
}
