import "./MainPage.css";
import MainHeader from "../../Components/MainHeader/MainHeader";
import About from "../../Components/About/About";
import Experience from "../../Components/Experience/Experience";
import Projects from "../../Components/Projects/Projects";
import Footer from "../../Components/Footer/Footer";

function MainPage() {
  return (
    <div id="top" className="MainPage">
      <MainHeader />
      <main className="MainPage__main">
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
