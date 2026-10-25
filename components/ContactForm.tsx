"use client";

import { FormEvent } from "react";

export function ContactForm() {
  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = String(form.get("subject") || "Website enquiry");
    const message = String(form.get("message") || "");
    const name = String(form.get("name") || "Website visitor");
    const email = String(form.get("email") || "");
    const body = `${message}\n\nFrom: ${name}\nEmail: ${email}`;
    window.location.href = `mailto:abdullahruet13@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={sendMessage}>
      <h2>Send a Message</h2>
      <label>Your Name *<input name="name" placeholder="Enter your name" required /></label>
      <label>Your Email *<input name="email" type="email" placeholder="Enter your email" required /></label>
      <label>Subject<select name="subject" defaultValue="Research collaboration"><option>Research collaboration</option><option>Academic enquiry</option><option>Speaking invitation</option><option>Other</option></select></label>
      <label>Message *<textarea name="message" placeholder="Your message..." rows={5} required /></label>
      <button className="primary-button" type="submit">Send Message <span>➤</span></button>
    </form>
  );
}
