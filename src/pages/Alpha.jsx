import React from "react";

// Alpha
import alexia from "../assets/members/alpha/alexia.JPG";
import ayaan from "../assets/members/alpha/ayaan.jpg";
import isaac from "../assets/members/alpha/isaac.JPG";
import michael from "../assets/members/alpha/michael.jpg";
import rosario from "../assets/members/alpha/rosario.jpg";
import ruby from "../assets/members/alpha/ruby.JPG";

const alphaData = [
  {
    id: 1,
    name: "Alexia Rudh",
    photo: alexia,
    link: "https://www.linkedin.com/in/alexia-p-rudh/",
  },
  {
    id: 2,
    name: "Ayaan Dhir",
    photo: ayaan,
    link: "https://www.linkedin.com/in/ayaandhir/",
  },
  {
    id: 3,
    name: "Isaac Larroque",
    photo: isaac,
    link: "https://www.linkedin.com/in/isaac-larroque-86821920a/",
  },
  {
    id: 4,
    name: "Michael Ross",
    photo: michael,
    link: "https://www.linkedin.com/in/aemwross/",
  },
  {
    id: 5,
    name: "Rosario Pozos",
    photo: rosario,
    link: "https://www.linkedin.com/in/rosario-pozos-077956202/",
  },
  {
    id: 6,
    name: "Ruby Mejia-Perez",
    photo: ruby,
    link: "https://www.linkedin.com/in/ruby-mejia-perez/",
  },
];

function Alpha() {
  return (
    <div data-theme="black" className="text-center">
      <h1 className="font-semibold text-[56pt] text-white pt-[96px]">
        Alpha
      </h1>
      <div className="grid justify-center grid-cols-[repeat(auto-fill,minmax(250px,1fr))] lg:gap-x-[150px] lg:gap-y-[100px] gap-[100px] pl-[100px] pr-[100px] pt-[30px] pb-[50px]">
        {alphaData.map((member) => (
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

export default Alpha;
