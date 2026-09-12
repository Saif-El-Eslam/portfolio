import "./InteriorResume.css";
import { Download, ExternalLink } from "lucide-react";

function InteriorResume() {
  return (
    <section className="InteriorResume" aria-label="Resume">
      <div>
        <p>Prefer the short version?</p>
        <h2>Take the resume.</h2>
      </div>
      <div className="InteriorResume__actions">
        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          <span>View online</span>
          <ExternalLink size={15} strokeWidth={2} aria-hidden="true" />
        </a>
        <a href="/resume.pdf" download>
          <span>Download PDF</span>
          <Download size={15} strokeWidth={2} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export default InteriorResume;
