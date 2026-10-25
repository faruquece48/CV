import Link from "next/link";
import { PageShell } from "@/components/PageShell";

const focusAreas = [
  { icon: "⌁", title: "Research", text: "Investigating meaningful questions in the built environment" },
  { icon: "▤", title: "Publications", text: "Sharing peer-reviewed knowledge with the world" },
  { icon: "◇", title: "Innovation", text: "Connecting engineering research with practical outcomes" },
  { icon: "◎", title: "Collaboration", text: "Working across disciplines for resilient communities" },
];

export default function HomePage() {
  return (
    <PageShell>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="kicker pale">Researcher <span /> Engineer <span /> Lifelong learner</p>
          <h1>Faruque Abdullah</h1>
          <p className="hero-tagline">Exploring ideas <b>•</b> Solving problems <b>•</b> Creating impact</p>
          <p className="hero-intro">Assistant Professor in Building Engineering & Construction Management, with research spanning sustainable construction, structural engineering and urban infrastructure.</p>
          <div className="button-row"><Link className="primary-button" href="/cv">View My CV</Link><Link className="outline-button" href="/publications">Explore Publications</Link></div>
        </div>
        <div className="profile-orbit"><img className="profile-photo" src="/faruque-abdullah.jpg" alt="Faruque Abdullah" /></div>
      </section>
      <section className="focus-grid" aria-label="Research focus">
        {focusAreas.map((item) => <article key={item.title}><span className="focus-icon">{item.icon}</span><h2>{item.title}</h2><p>{item.text}</p></article>)}
      </section>
      <blockquote className="quote">“Research becomes most valuable when knowledge moves beyond the page and improves the world around us.”<cite>— Faruque Abdullah</cite></blockquote>
    </PageShell>
  );
}
