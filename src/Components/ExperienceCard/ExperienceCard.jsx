import { useState } from "react";
import "./ExperienceCard.css";
import { ChevronDown, ExternalLink } from "lucide-react";

function SkillList({ skills = [], compact = false }) {
  if (!skills.length) return null;

  return (
    <ul className={`ExperienceCard__skills${compact ? " ExperienceCard__skills--compact" : ""}`}>
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}

function ExperienceCard({ experience }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = `experience-details-${experience.id}`;

  return (
    <article
      className={`ExperienceCard${isExpanded ? " ExperienceCard--expanded" : ""}`}
    >
      <div
        className="ExperienceCard__summary"
        onClick={(event) => {
          if (!event.target.closest("a")) setIsExpanded((current) => !current);
        }}
      >
        <div className="ExperienceCard__meta">
          <p className="ExperienceCard__date">
            {experience.from} &ndash; {experience.to}
          </p>
          <p className="ExperienceCard__location">{experience.location}</p>
        </div>

        <div className="ExperienceCard__content">
          <div className="ExperienceCard__headingRow">
            <div>
              <p className="ExperienceCard__eyebrow">
                {experience.roles[0].title} ·{" "}
                {experience.roles.length === 1
                  ? experience.roles[0].employment_type
                  : `${experience.roles.length} roles`}
              </p>
              <h3 className="ExperienceCard__company">{experience.company}</h3>
            </div>
            {experience.company_url && (
              <a
                href={experience.company_url}
                target="_blank"
                rel="noreferrer"
                className="ExperienceCard__companyLink"
                aria-label={`Visit ${experience.company}`}
              >
                <ExternalLink size={15} strokeWidth={2} aria-hidden="true" />
              </a>
            )}
          </div>

          <p className="ExperienceCard__overview">{experience.overview}</p>
          <SkillList skills={experience.skills} />

          <button
            type="button"
            className="ExperienceCard__toggle"
            aria-expanded={isExpanded}
            aria-controls={detailsId}
          >
            <span>{isExpanded ? "Hide role details" : "View role details"}</span>
            <ChevronDown
              size={15}
              strokeWidth={2}
              className="ExperienceCard__chevron"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      <div
        id={detailsId}
        className="ExperienceCard__details"
        hidden={!isExpanded}
      >
        {experience.roles.map((role) => (
          <section
            className="ExperienceCard__role"
            key={`${role.employment_type}-${role.from}`}
          >
            <div className="ExperienceCard__roleHeader">
              <div>
                <h4>{role.title}</h4>
                <p>{role.from} &ndash; {role.to}</p>
              </div>
              <span className="ExperienceCard__type">
                {role.employment_type}
              </span>
            </div>
            <ul className="ExperienceCard__highlights">
              {(role.highlights || [role.description]).map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <SkillList skills={role.skills} compact />
          </section>
        ))}
      </div>
    </article>
  );
}

export default ExperienceCard;
