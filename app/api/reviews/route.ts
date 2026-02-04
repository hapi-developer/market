import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import { reviewCreateSchema } from "@/lib/validators/snippet";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const payload = reviewCreateSchema.parse(await request.json());

  return NextResponse.json(
    {
      id: "rev_new",
      author: session.user?.name ?? "Buyer",
      createdAt: new Date().toISOString(),
      ...payload
    },
    { status: 201 }
  );
}
