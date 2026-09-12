import "./About.css";
import Info from "../../Info/Info.json";
import React, { forwardRef } from "react";

const About = forwardRef((_, ref) => {
  return (
    <section id="about" className="About" ref={ref}>
      <header className="About__heading">
        <p className="About__index">01 / About</p>
        <h2>Engineering with a product instinct.</h2>
        <figure className="About__portrait">
          <img
            src="/about/image.jpeg"
            alt="Saifeleslam Elsayed"
          />
          <figcaption>Cairo, Egypt</figcaption>
        </figure>
      </header>

      <div className="About__body">
        <p className="About__lead">
          I&apos;m most useful where product decisions and technical constraints
          meet&ndash;turning ambitious ideas into systems that are understandable,
          resilient, and ready to ship.
        </p>

        <div className="About__story">
          <p>{Info.about.past}</p>
          <p>{Info.about.present}</p>
          <p>{Info.about.hobbies}</p>
        </div>

        <aside className="About__principles">
          <p>What I care about</p>
          <ul>
            <li>Systems that recover gracefully</li>
            <li>Interfaces that explain themselves</li>
            <li>Decisions that reduce future work</li>
          </ul>
        </aside>
      </div>
    </section>
  );
});

export default About;
