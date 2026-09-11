import "./Experience.css";
import Info from "../../Info/Info.json";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import { Link } from "react-router-dom";
import React, { forwardRef } from "react";

const Experience = forwardRef((_, ref) => {
  const featuredExperience = Info.experience.slice(0, 3);

  return (
    <section id="experience" className="Experience" ref={ref}>
      <header className="Experience__header">
        <div>
          <p className="Experience__index">02 / Experience</p>
          <h2>A track record of owning the hard parts.</h2>
        </div>
        <p className="Experience__headerNote">
          Open a company to explore individual roles and the work behind them.
        </p>
      </header>

      <ol className="Experience__list">
        {featuredExperience.map((experience) => (
          <li key={experience.id}>
            <ExperienceCard experience={experience} />
          </li>
        ))}
      </ol>

      <div className="Experience__actions">
        <Link to="/experience" className="Experience__primaryAction">
          View All Experience
          <span className="icon__container arrow-up">
            <img src="/icons/up-right-arrow.png" alt="" />
          </span>
        </Link>
        <div className="Experience__resumeActions">
          <a href="resume.pdf" target="_blank" rel="noreferrer">
            View Resume
          </a>
          <a href="resume.pdf" download>
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
});

export default Experience;
