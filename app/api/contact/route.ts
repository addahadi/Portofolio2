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

  // Check env vars first
  if (!process.env.EMAILJS_SERVICE_ID || !process.env.EMAILJS_TEMPLATE_ID || !process.env.EMAILJS_PUBLIC_KEY) {
    console.error("[EmailJS Error] Missing environment variables. Did you restart the server?");
    return NextResponse.json({ error: "Server configuration error: Missing EmailJS keys" }, { status: 500 });
  }

  // Send email via EmailJS REST API
  const emailJsUrl = "https://api.emailjs.com/api/v1.0/email/send";
  const payload = {
    service_id: process.env.EMAILJS_SERVICE_ID,
    template_id: process.env.EMAILJS_TEMPLATE_ID,
    user_id: process.env.EMAILJS_PUBLIC_KEY,
    accessToken: process.env.EMAILJS_PRIVATE_KEY, // Optional, but recommended for security
    template_params: {
      name,
      email,
      subject,
      message,
    },
  };

  const emailRes = await fetch(emailJsUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!emailRes.ok) {
    const errorText = await emailRes.text();
    console.error("[EmailJS Error]", errorText);
    return NextResponse.json({ error: `EmailJS Error: ${errorText}` }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
