export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Faruque Abdullah. All rights reserved.</p>
      <div>
        <a className="social-chip" href="https://www.linkedin.com/in/faruque-abdullah-253494148" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
        <a className="social-chip" href="https://www.researchgate.net/profile/Faruque-Abdullah-2" target="_blank" rel="noreferrer" aria-label="ResearchGate">RG</a>
      </div>
    </footer>
  );
}
