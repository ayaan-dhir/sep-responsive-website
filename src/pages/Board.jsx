import React from "react";
import ayaan from "../assets/members/board/ayaan.jpg";
import byren from "../assets/members/board/byren.jpg";
import danielyi from "../assets/members/board/daniel.jpg";
import jessicahu from "../assets/members/epsilon/jessicahu.JPG";
import shreya from "../assets/members/board/shreya.jpg";
import rithwik from "../assets/members/board/rithwik.jpg";

const boardData = [
  {
    id: 1,
    position: "President",
    name: "Shreya Mawandia",
    photo: shreya,
  },
  {
    id: 2,
    position: "VP of External Affairs",
    name: "Byren Cheema",
    photo: byren,
  },

  {
    id: 3,
    position: "VP of Internal Affairs",
    name: "Daniel Yi",
    photo: danielyi,
  },

  {
    id: 4,
    position: "VP of Technology/Communications",
    name: "Jessica Hu",
    photo: jessicahu,
  },

  {
    id: 5,
    position: "VP of Finance",
    name: "Rithwik Kerur",
    photo: rithwik,
  },

  {
    id: 6,
    position: "VP of Founder's Education",
    name: "Ayaan Dhir",
    photo: ayaan,
  },
];

function Board() {
  return (
    <div data-theme="forest" className="text-center pt-[96px]">
      <h1 className="font-semibold text-[56pt] text-white md:pt-10">Board</h1>
      <div className="grid justify-center grid-cols-[repeat(auto-fill,minmax(250px,1fr))] lg:gap-x-[150px] lg:gap-y-[100px] gap-[100px] pl-[100px] pr-[100px] pt-[50px] pb-[50px]">
        {boardData.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            <img
              src={member.photo}
              alt={member.name}
              className="w-10/12 rounded-[20px] object-cover"
            />
            <div className="font-black text-[16pt] mt-[5px] text-white">
              {member.position}
            </div>
            <div className="font-light text-[18pt] mt-[5px]">{member.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;
