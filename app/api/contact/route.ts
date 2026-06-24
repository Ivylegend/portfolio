import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z.string().trim().email("Please enter a valid email address.").max(160),
  company: z.string().trim().max(160).optional().default(""),
  budget: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().min(10, "Please share a little more about the project.").max(5000),
  projectTypes: z.array(z.string().trim().max(80)).max(12).optional().default([]),
  source: z.string().trim().max(80).optional().default("Website contact form"),
  website: z.string().trim().max(0).optional().default(""),
});

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "victoryicha2@gmail.com";
  const from = process.env.RESEND_FROM_EMAIL ?? "Icha Victory <website@contact.icha.ng>";

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured. Missing RESEND_API_KEY." },
      { status: 500 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Please check the form and try again." },
      { status: 400 },
    );
  }

  const data = parsed.data;
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(apiKey);
  const projectTypes = data.projectTypes.length ? data.projectTypes.join(", ") : "Not specified";
  const subject = `New project inquiry from ${data.name}`;
  const text = [
    `Source: ${data.source}`,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${data.company || "Not provided"}`,
    `Budget: ${data.budget || "Not provided"}`,
    `Project type: ${projectTypes}`,
    "",
    "Project:",
    data.message,
  ].join("\n");

  const html = `
    <div style="font-family: Inter, Arial, sans-serif; color: #151517; line-height: 1.55;">
      <h1 style="font-size: 22px; margin: 0 0 18px;">New project inquiry</h1>
      <table style="border-collapse: collapse; width: 100%; max-width: 680px;">
        <tr><td style="padding: 8px 0; color: #666;">Source</td><td style="padding: 8px 0;">${escapeHtml(data.source)}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Name</td><td style="padding: 8px 0;">${escapeHtml(data.name)}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;">${escapeHtml(data.email)}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Company</td><td style="padding: 8px 0;">${escapeHtml(data.company || "Not provided")}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Budget</td><td style="padding: 8px 0;">${escapeHtml(data.budget || "Not provided")}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Project type</td><td style="padding: 8px 0;">${escapeHtml(projectTypes)}</td></tr>
      </table>
      <h2 style="font-size: 16px; margin: 24px 0 8px;">Project</h2>
      <p style="white-space: pre-line; margin: 0;">${escapeHtml(data.message)}</p>
    </div>
  `;

  const result = await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject,
    text,
    html,
  });

  if (result.error) {
    return NextResponse.json(
      { error: result.error.message || "Email could not be sent. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
