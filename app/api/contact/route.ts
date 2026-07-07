import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limit store (per-deploy-instance, suitable for Vercel serverless)
const rateMap = new Map<string, { count: number; resetAt: number }>();
const LIMIT = 5;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

function getClientIp(req: NextRequest) {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  const now = Date.now();

  const entry = rateMap.get(ip);
  if (entry) {
    if (now < entry.resetAt) {
      if (entry.count >= LIMIT) {
        return NextResponse.json(
          { error: "Too many requests. Try again later." },
          { status: 429 }
        );
      }
      entry.count++;
    } else {
      rateMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    }
  } else {
    rateMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
  }

  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid body" }, { status: 400 });

  const { name, email, subject, message, _hp } = body;

  // Honeypot check
  if (_hp) return NextResponse.json({ ok: true }); // silently accept spam

  // Validate
  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // TODO: Send email via Resend
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "portfolio@yourdomain.com",
  //   to: process.env.CONTACT_EMAIL!,
  //   subject: `[Portfolio] ${subject}`,
  //   html: `<p>From: ${name} (${email})</p><p>${message}</p>`,
  // });

  console.log("[Contact]", { name, email, subject, message: message.slice(0, 100) });

  return NextResponse.json({ ok: true });
}
