import "./AllProjects.css";
import Info from "../../Info/Info.json";
import { useState } from "react";

function AllProjects() {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  return (
    <div className="AllProjects">
      <div className="AllProjects__wrapper">
        <a href="/" target="_self" rel="noreferrer">
          <span className="AllProjects-icon">
            <img src="/icons/up-left-arrow.png" alt="up-left-arrow" />
          </span>
          <span className="back-link">Saifeleslam Elsayed</span>
        </a>
        <h1 className="AllProjects__header">All Projects</h1>
        <table className="AllProjects__table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Project</th>
              {width > 1024 && <th>Made at</th>}
              {width > 1024 && <th>Built with</th>}
              {width > 640 && <th>Link</th>}
            </tr>
          </thead>
          <tbody>
            <tr className="separator"></tr>
            {Info.projects &&
              Info.projects.map((project, index) => (
                <tr key={index}>
                  <td>
                    <p>{project.year}</p>
                  </td>
                  <td>
                    {width < 640 && project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="AllProjects-table-title-link"
                      >
                        {project.title}
                        <span className="AllProjects-table-icon">
                          <img
                            src="/icons/up-right-arrow.png"
                            alt="up-right-arrow"
                          />
                        </span>
                      </a>
                    ) : (
                      project.title
                    )}
                  </td>
                  {width > 1024 && (
                    <td>
                      <p>{project.made_at}</p>
                    </td>
                  )}
                  {width > 1024 && (
                    <td>
                      <ul className="AllProjects__skills">
                        {project.skills.map((skill, index) => (
                          <li
                            key={index}
                            className="AllProjects__skill__wrapper"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </td>
                  )}
                  {width > 640 && (
                    <td>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="AllProjects-table-link"
                        >
                          <p>{project.url}</p>
                          <span className="AllProjects-table-icon">
                            <img
                              src="/icons/up-right-arrow.png"
                              alt="up-right-arrow"
                            />
                          </span>
                        </a>
                      )}
                    </td>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllProjects;
