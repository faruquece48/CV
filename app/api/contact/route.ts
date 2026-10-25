import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function clean(value: unknown, maxLength: number) {
  return String(value ?? "").trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;",
  })[character] ?? character);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (clean(body.website, 100)) return NextResponse.json({ ok: true });

    const name = clean(body.name, 100);
    const email = clean(body.email, 160);
    const subject = clean(body.subject, 140);
    const message = clean(body.message, 5000);
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !validEmail || !subject || message.length < 10) {
      return NextResponse.json({ error: "Please complete every required field with valid information." }, { status: 400 });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
    const contactTo = process.env.CONTACT_TO_EMAIL || gmailUser;
    if (!gmailUser || !gmailAppPassword || !contactTo) {
      return NextResponse.json({ error: "Email delivery is not configured yet. Please use the email link on this page." }, { status: 503 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailAppPassword },
    });

    await transporter.sendMail({
      from: `Faruque Abdullah Website <${gmailUser}>`,
      to: contactTo,
      replyTo: email,
      subject: `Website enquiry: ${subject}`,
      text: `${message}\n\nName: ${name}\nEmail: ${email}`,
      html: `<h2>${escapeHtml(subject)}</h2><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p><hr><p><strong>Name:</strong> ${escapeHtml(name)}<br><strong>Email:</strong> ${escapeHtml(email)}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "The message could not be sent. Please try again or contact me by email." }, { status: 500 });
  }
}
