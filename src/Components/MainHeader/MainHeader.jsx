import "./MainHeader.css";
import Info from "../../Info/Info.json";
import { Link as ScrollLink } from "react-scroll";

const navigation = ["about", "experience", "projects"];

function MainHeader({ activeSection }) {
  return (
    <header className="MainHeader">
      <nav className="MainHeader__nav" aria-label="Main navigation">
        <a href="#top" className="MainHeader__brand" aria-label="Back to top">
          <span className="MainHeader__mark">SE</span>
          <span>Saifeleslam Elsayed</span>
        </a>

        <div className="MainHeader__navLinks">
          {navigation.map((section) => (
            <ScrollLink
              key={section}
              to={section}
              offset={-96}
              smooth
              duration={350}
              className={activeSection === section ? "is-active" : ""}
            >
              {section}
            </ScrollLink>
          ))}
        </div>

        <a href={`mailto:${Info.email}`} className="MainHeader__contact">
          Let&apos;s talk
        </a>
      </nav>

      <div className="MainHeader__hero">
        <div className="MainHeader__heroCopy">
          <p className="MainHeader__availability">
            <span aria-hidden="true" /> Based in Cairo · Working remotely
          </p>
          <p className="MainHeader__name">{Info.name}</p>
          <h1>
            I make complicated systems
            <em> feel straightforward.</em>
          </h1>
          <p className="MainHeader__intro">
            Full stack engineer working from distributed Rails services to the
            React interfaces people actually touch. I care about software that
            stays clear under pressure—for users and for the teams maintaining
            it.
          </p>

          <div className="MainHeader__heroActions">
            <ScrollLink to="projects" offset={-96} smooth duration={350}>
              See selected work
              <span aria-hidden="true">↓</span>
            </ScrollLink>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              Open resume
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <aside
          className="MainHeader__brief"
          aria-label="Current role and highlights"
        >
          <div className="MainHeader__briefTop">
            <p>Currently</p>
            <span>2026</span>
          </div>
          <div className="MainHeader__currentRole">
            <span>Full Stack Engineer</span>
            <strong>AvidBeam Technologies</strong>
            <small>Alongside freelance work with Thaat</small>
          </div>
          <dl className="MainHeader__facts">
            <div>
              <dt>70M+</dt>
              <dd>records migrated</dd>
            </div>
            <div>
              <dt>3</dt>
              <dd>roles at AvidBeam</dd>
            </div>
            <div>
              <dt>Full stack</dt>
              <dd>product to infrastructure</dd>
            </div>
          </dl>
          <div className="MainHeader__briefFooter">
            <span>Rails</span>
            <span>React</span>
            <span>Distributed systems</span>
          </div>
        </aside>
      </div>

      <div className="MainHeader__scrollNote" aria-hidden="true">
        <span>Scroll to explore</span>
        <i />
      </div>
    </header>
  );
}

export default MainHeader;
