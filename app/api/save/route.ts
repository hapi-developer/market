import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import { saveSnippetSchema } from "@/lib/validators/snippet";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const payload = saveSnippetSchema.parse(await request.json());

  return NextResponse.json({ id: "save_new", ...payload }, { status: 201 });
}

export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const payload = saveSnippetSchema.parse(await request.json());

  return NextResponse.json({ id: payload.snippetId, deleted: true });
}
