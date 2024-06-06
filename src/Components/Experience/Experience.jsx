import "./Experience.css";
import Info from "../../Info/Info.json";
import React, { forwardRef } from "react";

const Experience = forwardRef(({ screenWidth }, ref) => {
  return (
    <section id="experience" className="Experience" ref={ref}>
      {screenWidth < 1024 && (
        <div className="Experience__header">
          <h2>EXPERIENCE</h2>
        </div>
      )}
      <div>
        <ol className="Experience__list">
          {Info.experience &&
            Info.experience.map((experience, index) => (
              <li
                key={index}
                className={`Experience__container`}
                onClick={() => {
                  window.open(experience.company_url, "_blank");
                }}
              >
                <div className="Experience__date">
                  <p>
                    <span>{experience.from}</span> —{" "}
                    <span> {experience.to}</span>
                  </p>
                </div>
                <div className="Experience__content">
                  <h3 className={`Experience__title`}>
                    <a
                      href={experience.company_url}
                      target="_blank"
                      rel="noreferrer"
                      className={`Experience__link`}
                    >
                      {experience.title} • <span>{experience.company}</span>
                      <span className={`icon__container arrow-up`}>
                        <img
                          src="/icons/up-right-arrow.png"
                          alt="up-right-arrow"
                        />
                      </span>
                    </a>
                  </h3>
                  <p className="Experience__paragraph">
                    {experience.description}
                  </p>
                  <ul className="Experience__skills">
                    {experience.skills.map((skill, index) => (
                      <li key={index} className="Experience__skill__wrapper">
                        <div className="Experience__skill">{skill}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
        </ol>
        <div className="Experience__resume">
          <a href="resume.pdf" target="_blank" rel="noreferrer">
            View Resume
            <span className="icon__container arrow-up">
              <img src="/icons/up-right-arrow.png" alt="up-right-arrow" />
            </span>
          </a>

          <a href="resume.pdf" download>
            Download
            <span className="icon__container arrow-down">
              <img src="/icons/down-right-arrow.png" alt="up-right-arrow" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
});
export default Experience;
