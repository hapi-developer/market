import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({}));

  return NextResponse.json({
    id: "cs_test_demo",
    snippetId: payload?.snippetId ?? "snip_1",
    amountCents: payload?.amountCents ?? 4800,
    currency: "usd",
    status: "created",
    checkoutUrl: "/checkout/success"
  });
}
