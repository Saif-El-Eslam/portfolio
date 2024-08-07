"use client";

import "@app/globals.css";
import { useState, useEffect, useRef } from "react";
import MainHeader from "@/Components/MainHeader/MainHeader";
import About from "@/Components/About/About";
import Experience from "@/Components/Experience/Experience";
import Projects from "@/Components/Projects/Projects";
import Footer from "@/Components/Footer/Footer";

// break points 1024, 640

function Page() {
  const [width, setWidth] = useState(0);

  const [activeSection, setActiveSection] = useState("about");

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const handleScroll = () => {
    // const paddingHeight = 96;

    const section1Top = section1Ref?.current?.offsetTop;
    const section2Top = section2Ref?.current?.offsetTop;
    const section3Top = section3Ref?.current?.offsetTop;

    const scrollPosition = window.scrollY + window.innerHeight / 3;

    if (scrollPosition >= section3Top) {
      setActiveSection("projects");
    } else if (scrollPosition >= section2Top) {
      setActiveSection("experience");
    } else if (scrollPosition >= section1Top) {
      setActiveSection("about");
    } else {
      setActiveSection("");
    }
  };

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="MainPage">
      <header className="MainPage__header">
        <MainHeader screenWidth={width} activeSection={activeSection} />
      </header>
      <main className="MainPage__main">
        <About screenWidth={width} ref={section1Ref} />
        <Experience screenWidth={width} ref={section2Ref} />
        <Projects screenWidth={width} ref={section3Ref} />

        <footer className="MainPage__footer">
          <Footer />
        </footer>
      </main>
    </div>
  );
}

export default Page;
