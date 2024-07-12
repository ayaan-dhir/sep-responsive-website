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
    },
  
    {
      id: 2,
      name: "Ayaan Dhir",
      photo: ayaan,
    },
  
    {
      id: 3,
      name: "Isaac Larroque",
      photo: isaac,
    },
  
    {
      id: 4,
      name: "Michael Ross",
      photo: michael,
    },
  
    {
      id: 5,
      name: "Rosario Pozos",
      photo: rosario,
    },
  
    {
      id: 6,
      name: "Ruby Mejia-Perez",
      photo: ruby,
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

export default Alpha;
