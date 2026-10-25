import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { publications } from "@/lib/publications";

export const metadata: Metadata = { title: "Publications — Faruque Abdullah" };

function BookIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2h8l4 4v16H6V2Z" /><path d="M14 2v5h5M9 11h6M9 15h6M9 19h4" /><path d="M3 6v18h12" /></svg>;
}

export default function PublicationsPage() {
  const journalCount = publications.filter((item) => item.type === "Journal Article").length;
  const conferenceCount = publications.filter((item) => item.type === "Conference Paper").length;

  return (
    <PageShell>
      <main className="pub-showcase">
        <section className="pub-hero">
          <div className="pub-hero-copy">
            <span className="pub-overline">Academic research portfolio</span>
            <h1>Research Publications</h1>
            <p>A record of peer-reviewed journal articles and conference contributions in structural engineering, sustainable construction and data-informed analysis.</p>
          </div>
          <div className="pub-hero-mark"><BookIcon /></div>
          <div className="pub-stats" aria-label="Publication statistics">
            <div><strong>{publications.length}</strong><span>Total publications</span></div>
            <div><strong>{journalCount}</strong><span>Journal articles</span></div>
            <div><strong>{conferenceCount}</strong><span>Conference papers</span></div>
          </div>
        </section>

        <section className="pub-library">
          <div className="pub-library-heading">
            <div><span>Selected works</span><h2>Publication Library</h2></div>
            <p>Newest research appears first. Select any article to open its official DOI or conference PDF.</p>
          </div>
          <div className="pub-timeline">
            {publications.map((item, index) => {
              const isJournal = item.type === "Journal Article";
              return (
                <article className="pub-entry" key={item.title}>
                  <div className="pub-year"><strong>{item.year}</strong><span>{String(index + 1).padStart(2, "0")}</span></div>
                  <div className="pub-card">
                    <div className="pub-card-top">
                      <span className={isJournal ? "pub-type journal" : "pub-type conference"}>{item.type}</span>
                      <span className="pub-source">{item.doi}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p className="pub-authors">{item.authors}</p>
                    <div className="pub-card-bottom">
                      <p><span>Published in</span>{item.venue}</p>
                      <a href={item.href} target="_blank" rel="noreferrer" aria-label={`Open ${item.title}`}>Open article <span aria-hidden="true">↗</span></a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
