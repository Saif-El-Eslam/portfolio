import "./Projects.css";
import Info from "../../Info/Info.json";
import React, { forwardRef } from "react";

const Projects = forwardRef(({ screenWidth }, ref) => {
  return (
    <section id="projects" className="Projects" ref={ref}>
      {screenWidth < 1024 && (
        <div className="Projects__header">
          <h2>PROJECTS</h2>
        </div>
      )}
      <div>
        <ul className="Projects__list">
          {Info.projects &&
            Info.projects.map(
              (project, index) =>
                project.view && (
                  <li
                    key={index}
                    onClick={() => {
                      window.open(project.url, "_blank");
                    }}
                  >
                    {console.log(project)}

                    <div className="Projects__container">
                      <div className="Projects__content">
                        <h3 className="Projects__title">
                          <a
                            href={project?.url}
                            target="_blank"
                            rel="noreferrer"
                            className="Projects__link"
                          >
                            {project?.title}
                            {project.url && project.url !== "" && (
                              <span className="icon__container arrow-up">
                                <img
                                  src="/icons/up-right-arrow.png"
                                  alt="up-right-arrow"
                                />
                              </span>
                            )}
                          </a>
                        </h3>
                        {project?.description && (
                          <p className="Projects__paragraph">
                            {project.description}
                          </p>
                        )}
                        {project?.skills.length > 0 && (
                          <ul className="Project__skills">
                            {project.skills.map((skill, index) => (
                              <li
                                key={index}
                                className="Project__skill__wrapper"
                              >
                                <div className="Project__skill">{skill}</div>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      {project?.images && project.images.length > 0 && (
                        <img
                          className="Projects__image"
                          src={project.images[0]}
                          alt={project.title}
                        />
                      )}
                    </div>
                  </li>
                )
            )}
        </ul>
        <div className="Projects__archive">
          <a href="/archive" target="_self" rel="noreferrer">
            View Full Project Archive
            <span className="icon__container arrow-up">
              <img src="/icons/up-right-arrow.png" alt="up-right-arrow" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
});

export default Projects;
