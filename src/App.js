import "./App.css";
// Add react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import AllProjects from "./Pages/AllProjects/AllProjects";
import AllExperience from "./Pages/AllExperience/AllExperience";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/experience" element={<AllExperience />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
