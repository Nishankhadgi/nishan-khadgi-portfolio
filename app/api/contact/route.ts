import { NextResponse } from "next/server";

export const runtime = "nodejs";

function clean(value: unknown, limit: number): string {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Please submit a valid form." }, { status: 400 });
  }
  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ message: "Please submit a valid form." }, { status: 400 });
  }

  const body = payload as Record<string, unknown>;
  // Honeypot submissions are silently ignored; no email is sent.
  if (clean(body.website, 200)) {
    return NextResponse.json({ message: "Thanks. Your message has been received." });
  }

  const name = clean(body.name, 80);
  const email = clean(body.email, 254);
  const subject = clean(body.subject, 120) || "Portfolio contact";
  const message = clean(body.message, 4000);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.length < 2 || !emailPattern.test(email) || message.length < 10) {
    return NextResponse.json(
      { message: "Please check your name, email address, and message before submitting." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  const from = process.env.RESEND_FROM;
  if (!apiKey || !to || !from) {
    return NextResponse.json(
      { message: "Contact delivery is not configured yet. Please use a published email or LinkedIn link instead." },
      { status: 503 },
    );
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: "Bearer " + apiKey, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: "[Portfolio] " + subject,
        text: "New message from the portfolio contact form\n\nName: " + name + "\nEmail: " + email + "\nSubject: " + subject + "\n\n" + message,
      }),
      cache: "no-store",
    });
    if (!response.ok) {
      return NextResponse.json({ message: "The email provider could not deliver the message. Please try again later." }, { status: 502 });
    }
    return NextResponse.json({ message: "Message sent. Thanks for reaching out." });
  } catch {
    return NextResponse.json({ message: "The contact service is temporarily unavailable. Please try again later." }, { status: 502 });
  }
}
