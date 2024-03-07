import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className="flex justify-between items-center h-24 mx-auto px-6 text-white"
      style={{ position: "relative", zIndex: 1 }}
    >
      <h1
        className="w-full text-3xl font-bold text-[white]"
        style={{ whiteSpace: "nowrap" }}
      >
        Sigma Eta Pi
      </h1>
      <ul className="hidden md:flex">
        {/* Use Tailwind's responsive padding utilities here */}
        <li className="px-1 sm:px-2 md:px-4 lg:px-6 text-xl">Startups</li>
        <li className="px-1 sm:px-2 md:px-4 lg:px-6 text-xl">Members</li>
        <li
          className="px-1 sm:px-2 md:px-4 lg:px-6 text-xl"
          style={{ whiteSpace: "nowrap" }}
        >
          Founder's Education
        </li>
        <li className="px-1 sm:px-2 md:px-4 lg:px-6 text-xl">Recruitment</li>
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
            ? "fixed right-0 top-0 w-[60%] h-full border-l border-l-gray-900 bg-[#191818] ease-in-out duration-500"
            : "fixed right-[-100%] ease-in-out duration-500"
        }
        style={{ zIndex: 1 }}
      >
        <ul className="uppercase pt-6">
          <li className="p-4">Startups</li>
          <li className="p-4">Members</li>
          <li className="p-4" style={{ whiteSpace: "nowrap" }}>
            Founder's Education
          </li>
          <li className="p-4">Recruitment</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
