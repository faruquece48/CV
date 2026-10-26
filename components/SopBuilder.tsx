"use client";

import { useMemo, useState } from "react";
import { jsPDF } from "jspdf";

type SopDetails = {
  university: string;
  department: string;
  programme: string;
  supervisor: string;
  researchGroup: string;
  researchFit: string;
  researchTitle: string;
  funding: string;
  wordLimit: string;
  format: string;
  separateProposal: string;
};

const initialDetails: SopDetails = {
  university: "Target University",
  department: "Department of Civil and Structural Engineering",
  programme: "PhD in Civil Engineering",
  supervisor: "Professor Name",
  researchGroup: "Structural Engineering Research Group",
  researchFit: "its expertise in structural damage diagnosis, computational mechanics and data-driven infrastructure assessment",
  researchTitle: "Machine Learning-Based Damage Detection and Localization in Concrete Structures: Integrating Numerical Simulation and Experimental Data",
  funding: "Fully funded PhD position",
  wordLimit: "1500",
  format: "PDF, A4, Times New Roman",
  separateProposal: "To be confirmed",
};

function buildSop(d: SopDetails) {
  const university = d.university.trim() || "Target University";
  const department = d.department.trim() || "Department of Civil and Structural Engineering";
  const programme = d.programme.trim() || "PhD in Civil Engineering";
  const supervisor = d.supervisor.trim() || "Professor Name";
  const researchGroup = d.researchGroup.trim() || "Structural Engineering Research Group";
  const fit = d.researchFit.trim() || "its aligned expertise and research facilities";
  const funding = d.funding.trim() || "PhD opportunity";

  return [
    "My interests lie at the intersection of structural engineering, finite element modelling, experimental investigation and machine learning. As an Assistant Professor in the Department of Building Engineering & Construction Management at Rajshahi University of Engineering & Technology (RUET), Bangladesh, I seek to develop reliable data-driven methods for assessing structural condition and improving infrastructure safety. My academic work has shown me that effective engineering decisions require both a sound understanding of structural behaviour and careful interpretation of data. I therefore aim to pursue a PhD on machine learning-based damage detection and localization in concrete structures using numerical simulation and experimental data.",
    "I earned my BSc in Civil Engineering from RUET in 2018 with a CGPA of 3.75 and my MSc in Civil Engineering in 2026 with a CGPA of 4.00. My MSc thesis, Performance of FRP Strengthened Steel Joints Under Static and Dynamic Loads, was supervised by Dr. S. M. Zahrul Islam, Professor, Department of Civil Engineering, RUET. I tested 38 FRP-strengthened steel tubular T-joint specimens, developed and validated ABAQUS models and used 439 experimental and numerical data points for regression-based prediction. I also examined the effects of damage, fibre orientation and elevated temperature on structural performance.",
    "This work showed me the value of combining physical testing, numerical simulation and quantitative analysis while validating computational predictions against experimental evidence. It also taught me to examine model assumptions, sources of uncertainty and the limits of predictions derived from restricted datasets. My publications on machine learning modelling of GFRP-confined concrete-steel columns and my conference work on FRP-strengthened joints further developed my interest in intelligent structural assessment. Together, these experiences motivated me to extend integrated modelling beyond performance prediction to damage detection and localization in concrete structures.",
    "I began my academic career as a Lecturer in Civil Engineering at Dhaka International University in January 2019. I joined RUET as a Lecturer in February 2021 and have served as an Assistant Professor since July 2022. Teaching structural and construction-related subjects has strengthened my ability to communicate technical concepts, guide students and connect theory with practical engineering problems. These academic responsibilities have deepened my commitment to scientific inquiry, practical solutions and postgraduate education. Doctoral training will enable me to contribute more effectively to these areas.",
    "My proposed research will investigate machine learning-based damage detection and localization by combining finite element simulation with suitable experimental datasets. Concrete structures experience cracking, deterioration, variable loading and environmental effects that complicate diagnosis. Detecting the presence of damage is only part of the challenge; determining its location and distinguishing genuine damage from normal response variability are equally important. Although machine learning can support automated structural health monitoring, its reliability depends on representative training data and careful validation. Numerical models also cannot reproduce every aspect of measured behaviour. I aim to address this simulation-to-experiment gap through an integrated and transparent framework.",
    "The study will begin with a critical review of vibration-based monitoring, finite element modelling and machine learning methods. I will identify published experimental datasets containing structural responses, specimen properties and documented damage conditions. Subject to data availability, I will develop or calibrate a finite element model of a concrete component and simulate different damage locations and severities. Numerical and experimental responses will then be compared to identify informative features for damage diagnosis. This stage will also examine whether simulated observations require calibration or domain adaptation before they can support predictions from experimental measurements.",
    "I will develop and compare machine learning models selected according to the data and research questions. Performance will be evaluated through detection accuracy, localization accuracy, false-alarm rates and generalization to unseen specimens. Where possible, I will study measurement noise and variations in loading or environmental conditions. Independent validation and strict separation of training and test data will reduce optimistic bias and support reproducible results.",
    "The intended contribution is a rigorously evaluated framework that clarifies how effectively machine learning can identify damage, how results vary across damage scenarios and what limitations arise when simulation data support predictions from experimental measurements. The precise research gap and methodological novelty will be refined through the literature review and dataset assessment. Transparent assumptions and careful validation will keep the work scientifically credible and practically relevant.",
    `I am applying to the ${programme} in the ${department} at ${university}. I am particularly interested in working with ${supervisor} and the ${researchGroup} because of ${fit}. This environment would support interdisciplinary research integrating structural engineering, computational mechanics and data-driven methods. The ${funding} would enable me to focus on advanced training in structural dynamics, finite element analysis, machine learning and structural health monitoring.`,
    "My long-term goal is to advance my career as an academic and structural engineering researcher. I intend to develop reliable methods for assessing civil infrastructure, conduct independent research and collaborate with the wider scientific community. I also hope to transfer the knowledge gained through doctoral study into teaching, student supervision and research development in Bangladesh. My background in experimental testing, numerical modelling and data-driven prediction provides a strong foundation for this work. Through the PhD, I hope to contribute carefully validated research that improves the safety, durability and resilience of concrete infrastructure.",
  ];
}

export function SopBuilder() {
  const [details, setDetails] = useState(initialDetails);
  const paragraphs = useMemo(() => buildSop(details), [details]);
  const wordCount = useMemo(() => `${details.researchTitle} ${paragraphs.join(" ")}`.trim().split(/\s+/).length, [details.researchTitle, paragraphs]);
  const limit = Number(details.wordLimit) || 0;

  function update(key: keyof SopDetails, value: string) {
    setDetails((current) => ({ ...current, [key]: value }));
  }

  function createPdf() {
    const doc = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
    const marginX = 22;
    const contentWidth = 166;
    const pageHeight = 297;
    const bottom = 20;
    let y = 22;

    const addPageNumber = () => {
      doc.setFont("times", "normal");
      doc.setFontSize(9);
      doc.setTextColor(90);
      doc.text(`Faruque Abdullah | Statement of Purpose | ${doc.getNumberOfPages()}`, 105, 288, { align: "center" });
      doc.setTextColor(0);
    };
    const newPage = () => {
      addPageNumber();
      doc.addPage();
      y = 20;
    };
    const writeLines = (text: string, size: number, style: "normal" | "bold" | "italic", lineHeight: number, after: number, align: "left" | "center" | "justify" = "left") => {
      doc.setFont("times", style);
      doc.setFontSize(size);
      const lines = doc.splitTextToSize(text, contentWidth) as string[];
      lines.forEach((line, index) => {
        if (y + lineHeight > pageHeight - bottom) {
          newPage();
          doc.setFont("times", style);
          doc.setFontSize(size);
          doc.setTextColor(0);
        }
        const shouldJustify = align === "justify" && index < lines.length - 1;
        if (shouldJustify) {
          const words = line.trim().split(/\s+/);
          const wordsWidth = words.reduce((width, word) => width + doc.getTextWidth(word), 0);
          const spacing = words.length > 1 ? (contentWidth - wordsWidth) / (words.length - 1) : 0;
          let x = marginX;
          words.forEach((word) => {
            doc.text(word, x, y);
            x += doc.getTextWidth(word) + spacing;
          });
        } else {
          doc.text(line, align === "center" ? 105 : marginX, y, { align: align === "center" ? "center" : "left" });
        }
        y += lineHeight;
      });
      y += after;
    };

    writeLines("STATEMENT OF PURPOSE", 16, "bold", 7, 2, "center");
    writeLines(`Provisional PhD Research Title: ${details.researchTitle}`, 11.5, "bold", 5.8, 5, "center");
    paragraphs.forEach((paragraph) => writeLines(paragraph, 11, "normal", 5.35, 3, "justify"));
    addPageNumber();
    return doc;
  }

  function previewPdf() {
    const url = createPdf().output("bloburl");
    window.open(url.toString(), "_blank", "noopener,noreferrer");
  }

  function downloadPdf() {
    const university = details.university.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "") || "University";
    createPdf().save(`Faruque-Abdullah-SOP-${university}.pdf`);
  }

  return <div className="sop-builder">
    <section className="sop-hero">
      <span>SOP generator</span>
      <h1>Tailor your Statement of Purpose.</h1>
      <p>Complete the application details to produce a university-specific SOP with a live preview and a clear PDF download.</p>
    </section>

    <section className="sop-workspace">
      <aside className="sop-controls">
        <div className="sop-controls-heading"><span>Application variables</span><h2>Tailoring Details</h2><p>Replace every sample value before submission.</p></div>
        <div className="sop-fields">
          <label>University name<input value={details.university} onChange={(e) => update("university", e.target.value)} /></label>
          <label>Department or school<input value={details.department} onChange={(e) => update("department", e.target.value)} /></label>
          <label>Degree programme<input value={details.programme} onChange={(e) => update("programme", e.target.value)} /></label>
          <label>Prospective supervisor<input value={details.supervisor} onChange={(e) => update("supervisor", e.target.value)} /></label>
          <label>Research group or laboratory<input value={details.researchGroup} onChange={(e) => update("researchGroup", e.target.value)} /></label>
          <label>Why this group is a strong fit<textarea rows={4} value={details.researchFit} onChange={(e) => update("researchFit", e.target.value)} /></label>
          <label>Provisional research title<textarea rows={4} value={details.researchTitle} onChange={(e) => update("researchTitle", e.target.value)} /></label>
          <label>Funding or scholarship<input value={details.funding} onChange={(e) => update("funding", e.target.value)} /></label>
          <div className="sop-field-row">
            <label>Word limit<input inputMode="numeric" value={details.wordLimit} onChange={(e) => update("wordLimit", e.target.value)} /></label>
            <label>Separate proposal<select value={details.separateProposal} onChange={(e) => update("separateProposal", e.target.value)}><option>To be confirmed</option><option>Required</option><option>Not required</option></select></label>
          </div>
          <label>Required format<input value={details.format} onChange={(e) => update("format", e.target.value)} /></label>
        </div>
        <div className={`sop-word-count ${limit > 0 && wordCount > limit ? "over" : ""}`}><strong>{wordCount}</strong><span>words {limit ? `of ${limit}` : ""}</span></div>
        <div className="sop-actions"><button type="button" onClick={previewPdf}>Preview PDF</button><button className="secondary" type="button" onClick={downloadPdf}>Download PDF</button></div>
        <div className="sop-checklist"><h3>Before submission</h3><ol><li>Add the university and supervisor details. Explain specifically why the selected research group is a strong fit.</li><li>Check the university&apos;s word limit, required format and whether a separate research proposal is needed.</li><li>Keep the research title provisional. Refine it according to the supervisor, literature review and availability of experimental data.</li></ol></div>
      </aside>

      <div className="sop-preview-wrap">
        <div className="sop-preview-toolbar"><div><span>Live document preview</span><strong>{details.university || "Target University"}</strong></div><small>{details.format} · Separate proposal: {details.separateProposal}</small></div>
        <article className="sop-paper">
          <h2>Statement of Purpose</h2>
          <h3>Provisional PhD Research Title</h3>
          <h4>{details.researchTitle}</h4>
          {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          <footer><strong>Faruque Abdullah</strong><span>Assistant Professor, RUET, Bangladesh</span></footer>
        </article>
      </div>
    </section>
  </div>;
}
