// "use client";
import "./Projects.css";
import Info from "../../Info/Info.json";
import React, { forwardRef } from "react";
import Image from "next/image";

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
                              <span className="icon__container arrow-up relative">
                                <Image
                                  src="/icons/up-right-arrow.png"
                                  alt="up-right-arrow"
                                  className="object-cover"
                                  fill
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
                        <div className="relative Projects__image">
                          <Image
                            className="object-cover border-[0.1rem] border-[rgba(167,165,183,0.3)] rounded-[0.5rem]"
                            src={project.images[0]}
                            alt={project.title}
                            fill
                          />
                        </div>
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
              <Image
                src="/icons/up-right-arrow.png"
                alt="up-right-arrow"
                width={13}
                height={13}
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
