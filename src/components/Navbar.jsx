import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeNav = () => {
    setNav(false);
    setIsDropdownOpen(false); // Also close the dropdown when closing the nav
  };

  const showDropdown = () => setIsDropdownOpen(true);
  const hideDropdown = () => setIsDropdownOpen(false);

  const dropdownOpenStyle = {
    transform: isDropdownOpen ? "translateY(50px)" : "none",
    transition: "transform 0.3s ease", // Optional: adds a smooth transition
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
        <li
          className="relative px-1 sm:px-2 md:px-4 lg:px-6 text-xl"
          onMouseEnter={showDropdown}
          onMouseLeave={hideDropdown}
        >
          <button>Members</button>
          {isDropdownOpen && (
            <div className="text-center absolute left-1/2 transform -translate-x-1/2 w-[120px]">
              <ul>
                <li className="px-4 py-2 bg-white hover:bg-accent hover:text-white text-[var(--fallback-b1,oklch(var(--b1)/1))]">
                  <Link to="/members/board" onClick={closeNav}>
                    Board
                  </Link>
                </li>
                <li className="px-4 py-2 bg-white hover:bg-accent hover:text-white text-[var(--fallback-b1,oklch(var(--b1)/1))]">
                  <Link to="/members/classes" onClick={closeNav}>
                    Classes
                  </Link>
                </li>
              </ul>
            </div>
          )}
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
            <button onClick={toggleDropdown}>Members</button>
            {isDropdownOpen && (
              <div className="absolute w-40 text-accent">
                <ul>
                  <li className="px-4 py-2 hover:bg-accent hover:text-white">
                    <Link to="/members/board" onClick={closeNav}>
                      Board
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-accent hover:text-white">
                    <Link to="/members/classes" onClick={closeNav}>
                      Classes
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="p-4"
            style={{ whiteSpace: "nowrap", ...dropdownOpenStyle }}
          >
            <Link
              to="/founders-education"
              style={dropdownOpenStyle}
              onClick={closeNav}
            >
              Founder's Education
            </Link>
          </li>
          <li className="p-4" style={dropdownOpenStyle}>
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
