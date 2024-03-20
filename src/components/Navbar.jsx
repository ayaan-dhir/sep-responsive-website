import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [navbarDark, setNavbarDark] = useState(false);

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

  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      // If there's a timeout in progress, clear it to reset the timer
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Immediately set navbar to dark upon scrolling
      setNavbarDark(true);

      // Set a timeout to change the navbar back to transparent after 150ms of no scrolling
      timeoutId = setTimeout(() => {
        setNavbarDark(false);
      }, 750); // Adjust the delay as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Clear the timeout when the component is unmounted to prevent memory leaks
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  // Conditional style based on navbarDark state
  const navbarStyles = navbarDark
    ? { backgroundColor: "rgba(11, 11, 11, 0.2)" }
    : { backgroundColor: "transparent" };

  return (
    <div
      data-theme="business"
      className="flex justify-between items-center h-24 mx-auto px-6 fixed inset-0 z-10"
      style={navbarStyles}
    >
      <Link
        to="/"
        className="w-full text-3xl font-bold text-white"
        style={{ whiteSpace: "nowrap" }}
        onClick={closeNav} // Close nav when clicking on the logo/home link
      >
        Sigma Eta Pi
      </Link>
      <ul className="hidden md:flex text-white">
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
                <li className="px-4 py-2 bg-black hover:bg-accent hover:text-white text-[var(--fallback-b1,oklch(var(--b1)/1))]">
                  <Link to="/members/board" onClick={closeNav}>
                    Board
                  </Link>
                </li>
                <li className="px-4 py-2 bg-black hover:bg-accent hover:text-white text-[var(--fallback-b1,oklch(var(--b1)/1))]">
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
        {nav ? (
          <AiOutlineClose size={20} color="black"/>
        ) : (
          <AiOutlineMenu size={20} color="white" />
        )}
      </div>
      <div
        className={
          nav
            ? "fixed right-0 top-0 w-[60%] h-full border-l border-gray bg-white ease-in-out duration-500"
            : "fixed right-[-100%] top-0 w-[50%] h-full border-l border-gray bg-white ease-in-out duration-500"
        }
        style={{ zIndex: 1 }}
      >
        <ul className="pt-6 text-[#202020]">
          <li className="p-4">
            <Link to="/startups" onClick={closeNav}>
              Startups
            </Link>
          </li>
          <li className="p-4">
            <button onClick={toggleDropdown}>Members</button>
            {isDropdownOpen && (
              <div className="absolute w-40 text-primary">
                <ul>
                  <li className="px-4 py-2 hover:bg-primary hover:text-white">
                    <Link to="/members/board" onClick={closeNav}>
                      Board
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-primary hover:text-white">
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
