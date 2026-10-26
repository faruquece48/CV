import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { publications } from "@/lib/publications";

const interests = [
  { icon: "shield", title: "Structural Health Monitoring", line1: "Intelligent monitoring for reliable", line2: "structural condition assessment." },
  { icon: "layers", title: "FRP Strengthening", line1: "Improving structural performance through", line2: "efficient FRP and CFRP systems." },
  { icon: "atom", title: "Smart Materials", line1: "Developing self-sensing concrete for", line2: "safer and more resilient structures." },
  { icon: "model", title: "Finite Element Modelling", line1: "ABAQUS modelling with experimental", line2: "and data-driven validation." },
];

function HomeIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    papers: <><path d="M6 2h9l4 4v16H6V2Z" /><path d="M15 2v5h5M9 11h7M9 15h7M9 19h5M3 6v18h13" /></>,
    book: <path d="M3 4.5A3.5 3.5 0 0 1 6.5 2H11v18H6.5A3.5 3.5 0 0 0 3 23V4.5ZM21 4.5A3.5 3.5 0 0 0 17.5 2H13v18h4.5A3.5 3.5 0 0 1 21 23V4.5Z" />,
    people: <><circle cx="8" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M2 21c0-4 2-7 6-7s6 3 6 7M14 15c4-1 8 1 8 6" /></>,
    award: <><circle cx="12" cy="9" r="6" /><path d="m8 14-2 8 6-3 6 3-2-8M9 9l2 2 4-4" /></>,
    shield: <><path d="M12 2 4 5v6c0 5 3 9 8 11 5-2 8-6 8-11V5l-8-3Z" /><path d="m8 12 2.5 2.5L16 9" /></>,
    layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 17l9 5 9-5" /></>,
    sensor: <><circle cx="12" cy="12" r="3" /><path d="M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7" /></>,
    atom: <><circle cx="12" cy="12" r="1.7" /><ellipse cx="12" cy="12" rx="9" ry="3.7" /><ellipse cx="12" cy="12" rx="9" ry="3.7" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="9" ry="3.7" transform="rotate(120 12 12)" /></>,
    model: <><path d="M4 20V10l8-6 8 6v10H4Z" /><path d="M8 20v-6h8v6M8 10h.1M12 10h.1M16 10h.1" /></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{icons[name]}</svg>;
}

export default function HomePage() {
  const latest = publications.slice(0, 3);
  return (
    <PageShell>
      <main className="academic-home">
        <section className="academic-home-hero">
          <div className="academic-home-copy">
            <p className="academic-home-eyebrow"><span>Welcome</span> to my academic profile</p>
            <h1>Engineering research for <em>a safer tomorrow.</em></h1>
            <p className="academic-home-lead">I am an Assistant Professor and structural engineering researcher with experience in structural strengthening, experimental testing and performance assessment. My developing research interests include structural health monitoring, smart materials and data-driven methods.</p>
            <div className="academic-home-actions"><Link href="/publications">Explore My Research <span>→</span></Link><Link href="/cv" className="secondary">View &amp; Download CV <span>↓</span></Link></div>
          </div>
          <img className="academic-home-profile" src="/profile-cutout.png" alt="Faruque Abdullah" />
        </section>

        <section className="academic-home-stats" aria-label="Academic highlights">
          <div><i><HomeIcon name="papers" /></i><strong>{interests.length}</strong><span>Research Areas</span></div>
          <div><i><HomeIcon name="book" /></i><strong>{publications.length}</strong><span>Publications</span></div>
          <div><i><HomeIcon name="people" /></i><strong>7+</strong><span>Years in Academia</span></div>
          <div><i><HomeIcon name="award" /></i><strong>3</strong><span>Academic Positions</span></div>
        </section>

        <section className="academic-home-about">
          <div className="academic-home-about-copy"><span className="section-rule" /><h2>About Me</h2><p>My work brings together experimental testing, numerical modelling and practical structural assessment. My MSc research examined FRP-strengthened steel tubular joints under static and dynamic loading, supported by laboratory investigation, ABAQUS simulation and regression-based analysis.</p><p>I am interested in developing dependable approaches that improve the safety, resilience and long-term performance of civil infrastructure.</p><Link href="/cv">Read My Full Profile <span>→</span></Link></div>
          <img src="/Profile.png" alt="Faruque Abdullah on a university campus" />
          <blockquote><p className="quote-text"><span className="quote-mark opening">“</span>Knowledge becomes valuable when it strengthens structures and improves lives.<span className="quote-mark closing">”</span></p><i>— Faruque Abdullah</i></blockquote>
        </section>

        <section className="academic-home-interests">
          <span className="section-rule" /><h2>Research Interests</h2><p className="section-intro">My research is centred on resilient structures, intelligent monitoring and evidence-based engineering.</p>
          <div>{interests.map((item) => <article key={item.title}><i><HomeIcon name={item.icon} /></i><h3>{item.title}</h3><p>{item.line1}<br />{item.line2}</p></article>)}</div>
        </section>

        <section className="academic-home-publications">
          <div className="academic-home-section-heading"><div><span className="section-rule gold" /><h2>Recent Publications</h2></div><Link href="/publications">View All Publications <span>→</span></Link></div>
          <div className="academic-home-pub-grid">{latest.map((item) => <article key={item.title}><span className={item.type === "Journal Article" ? "journal" : "conference"}>{item.type}</span><h3>{item.title}</h3><p>{item.authors}</p><small>{item.venue}, {item.year}</small><a href={item.href} target="_blank" rel="noreferrer">Read Article <b>→</b></a></article>)}</div>
        </section>

        <section className="academic-home-cta"><i><HomeIcon name="people" /></i><div><h2>Let&apos;s Collaborate</h2><p>I welcome research opportunities, academic discussions and meaningful collaborations.</p></div><Link href="/contact">Get in Touch <span>→</span></Link></section>
      </main>
    </PageShell>
  );
}
