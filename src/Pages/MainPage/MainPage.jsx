import "./MainPage.css";
import { useEffect, useRef, useState } from "react";
import MainHeader from "../../Components/MainHeader/MainHeader";
import About from "../../Components/About/About";
import Experience from "../../Components/Experience/Experience";
import Projects from "../../Components/Projects/Projects";
import Footer from "../../Components/Footer/Footer";

function MainPage() {
  const [activeSection, setActiveSection] = useState("");
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-20% 0px -55%", threshold: [0, 0.25, 0.5] },
    );

    [aboutRef, experienceRef, projectsRef].forEach((sectionRef) => {
      if (sectionRef.current) observer.observe(sectionRef.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="top" className="MainPage">
      <MainHeader activeSection={activeSection} />
      <main className="MainPage__main">
        <About ref={aboutRef} />
        <Experience ref={experienceRef} />
        <Projects ref={projectsRef} />
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
