import { NavLink, Link } from "react-router-dom";
import Info from "../../Info/Info.json";
import "./InteriorNav.css";

function InteriorNav() {
  return (
    <nav className="InteriorNav" aria-label="Portfolio navigation">
      <Link to="/" className="InteriorNav__brand" aria-label="Back to home">
        <span className="InteriorNav__mark">SE</span>
        <span className="InteriorNav__brandText">
          <strong>Saifeleslam Elsayed</strong>
          <small>Full Stack Engineer</small>
        </span>
      </Link>

      <div className="InteriorNav__pages">
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/experience">Experience</NavLink>
      </div>

      <a href={`mailto:${Info.email}`} className="InteriorNav__contact">
        Let&apos;s talk
      </a>
    </nav>
  );
}

export default InteriorNav;
