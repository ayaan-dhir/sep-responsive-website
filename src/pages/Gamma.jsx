import React from "react";

// Gamma
import ashley from "../assets/members/gamma/ashley.jpg";
import kanu from "../assets/members/gamma/kanu.jpg";
import kyletran from "../assets/members/gamma/kyletran.jpg";
import kylettran from "../assets/members/gamma/kylettran.png";
import redford from "../assets/members/gamma/redford.JPG";
import rithwik from "../assets/members/gamma/rithwik.jpg";
import rod from "../assets/members/gamma/rod.png";
import zak from "../assets/members/gamma/zak.jpg";

const gammaData = [
    {
      id: 1,
      name: "Ashley Herrarte",
      photo: ashley,
    },
  
    {
      id: 2,
      name: "Kanu Chandra",
      photo: kanu,
    },
  
    {
      id: 3,
      name: "Kyle Tran",
      photo: kyletran,
    },
  
    {
      id: 4,
      name: "Kyle T. Tran",
      photo: kylettran,
    },
  
    {
      id: 5,
      name: "Redford Hudson",
      photo: redford,
    },
  
    {
      id: 6,
      name: "Rithwik Kerur",
      photo: rithwik,
    },
  
    {
      id: 7,
      name: "Roderick Mendenhall",
      photo: rod,
    },
  
    {
      id: 8,
      name: "Zakariya Hussain",
      photo: zak,
    },
  ];

  function Gamma() {
    return (
        <div data-theme="black" className="text-center">
          <h1 className="font-semibold text-[56pt] text-white pt-[96px]">
          Gamma
          </h1>
          <div className="grid justify-center grid-cols-[repeat(auto-fill,minmax(250px,1fr))] lg:gap-x-[150px] lg:gap-y-[100px] gap-[100px] pl-[100px] pr-[100px] pt-[30px] pb-[50px]">
            {gammaData.map((member) => (
              <div key={member.id} className="flex flex-col items-center">
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  effect="blur"
                  className="w-[300px] h-[400px] rounded-[20px] object-cover"
                />
                <div className="font-normal text-[18pt] mt-[10px] text-white">
                  {member.name}
                </div>
              </div>
            ))}
          </div>
          </div>
    );
  }
  
  export default Gamma;