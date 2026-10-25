"use client";

export function DownloadCvButton() {
  return (
    <button className="cv-download-button" type="button" onClick={() => window.print()} aria-label="Download CV as PDF">
      <span aria-hidden="true">↓</span> Download PDF
    </button>
  );
}
