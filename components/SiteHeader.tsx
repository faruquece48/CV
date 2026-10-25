"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/cv", label: "CV" },
  { href: "/publications", label: "Publications" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Faruque Abdullah home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32"><path d="M2 11 16 4l14 7-14 7L2 11Zm6 5v7c5 4 11 4 16 0v-7l-8 4-8-4Zm20-3v9" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" /></svg>
          </span>
          <span>Faruque Abdullah</span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link className={pathname === link.href ? "active" : ""} href={link.href} key={link.href}>{link.label}</Link>
          ))}
        </nav>
        <div className="social-nav" aria-label="Social links">
          <a className="social-chip linkedin" href="https://www.linkedin.com/in/faruque-abdullah-253494148" target="_blank" rel="noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.2H3.2V21h3.3V8.2ZM4.9 3A1.9 1.9 0 1 0 5 6.8 1.9 1.9 0 0 0 4.9 3ZM21 13.7c0-3.9-2.1-5.8-4.9-5.8-2.3 0-3.3 1.2-3.8 2.1V8.2H9V21h3.3v-6.3c0-1.7.3-3.3 2.4-3.3s2.1 1.9 2.1 3.4V21H21v-7.3Z" fill="currentColor" /></svg></a>
          <a className="social-chip researchgate" href="https://www.researchgate.net/profile/Faruque-Abdullah-2" target="_blank" rel="noreferrer" aria-label="ResearchGate">RG</a>
        </div>
      </div>
    </header>
  );
}
