import React from "react";

// Zeta
import hoon from "../assets/members/zeta/hoon.JPG";
import rohit from "../assets/members/zeta/rohit.JPG";
import kyle from "../assets/members/zeta/kyle.JPG";
import yurina from "../assets/members/zeta/yurina.JPG";
import richard from "../assets/members/zeta/richard.JPG";
import jose from "../assets/members/zeta/jose.JPG";

const zetaData = [
  {
    id: 1,
    name: "Hoon Kim",
    photo: hoon,
  },

  {
    id: 2,
    name: "Rohit De",
    photo: rohit,
  },

  {
    id: 3,
    name: "Kyle King",
    photo: kyle,
  },

  {
    id: 4,
    name: "Yurina Tamura",
    photo: yurina,
  },

  {
    id: 5,
    name: "Richard Hunt",
    photo: richard,
  },

  {
    id: 6,
    name: "Jose Callejas",
    photo: jose,
  },
]

function Zeta() {
  return (
      <div data-theme="black" className="text-center">
        <h1 className="font-semibold text-[56pt] text-white pt-[96px]">
          Zeta
        </h1>
        <div className="grid justify-center grid-cols-[repeat(auto-fill,minmax(250px,1fr))] lg:gap-x-[150px] lg:gap-y-[100px] gap-[100px] pl-[100px] pr-[100px] pt-[30px] pb-[50px]">
          {zetaData.map((member) => (
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

export default Zeta;
