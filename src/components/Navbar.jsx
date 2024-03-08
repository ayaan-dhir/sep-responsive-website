import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom"; // Make sure to import Link

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // New function to close the navbar
  const closeNav = () => {
    setNav(false);
  };

  return (
    <div
      data-theme="forest"
      className="flex justify-between items-center h-24 mx-auto px-6"
      style={{ position: "relative", zIndex: 1 }}
    >
      <Link
        to="/"
        className="w-full text-3xl font-bold text-[white]"
        style={{ whiteSpace: "nowrap" }}
        onClick={closeNav} // Close nav when clicking on the logo/home link
      >
        Sigma Eta Pi
      </Link>
      <ul className="hidden md:flex">
        <li className="px-1 sm:px-2 md:px-4 lg:px-6 text-xl">
          <Link to="/startups">Startups</Link>
        </li>
        <li className="px-1 sm:px-2 md:px-4 lg:px-6 text-xl">
          <Link to="/members">Members</Link>
        </li>
        <li
          className="px-1 sm:px-2 md:px-4 lg:px-6 text-xl"
          style={{ whiteSpace: "nowrap" }}
        >
          <Link to="/founders-education">Founder's Education</Link>
        </li>
        <li className="px-1 sm:px-2 md:px-4 lg:px-6 text-xl">
          <Link to="/recruitment">Recruitment</Link>
        </li>
      </ul>
      <div
        onClick={handleNav}
        className="block md:hidden"
        style={{ zIndex: 2, position: "relative" }}
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed right-0 top-0 w-[50%] h-full border-l border-l-gray-900 bg-[#191818] ease-in-out duration-500"
            : "fixed right-[-100%] top-0 w-[50%] h-full border-l border-l-gray-900 bg-[#191818] ease-in-out duration-500"
        }
        style={{ zIndex: 1 }}
      >
        <ul className="pt-6">
          <li className="p-4">
            <Link to="/startups" onClick={closeNav}>
              Startups
            </Link>
          </li>
          <li className="p-4">
            <Link to="/members" onClick={closeNav}>
              Members
            </Link>
          </li>
          <li className="p-4" style={{ whiteSpace: "nowrap" }}>
            <Link to="/founders-education" onClick={closeNav}>
              Founder's Education
            </Link>
          </li>
          <li className="p-4">
            <Link to="/recruitment" onClick={closeNav}>
              Recruitment
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
