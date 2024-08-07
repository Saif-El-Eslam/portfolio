// "use client";
import "./MainHeader.css";
import Info from "../../Info/Info.json";
import { Link } from "react-scroll";
import { useState } from "react";
import Image from "next/image";

function MainHeader<Number, String>({ screenWidth, activeSection }) {
  const [hoveredItem, setHoveredItem] = useState<String | null>(null);

  const handleMouseEnter = (item: String) => {
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
              <Link
                to="about"
                offset={-96}
                smooth={true}
                duration={20}
                activeClass="active"
              >
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
                  <div
                    className={
                      activeSection === "about" || hoveredItem === "about"
                        ? "transition translate-in"
                        : "transition translate-out"
                    }
                  >
                    ABOUT
                  </div>
                </li>
              </Link>

              <Link
                to="experience"
                smooth={true}
                duration={20}
                activeClass="active"
                offset={-96}
              >
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
                  <div
                    className={
                      activeSection === "experience" ||
                      hoveredItem === "experience"
                        ? "transition translate-in"
                        : "transition translate-out"
                    }
                  >
                    EXPERIENCE
                  </div>
                </li>
              </Link>

              <Link
                to="projects"
                smooth={true}
                duration={20}
                activeClass="active"
                offset={-96}
              >
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
                  <div
                    className={
                      activeSection === "projects" || hoveredItem === "projects"
                        ? "translate-in transition"
                        : "translate-out transition"
                    }
                  >
                    PROJECTS
                  </div>
                </li>
              </Link>
            </ul>
          </nav>
        )}
      </div>
      <ul className="MainHeader__links">
        {Info?.links?.map((link, index) => {
          return (
            <li key={index} className="relative">
              <a href={link.url} target="_blank" rel="noreferrer">
                <Image
                  src={link.icon}
                  alt={link.title}
                  className="object-cover"
                  fill
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MainHeader;
