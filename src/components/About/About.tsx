"use client";
import "./About.css";
import Info from "../../Info/Info.json";
import React, { forwardRef } from "react";

const About = forwardRef(({ screenWidth }, ref) => {
  return (
    <section id="about" className="About" ref={ref}>
      {screenWidth < 1024 && (
        <div className="About__header">
          <h2>ABOUT</h2>
        </div>
      )}
      <div>
        {Info.about.past && (
          <p className="About__paragraph">{Info.about.past}</p>
        )}
        {Info.about.present && (
          <p className="About__paragraph">{Info.about.present}</p>
        )}
        {Info.about.hobbies && <p>{Info.about.hobbies}</p>}
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
