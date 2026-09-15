import "./App.css";
// Add react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import AllProjects from "./Pages/AllProjects/AllProjects";
import AllExperience from "./Pages/AllExperience/AllExperience";
import Services from "./Pages/Services/Services";
import ArabicServices from "./Pages/ArabicServices/ArabicServices";
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
          <Route path="/services" element={<Services />} />
          <Route path="/ar/services" element={<ArabicServices />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
