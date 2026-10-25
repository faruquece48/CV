import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { DownloadCvButton } from "@/components/DownloadCvButton";

export const metadata: Metadata = { title: "CV — Faruque Abdullah" };

const interests = [
  "Structural Health Monitoring (SHM)", "Nondestructive Testing and Evaluation",
  "FRP/CFRP Strengthening and Retrofitting",
  "Self-Sensing Concrete & Smart Materials", "Finite-Element Modelling (ABAQUS)", "Data-Driven Strength Prediction",
];

function SideIcon({ name }: { name: "research" | "skills" | "languages" | "memberships" | "personal" }) {
  const paths = {
    research: <><circle cx="12" cy="12" r="5" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></>,
    skills: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></>,
    languages: <><path d="M4 5h10M9 3v2c0 5-2 8-5 10M6 10c2 2 4 4 7 5" /><path d="m14 20 3-8 3 8m-5-3h4" /></>,
    memberships: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c0-4 2-6 6-6s6 2 6 6M14 15c4-1 7 1 7 5" /></>,
    personal: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-5 3-8 8-8s8 3 8 8" /></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

function SideSection({ icon, title, children }: { icon: "research" | "skills" | "languages" | "memberships" | "personal"; title: string; children: React.ReactNode }) {
  return <section className="cv-ref-side-section"><h2><i><SideIcon name={icon} /></i>{title}</h2>{children}</section>;
}

function MainSection({ title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return <section className="cv-ref-main-section"><h2><i aria-hidden="true"><b /></i>{title}</h2><div className="cv-ref-section-body">{children}</div></section>;
}

function ContactIcon({ name }: { name: "email" | "phone" | "location" | "university" | "scholar" | "orcid" | "linkedin" }) {
  if (name === "orcid") return <span className="cv-contact-letter">iD</span>;
  if (name === "linkedin") return <span className="cv-contact-letter">in</span>;
  const paths = {
    email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    phone: <path d="M7 3h3l1.5 5-2 1.5a15 15 0 0 0 5 5L16 12.5l5 1.5v3c0 2-2 4-4 4C9 20 4 15 3 7c0-2 2-4 4-4Z" />,
    location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    university: <><path d="m2 9 10-5 10 5-10 5L2 9Z" /><path d="M6 12v5c3 2 9 2 12 0v-5M22 9v7" /></>,
    scholar: <><path d="m2 9 10-5 10 5-10 5L2 9Z" /><path d="M7 12v5c3 2 7 2 10 0v-5" /></>,
  };
  return <svg className="cv-contact-icon" viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

export default function CVPage() {
  return <PageShell><main className="cv-ref">
    <DownloadCvButton />
    <header className="cv-ref-header">
      <img src="/faruque-abdullah.jpg" alt="Faruque Abdullah" />
      <div className="cv-ref-heading">
        <h1>FARUQUE ABDULLAH</h1>
        <h2>Assistant Professor | Structural Engineering Researcher<br />Prospective PhD Candidate</h2>
        <p>Department of Building Engineering &amp; Construction Management (BECM)<br />Rajshahi University of Engineering &amp; Technology (RUET)<br />Rajshahi-6204, Bangladesh</p>
      </div>
      <div className="cv-ref-contact">
        <a href="mailto:abdullahruet13@gmail.com"><ContactIcon name="email" />abdullahruet13@gmail.com</a>
        <a href="tel:+8801867300023"><ContactIcon name="phone" />+880 1867 300023</a>
        <a href="https://www.becm.ruet.ac.bd/abdullah" target="_blank" rel="noreferrer"><ContactIcon name="university" />University Profile</a>
        <a href="https://www.linkedin.com/in/faruque-abdullah-253494148" target="_blank" rel="noreferrer"><ContactIcon name="linkedin" />LinkedIn</a>
        <span><ContactIcon name="location" />Rajshahi, Bangladesh</span>
      </div>
    </header>
    <div className="cv-ref-grid">
      <aside className="cv-ref-sidebar">
        <SideSection icon="research" title="RESEARCH INTERESTS"><ul>{interests.map(x => <li key={x}>{x}</li>)}</ul></SideSection>
        <SideSection icon="skills" title="TECHNICAL SKILLS">
          <h3>Software &amp; Tools</h3><ul><li>ABAQUS (FEA)</li><li>MATLAB</li><li>Python</li><li>Microsoft Office (Word, Excel, PowerPoint)</li><li>ANSYS, AutoCAD (basic)</li></ul>
          <h3>Research &amp; Analytical Skills</h3><ul><li>Experimental Testing &amp; Data Analysis</li><li>Regression &amp; Predictive Modelling</li><li>Statistical Analysis</li><li>Structural Performance Assessment</li></ul>
        </SideSection>
        <SideSection icon="languages" title="LANGUAGES"><ul><li>Bengali – Native</li><li>English – Fluent</li></ul></SideSection>
        <SideSection icon="memberships" title="PROFESSIONAL MEMBERSHIPS"><ul><li>Institution of Engineers, Bangladesh</li><li>Academic and research networks</li></ul></SideSection>
        <SideSection icon="personal" title="PERSONAL DETAILS"><dl><dt>Date of Birth</dt><dd>1 October 1995</dd><dt>Nationality</dt><dd>Bangladeshi</dd><dt>Location</dt><dd>Rajshahi, Bangladesh</dd></dl></SideSection>
        <blockquote>“Engineering for safer, smarter<br />and more sustainable structures.”</blockquote>
      </aside>
      <article className="cv-ref-content">
        <MainSection icon="●" title="PROFESSIONAL PROFILE"><p>Assistant Professor and structural engineering researcher at the Department of Building Engineering &amp; Construction Management, Rajshahi University of Engineering &amp; Technology (RUET), Bangladesh. My MSc research investigated the performance of FRP-strengthened steel tubular T-joints under static and dynamic loading through laboratory testing, finite-element modelling in ABAQUS and regression-based analysis of experimental and numerical data. Building on this foundation in structural strengthening and performance assessment, my current research interests focus on structural health monitoring, nondestructive testing and evaluation, FRP/CFRP strengthening and retrofitting, self-sensing concrete and smart materials, finite-element modelling and data-driven strength prediction. I aim to integrate experimental investigation, computational simulation and intelligent sensing methods to develop reliable approaches for evaluating structural condition, predicting performance and improving the safety and resilience of civil infrastructure.</p></MainSection>
        <MainSection icon="◆" title="EDUCATION">
          <div className="cv-ref-education"><div><h3>Master of Science (MSc) in Civil Engineering</h3><strong>2026 · CGPA 4.00</strong></div><p>Rajshahi University of Engineering &amp; Technology (RUET), Bangladesh</p><p><em>Thesis: Performance of FRP Strengthened Steel Joints Under Static and Dynamic Loads</em><br />Supervisor: Dr. S. M. Zahrul Islam, Professor, Dept. of Civil Engineering, RUET</p></div>
          <div className="cv-ref-education"><div><h3>Bachelor of Science (BSc) in Civil Engineering</h3><strong>2018 · CGPA 3.75</strong></div><p>Rajshahi University of Engineering &amp; Technology (RUET), Bangladesh</p></div>
          <div className="cv-ref-education"><div><h3>Higher Secondary Certificate (H.S.C)</h3><strong>2013</strong></div><p>Jamuna Sar Karkhana Uccha Madhyamic Bidhyalaya</p></div>
          <div className="cv-ref-education"><div><h3>Secondary School Certificate (S.S.C)</h3><strong>2011</strong></div><p>Jamuna Sarkarkhana High School</p></div>
        </MainSection>
        <MainSection icon="■" title="ACADEMIC APPOINTMENT"><div className="cv-ref-positions">
          <div><span /><article><h3>Assistant Professor</h3><p><b>Building Engineering &amp; Construction Management</b><br />Rajshahi University of Engineering &amp; Technology</p></article><time>27 Jul, 2022 – Present</time></div>
          <div><span /><article><h3>Lecturer</h3><p><b>Building Engineering &amp; Construction Management</b><br />Rajshahi University of Engineering &amp; Technology</p></article><time>23 Feb, 2021 – Present</time></div>
          <div><span /><article><h3>Lecturer</h3><p><b>Civil Engineering</b><br />Dhaka International University</p></article><time>19 Jan, 2019 – 20 Feb, 2021</time></div>
        </div></MainSection>
        <MainSection icon="▲" title="RESEARCH EXPERIENCE"><h3>MSc Thesis: Performance of FRP Strengthened Steel Joints Under Static and Dynamic Loads</h3><ul><li>Experimental investigation: 38 steel tubular T-joint specimens.</li><li>Finite-element modelling and validation using ABAQUS.</li><li>Effect of damage, fibre orientation and elevated temperature on structural performance.</li><li>Regression-based prediction using 439 experimental and numerical data points.</li></ul></MainSection>
        <MainSection icon="●" title="PROPOSED PhD RESEARCH"><h3>Electrical Nondestructive Concrete Strength Assessment</h3><ul><li>Electrical resistivity and impedance measurements.</li><li>Machine learning for strength estimation and uncertainty analysis.</li><li>Validation with standard destructive tests.</li><li>Integration with SHM and self-sensing concrete technologies.</li></ul></MainSection>
        <MainSection icon="▣" title="PUBLICATIONS">
          <h3>Journal Articles</h3><ul>
            <li><a href="https://doi.org/10.30880/ijscet.2025.16.01.004" target="_blank" rel="noreferrer">Influence of Building Orientation on Instant, Delayed Sensible and Latent Energy Loads: A Building Information Modelling (BIM) Based Analysis (2025)</a></li>
            <li><a href="https://doi.org/10.1038/s41598-024-68360-4" target="_blank" rel="noreferrer">Numerical and Machine Learning Modeling of GFRP Confined Concrete-Steel Hollow Elliptical Columns (2024)</a></li>
            <li><a href="https://doi.org/10.11648/j.ijepp.20210904.12" target="_blank" rel="noreferrer">A Study on Water Logging Problem of Rangpur City (2021)</a></li>
            <li><a href="https://doi.org/10.11648/j.ajce.20210904.13" target="_blank" rel="noreferrer">A Comparative Study of Lateral Load Analysis Considering Two BNBC Codes Using ETABS Software (2021)</a></li>
            <li><a href="https://doi.org/10.11648/j.ajtte.20210602.12" target="_blank" rel="noreferrer">Evaluation of Traffic Accessibility Condition and Noise Pollution in Dhaka City of Bangladesh (2021)</a></li>
          </ul>
          <h3>Conference Proceedings</h3><ul><li><a href="https://icceiruet.org/" target="_blank" rel="noreferrer">Performance of FRP Strengthened Steel Tubular T-Joints (ICCEI 2025, RUET)</a></li><li><a href="https://iccesd.kuet.ac.bd/2026/Papers/24.pdf" target="_blank" rel="noreferrer">Performance Evaluation of CFRP-Retrofitted Circular T-Joints Under Damage and Elevated Temperature Conditions (ICCESD 2026, KUET)</a></li></ul>
        </MainSection>
      </article>
    </div>
  </main></PageShell>;
}
