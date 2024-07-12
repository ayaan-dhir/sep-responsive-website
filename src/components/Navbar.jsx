import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import seplogo from '../assets/logos/sep_white.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  const handleNav = () => {
    setNav(!nav);
    if (nav) {
      setIsDropdownOpen(false);
      setIsSubDropdownOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSubDropdown = () => {
    setIsSubDropdownOpen(!isSubDropdownOpen);
  };

  const closeNav = () => {
    setNav(false);
    setIsDropdownOpen(false);
    setIsSubDropdownOpen(false);
  };

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const navbarStyles = showNavbar
    ? { transform: 'translateY(0)', transition: 'transform 0.3s ease-in-out', backgroundColor: 'transparent' }
    : { transform: 'translateY(-100%)', transition: 'transform 0.3s ease-in-out', backgroundColor: 'transparent' };

  const textColorClass = (bgColor) => {
    const darkColors = ["black", "#4343ff"];
    return darkColors.includes(bgColor) ? "text-white" : "text-black";
  };

  return (
    <div
      data-theme="business"
      className="flex justify-between items-center h-24 mx-auto px-6 fixed w-full z-50"
      style={navbarStyles}
    >
      <Link
        to="/"
        className="flex items-center h-full"
        onClick={closeNav}
      >
        <img src={seplogo} alt="Sigma Eta Pi" className="h-full" />
      </Link>
      <ul className="hidden md:flex text-white items-center h-full">
        <li className="flex items-center h-full px-1 sm:px-2 md:px-4 lg:px-6 text-xl">
          <Link to="/startups">Startups</Link>
        </li>
        <li
          className="relative flex items-center h-full px-1 sm:px-2 md:px-4 lg:px-6 text-xl"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="relative z-10">Members</button>
          {isDropdownOpen && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white text-black text-center w-[120px]">
              <ul>
                <li className={`px-4 py-2 hover:bg-[#4343ff] ${textColorClass("white")} hover:${textColorClass("#4343ff")}`}>
                  <Link to="/members/board" onClick={closeNav}>
                    Board
                  </Link>
                </li>
                <li
                  className={`px-4 py-2 hover:bg-[#4343ff] ${textColorClass("white")} hover:${textColorClass("#4343ff")} relative`}
                  onMouseEnter={() => setIsSubDropdownOpen(true)}
                  onMouseLeave={() => setIsSubDropdownOpen(false)}
                >
                  <button>Classes</button>
                  {isSubDropdownOpen && (
                    <div className="absolute top-full left-0 w-[120px] bg-white">
                      <ul>
                        {["Zeta", "Epsilon", "Delta", "Gamma", "Beta", "Alpha", "Founding"].map((className) => (
                          <li key={className} className={`px-4 py-2 hover:bg-[#4343ff] ${textColorClass("white")} hover:${textColorClass("#4343ff")}`}>
                            <Link to={`/members/classes/${className.toLowerCase()}`} onClick={closeNav}>
                              {className}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          )}
        </li>
        <li className="flex items-center h-full px-1 sm:px-2 md:px-4 lg:px-6 text-xl">
          <Link to="/founders-education">Founder's Education</Link>
        </li>
        <li className="flex items-center h-full px-1 sm:px-2 md:px-4 lg:px-6 text-xl">
          <Link to="/recruitment">Recruitment</Link>
        </li>
      </ul>
      <div
        onClick={handleNav}
        className="block md:hidden cursor-pointer z-50"
      >
        {nav ? (
          <AiOutlineClose size={30} color="white" />
        ) : (
          <AiOutlineMenu size={30} color="white" />
        )}
      </div>
      <div
        className={
          nav
            ? "fixed right-0 top-0 w-[60%] h-full bg-black text-white ease-in-out duration-500"
            : "fixed right-[-100%] top-0 w-[60%] h-full bg-black text-white ease-in-out duration-500"
        }
      >
        <ul className="pt-6">
          <li className="p-4 border-b border-gray-600">
            <Link to="/startups" onClick={closeNav}>
              Startups
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <button onClick={toggleDropdown} className="w-full text-left">
              Members
            </button>
            {isDropdownOpen && (
              <div className="text-white">
                <ul>
                  <li className={`px-4 py-2 border-b border-gray-600 hover:bg-primary hover:text-white`}>
                    <Link to="/members/board" onClick={closeNav}>
                      Board
                    </Link>
                  </li>
                  <li className={`px-4 py-2 border-b border-gray-600 hover:bg-primary hover:text-white relative`}>
                    <button onClick={toggleSubDropdown} className="w-full text-left">
                      Classes
                    </button>
                    {isSubDropdownOpen && (
                      <div className="bg-black text-white">
                        <ul>
                          {["Zeta", "Epsilon", "Delta", "Gamma", "Beta", "Alpha", "Founding"].map((className) => (
                            <li key={className} className={`px-4 py-2 border-b border-gray-600 hover:bg-primary hover:text-white`}>
                              <Link to={`/members/classes/${className.toLowerCase()}`} onClick={closeNav}>
                                {className}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="p-4 border-b border-gray-600">
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
