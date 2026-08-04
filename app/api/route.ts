import { NextRequest, NextResponse } from "next/server";

// Sends an email notification whenever the "Book a demo" form is submitted.
// Uses Resend (https://resend.com) — free tier, no credit card required.
//
// Setup (one-time):
// 1. Create a free account at https://resend.com and verify your email.
// 2. Create an API key: https://resend.com/api-keys
// 3. In your Vercel project → Settings → Environment Variables, add:
//      RESEND_API_KEY   = the key from step 2
//      NOTIFY_EMAIL     = the email address that should receive submissions
//                          (on the free tier, without verifying your own domain,
//                          this MUST be the same email you signed up to Resend with)
// 4. Redeploy. That's it — no server or extra hosting needed.

export async function POST(request: NextRequest) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = typeof data.name === "string" ? data.name.trim() : "";
  const company = typeof data.company === "string" ? data.company.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const website = typeof data.website === "string" ? data.website.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";

  if (!name || !company || !email) {
    return NextResponse.json(
      { error: "Name, company, and email are required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL;

  if (!apiKey || !notifyEmail) {
    console.error(
      "book-demo: missing RESEND_API_KEY or NOTIFY_EMAIL env vars — email not sent."
    );
    // Don't block the user's form submission just because email isn't configured yet.
    return NextResponse.json({ ok: true, emailSent: false });
  }

  const escapeHtml = (value: string) =>
    value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  const html = `
    <h2>New demo request</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${website ? `<p><strong>Website:</strong> ${escapeHtml(website)}</p>` : ""}
    ${message ? `<p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>` : ""}
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Book a Demo <onboarding@resend.dev>",
        to: [notifyEmail],
        reply_to: email,
        subject: `New demo request from ${name} (${company})`,
        html,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("book-demo: Resend API error:", errText);
      return NextResponse.json({ ok: true, emailSent: false });
    }
  } catch (err) {
    console.error("book-demo: failed to send email:", err);
    return NextResponse.json({ ok: true, emailSent: false });
  }

  return NextResponse.json({ ok: true, emailSent: true });
}
