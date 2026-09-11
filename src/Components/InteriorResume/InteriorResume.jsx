import "./InteriorResume.css";

function InteriorResume() {
  return (
    <section className="InteriorResume" aria-label="Resume">
      <div>
        <p>Prefer the short version?</p>
        <h2>Take the resume.</h2>
      </div>
      <div className="InteriorResume__actions">
        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          View online ↗
        </a>
        <a href="/resume.pdf" download>
          Download PDF ↓
        </a>
      </div>
    </section>
  );
}

export default InteriorResume;
