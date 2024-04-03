import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Startups from "./pages/Startups";
import Board from "./pages/Board";
import Classes from "./pages/Classes";
import FoundersEducation from "./pages/FoundersEd";
import Recruitment from "./pages/Recruitment";
import Community from "./pages/Community";
import { useLocation } from "react-router-dom";

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <div data-theme="black">
        <ScrollToTop /> {/* Include the ScrollToTop component here */}
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Stats />
                <Community />
              </>
            }
          />
          <Route path="/startups" element={<Startups />} />
          <Route path="/members/board" element={<Board />} />
          <Route path="/members/classes" element={<Classes />} />
          <Route path="/founders-education" element={<FoundersEducation />} />
          <Route path="/recruitment" element={<Recruitment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
