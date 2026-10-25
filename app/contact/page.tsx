import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Contact — Faruque Abdullah" };

function ContactIcon({ name }: { name: "email" | "phone" | "location" | "linkedin" | "research" }) {
  const paths = {
    email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    phone: <path d="M7 3h3l1.5 5-2 1.5a15 15 0 0 0 5 5L16 12.5l5 1.5v3c0 2-2 4-4 4C9 20 4 15 3 7c0-2 2-4 4-4Z" />,
    location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7M8 7v.1M12 17v-4c0-2 4-3 4 0v4M12 10v7" /></>,
    research: <><circle cx="10" cy="10" r="6" /><path d="m14.5 14.5 6 6M7.5 10h5M10 7.5v5" /></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

export default function ContactPage() {
  return (
    <PageShell>
      <main className="contact-showcase">
        <section className="contact-hero">
          <span>Academic contact</span>
          <h1>Let&apos;s start a meaningful conversation.</h1>
          <p>I welcome research collaborations, academic enquiries and opportunities connected to structural engineering and the built environment.</p>
        </section>
        <section className="contact-workspace">
          <aside className="contact-panel">
            <div className="contact-panel-heading"><span>Direct channels</span><h2>Contact Information</h2><p>Choose the channel that works best for you. I usually respond to email enquiries first.</p></div>
            <div className="contact-methods">
              <a href="mailto:abdullahruet13@gmail.com"><i><ContactIcon name="email" /></i><div><span>Email</span><strong>abdullahruet13@gmail.com</strong></div></a>
              <a href="tel:+8801867300023"><i><ContactIcon name="phone" /></i><div><span>Phone</span><strong>+880 1867 300023</strong></div></a>
              <div><i><ContactIcon name="location" /></i><div><span>Location</span><strong>Rajshahi, Bangladesh</strong></div></div>
              <a href="https://www.linkedin.com/in/faruque-abdullah-253494148" target="_blank" rel="noreferrer"><i><ContactIcon name="linkedin" /></i><div><span>LinkedIn</span><strong>Professional profile</strong></div></a>
              <a href="https://www.researchgate.net/profile/Faruque-Abdullah-2" target="_blank" rel="noreferrer"><i><ContactIcon name="research" /></i><div><span>ResearchGate</span><strong>Research profile</strong></div></a>
            </div>
            <div className="contact-availability"><span /><p><strong>Open to collaboration</strong>Research projects, academic discussions and scholarly opportunities.</p></div>
          </aside>
          <ContactForm />
        </section>
      </main>
    </PageShell>
  );
}
