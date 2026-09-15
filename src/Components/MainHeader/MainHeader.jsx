import "./MainHeader.css";
import Info from "../../Info/Info.json";
import { ArrowDown, ExternalLink } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navigation = [
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
];

function MainHeader() {
  return (
    <header className="MainHeader">
      <nav className="MainHeader__nav" aria-label="Main navigation">
        <Link
          to="/"
          className="MainHeader__brand"
          aria-label="Back to home"
          onClick={() => window.scrollTo(0, 0)}
        >
          <span className="MainHeader__brandIdentity">
            <strong>
              <span className="MainHeader__brandShort">Saifeleslam</span>
              <span className="MainHeader__brandFull">{Info.name}</span>
            </strong>
            <small>{Info.title}</small>
          </span>
        </Link>

        <div className="MainHeader__navLinks">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => window.scrollTo(0, 0)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <a href="#contact" className="MainHeader__contact">
          Let&apos;s talk
        </a>
      </nav>

      <div className="MainHeader__hero">
        <div className="MainHeader__heroCopy">
          <p className="MainHeader__availability">
            <span aria-hidden="true" /> Based in Cairo · Working remotely
          </p>
          <h1 className="MainHeader__name">
            {Info.name} &mdash; Full Stack Engineer &amp; Freelance Web Developer
          </h1>
          <h2 className="MainHeader__statement">
            I make complicated systems
            <em> feel straightforward.</em>
          </h2>
          <p className="MainHeader__intro">
            Full stack engineer working from distributed Rails services to the
            React interfaces people actually touch. I care about software that
            stays clear under pressure&ndash;for users and for the teams maintaining
            it.
          </p>

          <div className="MainHeader__heroActions">
            <a href="#experience">
              See selected work
              <ArrowDown size={15} strokeWidth={2} aria-hidden="true" />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              Open resume
              <ExternalLink size={15} strokeWidth={2} aria-hidden="true" />
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
            <span>Next.js</span>
            <span>Node.js</span>
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
