import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState[false];

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[purple]">Sigma Eta Pi</h1>
      <ul className="flex hidden">
        <li className="p-4">Startups</li>
        <li className="p-4">Members</li>
        <li className="p-4" style={{ whiteSpace: "nowrap" }}>
          Founder's Education
        </li>
        <li className="p-4">Recruitment</li>
      </ul>
      <div>
        {}
        <AiOutlineMenu size={20} />
      </div>
      <div className="fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[gray]">
        <h1 className="w-full text-3xl font-bold text-[purple] m-4">
          Sigma Eta Pi
        </h1>
        <ul className="uppercase">
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
