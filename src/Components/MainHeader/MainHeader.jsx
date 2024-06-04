import "./MainHeader.css";
import Info from "../../Info/Info.json";
import { Link } from "react-scroll";
import { useState } from "react";

function MainHeader({ screenWidth, activeSection }) {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="MainHeader">
      <div className="MainHeader__content">
        <h1 className="MainHeader__title">{Info.name}</h1>
        <h2 className="MainHeader__subtitle">{Info.title}</h2>
        <p className="MainHeader__summary">{Info.summary}</p>

        {screenWidth > 1024 && (
          <nav className="MainHeader__nav">
            <ul>
              <li
                className="MainHeader__nav__item"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <span>——</span>
                <span
                  className={
                    activeSection === "about" || hoveredItem === "about"
                      ? "translate-in transition"
                      : "translate-out transition"
                  }
                >
                  ——
                </span>
                <Link
                  to="about"
                  smooth={true}
                  duration={20}
                  activeClass="active"
                  offset={-96}
                  className={
                    activeSection === "about" || hoveredItem === "about"
                      ? "transition translate-in"
                      : "transition translate-out"
                  }
                >
                  ABOUT
                </Link>
              </li>

              <li
                className="MainHeader__nav__item"
                onMouseEnter={() => handleMouseEnter("experience")}
                onMouseLeave={handleMouseLeave}
              >
                <span>——</span>
                <span
                  className={
                    activeSection === "experience" ||
                    hoveredItem === "experience"
                      ? "translate-in transition"
                      : "translate-out transition"
                  }
                >
                  ——
                </span>
                <Link
                  to="experience"
                  smooth={true}
                  duration={20}
                  activeClass="active"
                  offset={-96}
                  className={
                    activeSection === "experience" ||
                    hoveredItem === "experience"
                      ? "transition translate-in"
                      : "transition translate-out"
                  }
                >
                  EXPERIENCE
                </Link>
              </li>

              <li
                className="MainHeader__nav__item"
                onMouseEnter={() => handleMouseEnter("projects")}
                onMouseLeave={handleMouseLeave}
              >
                <span>——</span>
                <span
                  className={
                    activeSection === "projects" || hoveredItem === "projects"
                      ? "translate-in transition"
                      : "translate-out transition"
                  }
                >
                  ——
                </span>
                <Link
                  to="projects"
                  smooth={true}
                  duration={20}
                  activeClass="active"
                  offset={-96}
                  className={
                    activeSection === "projects" || hoveredItem === "projects"
                      ? "translate-in transition"
                      : "translate-out transition"
                  }
                >
                  PROJECTS
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
      <ul className="MainHeader__links">
        {Info?.links?.map((link, index) => {
          return (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noreferrer">
                <img src={link.icon} alt={link.name} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MainHeader;
