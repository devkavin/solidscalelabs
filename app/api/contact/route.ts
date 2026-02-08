import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // In production, forward to email/CRM (e.g., Resend, SendGrid, HubSpot) and add rate limiting.
    console.log("[contact]", body);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
