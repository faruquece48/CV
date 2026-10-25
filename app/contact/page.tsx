import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Contact — Faruque Abdullah" };

export default function ContactPage() {
  return (
    <PageShell>
      <section className="page-banner"><div><p className="kicker">Get in Touch</p><h1>Contact Me</h1><p>I am open to research collaborations, academic enquiries and discussions.</p></div><span className="banner-icon">✉</span></section>
      <div className="contact-layout content-wrap">
        <div className="contact-list">
          <article><span>✉</span><div><h2><a href="mailto:abdullahruet13@gmail.com">abdullahruet13@gmail.com</a></h2><p>Send me an email anytime</p></div></article>
          <article><span>☎</span><div><h2><a href="tel:+8801867300023">+880 1867-300023</a></h2><p>Call or connect by phone</p></div></article>
          <article><span>●</span><div><h2>Rajshahi, Bangladesh</h2><p>Rajshahi University of Engineering & Technology</p></div></article>
          <article><span>RG</span><div><h2><a href="https://www.researchgate.net/profile/Faruque-Abdullah-2" target="_blank" rel="noreferrer">ResearchGate</a></h2><p>Read and follow my research</p></div></article>
          <article><span>in</span><div><h2><a href="https://www.linkedin.com/in/faruque-abdullah-253494148" target="_blank" rel="noreferrer">LinkedIn</a></h2><p>Connect professionally</p></div></article>
        </div>
        <ContactForm />
      </div>
    </PageShell>
  );
}
