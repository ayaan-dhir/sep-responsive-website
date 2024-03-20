import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Startups from "./pages/Startups"
import Board from "./pages/Board";
import Classes from "./pages/Classes"
import FoundersEducation from "./pages/FoundersEd";
import Recruitment from "./pages/Recruitment";


function App() {
  return (
    <Router>
      <div data-theme="business">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Stats />
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
