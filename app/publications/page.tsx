import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { publications } from "@/lib/publications";

export const metadata: Metadata = { title: "Publications — Faruque Abdullah" };

export default function PublicationsPage() {
  return (
    <PageShell>
      <section className="page-banner"><div><h1>Research Publications</h1></div><span className="banner-icon">▥</span></section>
      <section className="publication-page content-wrap">
        <div className="filter-row"><span className="selected">All</span><span>Journal Articles</span><span>Conference Papers</span></div>
        <div className="publication-cards">
          {publications.map((item) => (
            <article className="publication-card" key={item.title}>
              <strong className="year-box">{item.year}</strong>
              <div className="publication-info"><span className="type-label">{item.type}</span><h2>{item.title}</h2><p>{item.authors}</p><small>{item.venue}</small></div>
              <a className="article-link" href={item.href} target="_blank" rel="noreferrer">Open Article ↗</a>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
