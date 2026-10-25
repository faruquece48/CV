"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "The message could not be sent.");
      form.reset();
      setStatus("sent");
      setFeedback("Thank you. Your message has been sent successfully.");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "The message could not be sent.");
    }
  }

  return (
    <form className="contact-smart-form" onSubmit={sendMessage}>
      <div className="contact-form-heading"><span>Send an enquiry</span><h2>Write a Message</h2><p>Complete the form and your message will be delivered directly to my inbox.</p></div>
      <div className="contact-field-row">
        <label><span>Your name</span><input name="name" placeholder="Full name" autoComplete="name" required /></label>
        <label><span>Email address</span><input name="email" type="email" placeholder="name@example.com" autoComplete="email" required /></label>
      </div>
      <label><span>Subject</span><select name="subject" defaultValue="Research collaboration"><option>Research collaboration</option><option>Academic enquiry</option><option>Speaking invitation</option><option>Other</option></select></label>
      <label><span>Message</span><textarea name="message" placeholder="Tell me briefly how I can help..." rows={6} minLength={10} required /></label>
      <label className="contact-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <button className="contact-submit" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send Message"}<span aria-hidden="true">→</span></button>
      {feedback && <p className={status === "sent" ? "contact-feedback success" : "contact-feedback error"} role="status">{feedback}</p>}
      <p className="contact-privacy">Your contact details are used only to respond to this enquiry.</p>
    </form>
  );
}
