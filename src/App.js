import "./App.css";
// Add react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import AllProjects from "./Pages/AllProjects/AllProjects";
import AllExperience from "./Pages/AllExperience/AllExperience";
import WebDevelopment from "./Pages/WebDevelopment/WebDevelopment";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Seo from "./Components/Seo/Seo";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Seo />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/experience" element={<AllExperience />} />
          <Route path="/web-development" element={<WebDevelopment />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
