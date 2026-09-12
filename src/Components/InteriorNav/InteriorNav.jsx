import { NavLink, Link } from "react-router-dom";
import Info from "../../Info/Info.json";
import "./InteriorNav.css";

function InteriorNav() {
  return (
    <nav className="InteriorNav" aria-label="Portfolio navigation">
      <Link
        to="/"
        className="InteriorNav__brand"
        aria-label="Back to home"
        onClick={() => window.scrollTo(0, 0)}
      >
        <span className="InteriorNav__brandText">
          <strong>Home</strong>
          <small>{Info.name}</small>
        </span>
      </Link>

      <div className="InteriorNav__pages">
        <NavLink to="/projects" onClick={() => window.scrollTo(0, 0)}>
          Projects
        </NavLink>
        <NavLink to="/experience" onClick={() => window.scrollTo(0, 0)}>
          Experience
        </NavLink>
      </div>

      <a href="#contact" className="InteriorNav__contact">
        Let&apos;s talk
      </a>
    </nav>
  );
}

export default InteriorNav;
