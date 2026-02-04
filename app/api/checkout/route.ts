import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    id: "cs_test_demo",
    amount: 4800,
    currency: "usd",
    status: "created",
    checkoutUrl: "/checkout/demo"
  });
}
