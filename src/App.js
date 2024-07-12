import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Startups from "./pages/Startups";
import Board from "./pages/Board";
import FoundersEducation from "./pages/FoundersEd";
import Recruitment from "./pages/Recruitment";
import Community from "./pages/Community";
import Zeta from "./pages/Zeta"
import Epsilon from "./pages/Epsilon"
import Delta from "./pages/Delta"
import Gamma from "./pages/Gamma"
import Beta from "./pages/Beta"
import Alpha from "./pages/Alpha"
import Founding from "./pages/Founding"
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
          <Route path="/members/classes/zeta" element={<Zeta />} />
          <Route path="/members/classes/epsilon" element={<Epsilon />} />
          <Route path="/members/classes/delta" element={<Delta />} />
          <Route path="/members/classes/gamma" element={<Gamma />} />
          <Route path="/members/classes/beta" element={<Beta />} />
          <Route path="/members/classes/alpha" element={<Alpha />} />
          <Route path="/members/classes/founding" element={<Founding />} />
          <Route path="/founders-education" element={<FoundersEducation />} />
          <Route path="/recruitment" element={<Recruitment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
