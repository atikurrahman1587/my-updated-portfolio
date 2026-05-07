import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const ownerEmail = "atikurrahman1587@gmail.com";
const ownerName = "Md. Atikur Rahman";
const ownerTitle = "Full Stack Web Developer";
const ownerLocation = "Dhaka, Bangladesh";
const ownerGithub = "https://github.com/atikurrahman1587";
const ownerLinkedin = "https://linkedin.com/in/atikurrahman1587";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const clean = (value: unknown) => String(value ?? "").trim();

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const emailShell = (content: string) => `
  <div style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;color:#111827">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f3f4f6;padding:28px 12px">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border:1px solid #e5e7eb;border-radius:18px;overflow:hidden;box-shadow:0 18px 50px rgba(15,23,42,0.08)">
            <tr>
              <td style="padding:0;background:linear-gradient(135deg,#2563eb,#7c3aed)">
                <div style="padding:26px 30px;color:#ffffff">
                  <div style="font-size:13px;letter-spacing:1.6px;text-transform:uppercase;opacity:.9;font-weight:700">Atikur.dev</div>
                  <div style="font-size:24px;font-weight:800;margin-top:8px">${ownerName}</div>
                  <div style="font-size:14px;opacity:.9;margin-top:4px">${ownerTitle}</div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:30px">
                ${content}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
`;

const ownerNotificationHtml = ({
  safeName,
  safeEmail,
  safeSubject,
  safeMessage,
}: {
  safeName: string;
  safeEmail: string;
  safeSubject: string;
  safeMessage: string;
}) =>
  emailShell(`
    <h1 style="margin:0 0 10px;font-size:24px;line-height:1.25;color:#111827">New portfolio message</h1>
    <p style="margin:0 0 24px;color:#6b7280;font-size:15px;line-height:1.7">A visitor submitted the contact form on your portfolio. Reply directly to this email to continue the conversation.</p>

    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;border-spacing:0 10px;margin-bottom:22px">
      <tr>
        <td style="width:110px;color:#6b7280;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.6px">Name</td>
        <td style="color:#111827;font-size:15px;font-weight:700">${safeName}</td>
      </tr>
      <tr>
        <td style="width:110px;color:#6b7280;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.6px">Email</td>
        <td style="font-size:15px"><a href="mailto:${safeEmail}" style="color:#2563eb;text-decoration:none;font-weight:700">${safeEmail}</a></td>
      </tr>
      <tr>
        <td style="width:110px;color:#6b7280;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.6px">Subject</td>
        <td style="color:#111827;font-size:15px;font-weight:700">${safeSubject}</td>
      </tr>
    </table>

    <div style="border:1px solid #e5e7eb;background:#f9fafb;border-radius:14px;padding:18px 20px">
      <div style="color:#6b7280;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px">Message</div>
      <div style="color:#111827;font-size:15px;line-height:1.8">${safeMessage}</div>
    </div>
  `);

const clientAutoReplyHtml = ({
  safeName,
  safeSubject,
}: {
  safeName: string;
  safeSubject: string;
}) =>
  emailShell(`
    <h1 style="margin:0 0 14px;font-size:24px;line-height:1.25;color:#111827">Thank you for reaching out</h1>
    <p style="margin:0 0 16px;color:#374151;font-size:15px;line-height:1.8">Hi ${safeName},</p>
    <p style="margin:0 0 16px;color:#374151;font-size:15px;line-height:1.8">I received your mail about <strong>${safeSubject}</strong>. Thank you for sharing the details with me.</p>
    <p style="margin:0 0 24px;color:#374151;font-size:15px;line-height:1.8">I will review your message and contact you as soon as possible.</p>

    <div style="border-top:1px solid #e5e7eb;padding-top:22px;margin-top:24px">
      <table role="presentation" cellspacing="0" cellpadding="0">
        <tr>
          <td style="vertical-align:top;padding-right:14px">
            <div style="width:52px;height:52px;border-radius:14px;background:linear-gradient(135deg,#2563eb,#7c3aed);color:#ffffff;font-weight:800;font-size:18px;line-height:52px;text-align:center">AR</div>
          </td>
          <td style="vertical-align:top">
            <div style="font-size:16px;color:#111827;font-weight:800">${ownerName}</div>
            <div style="font-size:13px;color:#4b5563;margin-top:3px">${ownerTitle}</div>
            <div style="font-size:13px;color:#6b7280;margin-top:8px">${ownerLocation}</div>
            <div style="font-size:13px;margin-top:10px;line-height:1.7">
              <a href="mailto:${ownerEmail}" style="color:#2563eb;text-decoration:none;font-weight:700">${ownerEmail}</a><br />
              <a href="${ownerGithub}" style="color:#2563eb;text-decoration:none;font-weight:700">GitHub</a>
              <span style="color:#d1d5db;padding:0 7px">|</span>
              <a href="${ownerLinkedin}" style="color:#2563eb;text-decoration:none;font-weight:700">LinkedIn</a>
            </div>
          </td>
        </tr>
      </table>
    </div>
  `);

const getTransporter = () => {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP credentials are not configured.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const name = clean(payload.name);
    const email = clean(payload.email).toLowerCase();
    const subject = clean(payload.subject);
    const message = clean(payload.message);

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");
    const fromEmail = process.env.SMTP_FROM || process.env.SMTP_USER;
    const transporter = getTransporter();

    await transporter.sendMail({
      from: `"Atikur Portfolio" <${fromEmail}>`,
      to: ownerEmail,
      replyTo: email,
      subject: `Portfolio message: ${subject}`,
      text: [
        "New portfolio contact message",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: ownerNotificationHtml({
        safeName,
        safeEmail,
        safeSubject,
        safeMessage,
      }),
    });

    await transporter.sendMail({
      from: `"Md. Atikur Rahman" <${fromEmail}>`,
      to: email,
      replyTo: ownerEmail,
      subject: "Thank you for contacting Md. Atikur Rahman",
      text: [
        `Hi ${name},`,
        "",
        `I received your mail about "${subject}". Thank you for sharing the details with me.`,
        "I will review your message and contact you as soon as possible.",
        "",
        "Best regards,",
        "Md. Atikur Rahman",
        "Full Stack Web Developer",
        "Dhaka, Bangladesh",
        ownerEmail,
        ownerGithub,
        ownerLinkedin,
      ].join("\n"),
      html: clientAutoReplyHtml({
        safeName,
        safeSubject,
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form email failed:", error);

    return NextResponse.json(
      { error: "Message could not be sent. Please try again later." },
      { status: 500 },
    );
  }
}
