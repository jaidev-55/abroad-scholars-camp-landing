import { NextRequest, NextResponse } from "next/server";

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwPFW-AlThNAIZk6TbavKF_fT-nksgI0TZMEOilUqv3O2XnFtxxG3yjqv7aAnwyVlDk/exec";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    await fetch(SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(body),
    });
  } catch {
    // silent fail
  }

  return NextResponse.json({ ok: true });
}
