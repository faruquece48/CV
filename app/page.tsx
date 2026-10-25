import Link from "next/link";
import { PageShell } from "@/components/PageShell";

const focusAreas = [
  { icon: "research", title: "Research", text: "Investigating meaningful questions in the built environment" },
  { icon: "publications", title: "Publications", text: "Sharing peer-reviewed knowledge with the world" },
  { icon: "innovation", title: "Innovation", text: "Connecting engineering research with practical outcomes" },
  { icon: "collaboration", title: "Collaboration", text: "Working across disciplines for resilient communities" },
];

function FocusIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    research: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m15.5 15.5 5 5M8 10.5h5M10.5 8v5" /></>,
    publications: <path d="M3 4.5A3.5 3.5 0 0 1 6.5 2H11v18H6.5A3.5 3.5 0 0 0 3 23V4.5ZM21 4.5A3.5 3.5 0 0 0 17.5 2H13v18h4.5A3.5 3.5 0 0 1 21 23V4.5Z" />,
    innovation: <><path d="M9 18h6M10 22h4M8.5 15.5A7 7 0 1 1 15.5 15.5C14.5 16.3 14 17 14 18h-4c0-1-.5-1.7-1.5-2.5Z" /><path d="M12 1V0M4 4 2.5 2.5M20 4l1.5-1.5" /></>,
    collaboration: <><circle cx="8" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M2 21c0-4 2-7 6-7s6 3 6 7M14 15c4-1 8 1 8 6" /></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{icons[name]}</svg>;
}

export default function HomePage() {
  return (
    <PageShell>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="kicker pale">Researcher <span /> Engineer <span /> Lifelong learner</p>
          <h1>Faruque Abdullah</h1>
          <p className="hero-tagline">Exploring ideas <b>•</b> Solving problems <b>•</b> Creating impact</p>
          <p className="hero-intro">Assistant Professor in Building Engineering &amp; Construction Management, with research spanning sustainable construction, structural engineering and urban infrastructure.</p>
          <div className="button-row"><Link className="primary-button" href="/cv">View My CV</Link><Link className="outline-button" href="/publications">Explore Publications</Link></div>
        </div>
        <div className="profile-orbit"><img className="profile-photo" src="/faruque-abdullah.jpg" alt="Faruque Abdullah" /></div>
      </section>
      <section className="focus-grid" aria-label="Research focus">
        {focusAreas.map((item) => <article key={item.title}><span className={`focus-icon ${item.icon}`}><FocusIcon name={item.icon} /></span><h2>{item.title}</h2><p>{item.text}</p></article>)}
      </section>
      <blockquote className="quote">“Research becomes most valuable when knowledge moves beyond the page and improves the world around us.”<cite>— Faruque Abdullah</cite></blockquote>
    </PageShell>
  );
}
