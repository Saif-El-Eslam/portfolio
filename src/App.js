import "./App.css";
// Add react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import AllProjects from "./Pages/AllProjects/AllProjects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/archive" element={<AllProjects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
