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
    link: "https://www.linkedin.com/in/ashleyherrarte064921210/",
  },
  {
    id: 2,
    name: "Kanu Chandra",
    photo: kanu,
    link: "https://www.linkedin.com/in/kanu-chandra-30310916b/",
  },
  {
    id: 3,
    name: "Kyle Tran",
    photo: kyletran,
    link: "https://www.linkedin.com/in/kyle-tran-3395b2161/",
  },
  {
    id: 4,
    name: "Kyle T. Tran",
    photo: kylettran,
    link: "https://www.linkedin.com/in/kyletran01/",
  },
  {
    id: 5,
    name: "Redford Hudson",
    photo: redford,
    link: "https://www.linkedin.com/in/redfordfoxhudson/",
  },
  {
    id: 6,
    name: "Rithwik Kerur",
    photo: rithwik,
    link: "https://www.linkedin.com/in/rithwik-k-5090361aa/",
  },
  {
    id: 7,
    name: "Roderick Mendenhall",
    photo: rod,
    link: "https://www.linkedin.com/in/roderick-mendenhall-8b06a3244/",
  },
  {
    id: 8,
    name: "Zakariya Hussain",
    photo: zak,
    link: "https://www.linkedin.com/in/zakariya-munir-hussain/",
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
            <a href={member.link} target="_blank" rel="noopener noreferrer">
              <img
                src={member.photo}
                alt={member.name}
                loading="lazy"
                effect="blur"
                className="w-[300px] h-[400px] rounded-[20px] object-cover"
              />
            </a>
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
