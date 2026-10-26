import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { publications } from "@/lib/publications";

export const metadata: Metadata = {
  title: "Research Learning — Faruque Abdullah",
  description: "Detailed summaries, findings and technical tools from Faruque Abdullah's publications.",
};

type Detail = { summary: string; result: string; tools: string[]; theme: string };

const details: Record<string, Detail> = {
  "Performance Evaluation of CFRP-Retrofitted Circular T-Joints Under Damage and Elevated Temperature Conditions": {
    summary: "This experimental study assessed 20 circular hollow-steel T-joints under axial compression. Undamaged specimens and joints containing one-sided or bilateral chord-wall cuts were strengthened with CFRP at 0°, 45° and 90° fibre orientations, then evaluated under ambient and elevated-temperature conditions. Vertical displacement was recorded on opposite sides of each specimen to establish load–displacement response and ductility.",
    result: "CFRP improved strength and ductility in moderately damaged joints. Its benefit decreased for severe damage and elevated temperatures because heat degraded the adhesive and CFRP matrix.",
    tools: ["Axial compression testing", "LVDT instrumentation", "CFRP wrapping", "Thermal conditioning", "Load–displacement analysis"], theme: "Structural retrofitting",
  },
  "Influence of Building Orientation on Instant, Delayed Sensible and Latent Energy Loads: A Building Information Modelling (BIM) Based Analysis": {
    summary: "The study developed an academic-building BIM model and rotated it through alternative orientations to quantify changes in instant sensible, delayed sensible and latent cooling loads. The model connected geometric and material information with cloud-based energy simulation, allowing orientation scenarios to be compared before construction. The workflow demonstrated how BIM data can support energy-conscious early design decisions.",
    result: "Building orientation measurably changed the distribution and magnitude of cooling loads, showing that orientation should be tested as an early passive-design variable.",
    tools: ["Autodesk Revit 2020", "Autodesk Insight", "BIM energy modelling", "Orientation scenario analysis", "gbXML and IFC workflows"], theme: "Building performance",
  },
  "Numerical and machine learning modeling of GFRP confined concrete-steel hollow elliptical columns": {
    summary: "This research combined finite-element simulation with machine-learning prediction for GFRP-confined concrete-steel hollow elliptical columns. ABAQUS models represented concrete, steel and GFRP components and were validated against experimental behaviour. A dataset of 116 specimens was used to train and compare Decision Tree, Random Forest, AdaBoost, CatBoost and XGBoost models, while feature influence was examined through explainable analysis.",
    result: "The validated numerical model reproduced structural response effectively. Among the evaluated algorithms, CatBoost produced the strongest overall predictive performance.",
    tools: ["ABAQUS 6.14-2", "Python", "Tkinter", "CatBoost and XGBoost", "Random Forest and AdaBoost", "SHAP analysis"], theme: "Numerical and ML modelling",
  },
  "BIM-Based Approach to Reduce GHG Emissions in Construction": {
    summary: "The article created a BIM-based building model and used model-derived material information to evaluate embodied greenhouse-gas emissions at whole-building and component levels. Alternative material scenarios were compared to locate carbon-intensive elements and assess practical reduction strategies. This connected design information, quantity assessment and environmental performance within one decision workflow.",
    result: "The roof and walls were identified as major emission contributors. Concrete containing 50% GGBS and steel hollow sections offered meaningful opportunities to reduce the modelled carbon footprint.",
    tools: ["BIM authoring", "Model-based quantity assessment", "Carbon-emission calculation", "Material scenario comparison", "Component-level CO₂ analysis"], theme: "Sustainable construction",
  },
  "Sustainable Solutions to Alleviate Water Seepage for Enhancing Slope Stability": {
    summary: "This numerical study investigated how groundwater and seepage conditions affect slope stability during end-of-construction, steady-seepage and rapid-drawdown states. A two-dimensional finite-element model represented soil behaviour using the Mohr–Coulomb framework. Toe drains, rock toes and horizontal filters were examined as sustainable measures for lowering pore-water pressure and improving stability.",
    result: "The drainage alternatives increased calculated factors of safety, demonstrating that controlled seepage and pore-pressure reduction can be as important as improving soil resistance.",
    tools: ["GeoStudio 2004", "SEEP/W", "2D finite-element analysis", "Mohr–Coulomb model", "Seepage and stability assessment"], theme: "Slope stability",
  },
  "Enhancement of Concrete's Flexibility Using Local Ingredients": {
    summary: "The paper reviewed the potential of locally available fibres, particularly jute and coir, for producing more flexible engineered cementitious composites. It compared natural fibres with conventional steel, synthetic and PVA fibres in terms of crack bridging, tensile response, flexural behaviour, availability and sustainability. The work framed locally sourced reinforcement as a pathway towards lower-cost and more accessible ductile concrete.",
    result: "Local natural fibres showed promise for improving flexibility and sustainability, although fibre treatment, dosage and mix optimisation require controlled experimental verification.",
    tools: ["Structured literature review", "Material comparison", "ECC mix-design concepts", "Fibre-performance assessment", "Sustainability evaluation"], theme: "Concrete materials",
  },
  "A Study on Water Logging Problem of Rangpur City": {
    summary: "This urban-infrastructure study examined the physical and institutional causes of recurring waterlogging in Rangpur. Residents' experiences, field conditions and information from relevant public agencies were considered alongside the condition of drains, canals, ponds and open land. The analysis connected weak drainage capacity with unplanned development, insufficient maintenance, solid-waste blockage and deterioration of the Shama Sundori canal.",
    result: "The findings supported an integrated response involving coordinated drainage planning, canal restoration, routine maintenance and improved solid-waste management.",
    tools: ["Field observation", "Resident survey", "Stakeholder information", "Municipal-record review", "Drainage-system assessment"], theme: "Urban infrastructure",
  },
  "A Comparative Study of Lateral Load Analysis Considering Two BNBC Codes Using ETABS Software": {
    summary: "The study modelled the same building in ETABS and applied the lateral-load provisions of two Bangladesh National Building Code editions. Keeping the structural system consistent allowed code-dependent changes in wind and seismic demand to be compared through structural response measures. The work highlighted the importance of checking analytical output against the assumptions and coefficients specified by each code.",
    result: "The comparison showed that revisions to code parameters can change design actions, base shear, storey displacement and drift, which can directly influence structural design decisions.",
    tools: ["ETABS", "BNBC load calculation", "Structural modelling", "Base-shear comparison", "Storey-drift analysis"], theme: "Structural analysis",
  },
  "Evaluation of Traffic Accessibility Condition and Noise Pollution in Dhaka City of Bangladesh": {
    summary: "The article evaluated traffic accessibility and environmental noise along the Natun Bazar–Farmgate corridor in both travel directions. Field observations were used to examine travel time, signal operation and the portion of the day in which traffic could move freely. Noise measurements added an environmental-health dimension to the assessment of corridor performance.",
    result: "Free-flow access was available for only about 9% of the day, a seven-kilometre journey could take nearly two hours and recorded noise reached approximately 101 dB.",
    tools: ["Traffic field observation", "Travel-time analysis", "Signal green-time calculation", "Sound-level measurement", "Descriptive statistics"], theme: "Transport and environment",
  },
};

function JourneyIcon({ type }: { type: string }) {
  return type === "Journal Article"
    ? <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h11l3 3v15H5V3Z" /><path d="M16 3v4h4M8 11h8M8 15h8M8 19h5" /></svg>
    : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v10H4V5Z" /><path d="M8 20h8M12 15v5M8 10l2-2 2 2 3-3 2 2" /></svg>;
}

export default function ResearchJourneyPage() {
  const journalCount = publications.filter((item) => item.type === "Journal Article").length;
  const conferenceCount = publications.length - journalCount;
  return <PageShell><main className="journey-page">
    <section className="journey-hero">
      <div><span>Research · Methods · Skills</span><h1>Research Learning</h1><p>Detailed summaries of my published studies and the software, experimental instruments and analytical methods developed through each research project.</p></div>
      <aside><div><strong>{publications.length}</strong><span>Published works</span></div><div><strong>{journalCount}</strong><span>Journal articles</span></div><div><strong>{conferenceCount}</strong><span>Conference papers</span></div></aside>
    </section>
    <section className="journey-intro"><span>Technical growth through published research</span><h2>Studies, findings and research tools</h2><p>This page explains the purpose, methodology and principal result of each publication. It also records the specialist software, laboratory instruments and analytical techniques used or developed during the work. The entries are arranged from the newest publication to the earliest study.</p></section>
    <section className="journey-stream" aria-label="Research summaries and technical learning">
      {publications.map((publication, index) => {
        const detail = details[publication.title];
        return <article className="journey-entry" key={publication.title}>
          <div className="journey-rail"><span>{publication.year}</span><i><JourneyIcon type={publication.type} /></i><small>{String(index + 1).padStart(2, "0")}</small></div>
          <div className="journey-card">
            <header><div><span className={publication.type === "Journal Article" ? "journal" : "conference"}>{publication.type}</span><b>{detail.theme}</b></div><h2>{publication.title}</h2><p>{publication.venue}</p></header>
            <div className="journey-insights">
              <section><span>Research summary</span><p>{detail.summary}</p><div className="journey-result"><b>Key finding</b><p>{detail.result}</p></div></section>
              <section className="learned"><span>Software &amp; technical tools</span><div className="journey-tools">{detail.tools.map((tool) => <b key={tool}>{tool}</b>)}</div></section>
            </div>
            <footer><p>{publication.authors}</p><a href={publication.href} target="_blank" rel="noreferrer">Read the publication <span>↗</span></a></footer>
          </div>
        </article>;
      })}
    </section>
    <section className="journey-outlook"><span>Combined capability</span><h2>How these studies shape my technical profile</h2><p>Together, these publications have developed experience in laboratory testing, BIM, finite-element analysis, structural software, environmental assessment and machine learning. This multidisciplinary foundation now supports my proposed research on data-driven structural assessment, damage detection and localisation in concrete structures.</p></section>
  </main></PageShell>;
}
