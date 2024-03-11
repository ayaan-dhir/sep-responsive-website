import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Startups from "./pages/Startups"
import Board from "./pages/Board";

// Placeholder components for each route
// const Startups = () => (
//   <div>
//     <h2>Startups Page</h2>
//   </div>
// );
// const Members = () => (
//   <div>
//     <h2>Members Page</h2>
//   </div>
// );

const FoundersEducation = () => (
  <div>
    <h2>Founder's Education Page</h2>
  </div>
);
const Recruitment = () => (
  <div>
    <h2>Recruitment Page</h2>
  </div>
);

function App() {
  return (
    <Router>
      <div data-theme="forest">
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
          <Route path="/founders-education" element={<FoundersEducation />} />
          <Route path="/recruitment" element={<Recruitment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
