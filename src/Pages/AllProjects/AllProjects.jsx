import Info from "../../Info/Info.json";
import InteriorNav from "../../Components/InteriorNav/InteriorNav";
import InteriorResume from "../../Components/InteriorResume/InteriorResume";
import Footer from "../../Components/Footer/Footer";
import { ArrowUpRight } from "lucide-react";
import "./AllProjects.css";

function ProjectRow({ project, index }) {
  const content = (
    <>
      <div className="AllProjects__number">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <small>{project.year}</small>
      </div>

      <div className="AllProjects__identity">
        {project.images?.[0] ? (
          <div className="AllProjects__thumb">
            <img src={project.images[0]} alt="" />
          </div>
        ) : (
          <div className="AllProjects__thumb AllProjects__thumb--empty">
            {project.title.slice(0, 1)}
          </div>
        )}
        <div>
          <p>{project.made_at}</p>
          <h2>{project.title}</h2>
        </div>
      </div>

      <p className="AllProjects__description">{project.description}</p>

      <ul className="AllProjects__skills">
        {project.skills.slice(0, 4).map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
        {project.skills.length > 4 && <li>+{project.skills.length - 4}</li>}
      </ul>

      <ArrowUpRight
        size={16}
        strokeWidth={2}
        className="AllProjects__arrow"
        aria-hidden="true"
      />
    </>
  );

  return project.url ? (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="AllProjects__row"
    >
      {content}
    </a>
  ) : (
    <div className="AllProjects__row AllProjects__row--static">{content}</div>
  );
}

function AllProjects() {
  const years = Info.projects
    .flatMap((project) => project.year.match(/\d{4}/g) || [])
    .map(Number);
  const firstYear = Math.min(...years);
  const latestYear = Math.max(...years);

  return (
    <div className="AllProjects">
      <InteriorNav />

      <main className="AllProjects__wrapper">
        <header className="AllProjects__hero">
          <div>
            <p className="AllProjects__eyebrow">01 / Project index</p>
            <h1>
              Work,
              <em> shipped.</em>
            </h1>
          </div>
          <div className="AllProjects__heroAside">
            <p>
              Products, experiments, and systems built across backend, frontend,
              data, and infrastructure.
            </p>
            <p className="AllProjects__heroArabic" lang="ar" dir="rtl">
              مشاريع برمجية متكاملة تشمل تطوير الويب والأنظمة الخلفية والبنية
              التحتية.
            </p>
            <dl>
              <div>
                <dt>{Info.projects.length}</dt>
                <dd>projects</dd>
              </div>
              <div>
                <dt>
                  {firstYear} &ndash; {latestYear}
                </dt>
                <dd>timeline</dd>
              </div>
            </dl>
          </div>
        </header>

        <section
          className="AllProjects__index"
          aria-labelledby="project-list-title"
        >
          <div className="AllProjects__indexHeader">
            <h2 id="project-list-title">All projects</h2>
            <p>Select a row to visit the live product or source.</p>
          </div>

          <ol className="AllProjects__list">
            {Info.projects.map((project, index) => (
              <li key={project.title}>
                <ProjectRow project={project} index={index} />
              </li>
            ))}
          </ol>
        </section>

        <InteriorResume />
        <Footer label="Contact" />
      </main>
    </div>
  );
}

export default AllProjects;
