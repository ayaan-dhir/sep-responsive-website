import React from "react";
import ayaan from "../assets/members/board/ayaan.jpg";
import rohit from "../assets/members/board/rohit.JPG";
import yurina from "../assets/members/board/yurina.JPG";
import richard from "../assets/members/board/richard.JPG";
import caleb from "../assets/members/board/caleb.JPG";

const boardData = [
  {
    id: 1,
    position: "President",
    name: "Ayaan Dhir",
    photo: ayaan,
  },

  // {
  //   id: 2,
  //   position: "VP of Founder's Education",
  //   name: "Undecided",
  //   // photo: 
  // },

  {
    id: 3,
    position: "VP of External Affairs",
    name: "Jose Callejas",
    // photo: ,
  },

  {
    id: 4,
    position: "VP of Internal Affairs",
    name: "Caleb Chung",
    photo: caleb,
  },

  {
    id: 5,
    position: "VP of Technology",
    name: "Rohit De",
    photo: rohit,
  },

  {
    id: 6,
    position: "VP of Finance",
    name: "Richard Hunt",
    photo: richard,
  },

  {
    id: 7,
    position: "VP of Recruitment",
    name: "Yurina Tamura",
    photo: yurina,
  },

  {
    id: 8,
    position: "VP of Media",
    name: "Hannah McCarthy",
    // photo: ,
  },
];

function Board() {
  return (
    <div data-theme="black" className="w-full text-center pt-[96px]">
      <h1 className="font-semibold text-[56pt] text-white md:pt-10">Board</h1>
      <div className="grid justify-center grid-cols-[repeat(auto-fill,minmax(250px,1fr))] lg:gap-x-[150px] lg:gap-y-[100px] gap-[100px] pl-[100px] pr-[100px] pt-[50px] pb-[50px]">
        {boardData.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            <img
              src={member.photo}
              alt={member.name}
              loading='lazy'
              className="w-10/12 rounded-[20px] object-cover"
            />
            <div className="font-bold text-[16pt] mt-[5px] text-white">
              {member.position}
            </div>
            <div className="font-light text-[18pt] mt-[5px] text-white">{member.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;
