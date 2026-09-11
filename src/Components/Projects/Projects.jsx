import "./Projects.css";
import Info from "../../Info/Info.json";
import { Link } from "react-router-dom";
import React, { forwardRef } from "react";

const Projects = forwardRef((_, ref) => {
  const featuredProjects = Info.projects
    .filter((project) => project.view)
    .slice(0, 3);

  return (
    <section id="projects" className="Projects" ref={ref}>
      <header className="Projects__header">
        <div>
          <p className="Projects__index">03 / Selected work</p>
          <h2>Products built from brief to production.</h2>
        </div>
        <p className="Projects__headerNote">
          A small selection of full-stack and frontend work with real users,
          operational constraints, and measurable outcomes.
        </p>
      </header>

      <ul className="Projects__list">
        {featuredProjects.map((project) => (
          <li key={project.title}>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="Projects__card"
            >
              <div className="Projects__meta">
                <span>{project.made_at}</span>
                <span>{project.year}</span>
              </div>

              <div
                className={`Projects__main${
                  project.images?.[0] ? " Projects__main--withMedia" : ""
                }`}
              >
                {project.images?.[0] && (
                  <div className="Projects__media">
                    <img src={project.images[0]} alt="" />
                  </div>
                )}

                <div className="Projects__content">
                  <div className="Projects__titleRow">
                    <h3>{project.title}</h3>
                    <span className="Projects__external" aria-hidden="true">
                      <img src="/icons/up-right-arrow.png" alt="" />
                    </span>
                  </div>

                  <p className="Projects__description">{project.description}</p>

                  {project.highlights?.length > 0 && (
                    <ul className="Projects__highlights">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  )}

                  <ul className="Projects__skills">
                    {project.skills.slice(0, 5).map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                    {project.skills.length > 5 && (
                      <li aria-label={`${project.skills.length - 5} more skills`}>
                        +{project.skills.length - 5}
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className="Projects__archive">
        <Link to="/projects">
          View All Projects
          <span className="icon__container arrow-up">
            <img src="/icons/up-right-arrow.png" alt="" />
          </span>
        </Link>
      </div>
    </section>
  );
});

export default Projects;
