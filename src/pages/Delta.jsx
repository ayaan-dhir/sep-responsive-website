import React from "react";

// Delta
import byren from "../assets/members/delta/byren.jpg";
import clare from "../assets/members/delta/clare.JPG";
import daniel from "../assets/members/delta/daniel.jpg";
import jai from "../assets/members/delta/jai.JPG";
import kai from "../assets/members/delta/kai.jpg";
import michelle from "../assets/members/delta/michelle.jpg";
import shreya from "../assets/members/delta/shreya.jpg";
import vishwa from "../assets/members/delta/vishwa.JPG";

const deltaData = [
    {
      id: 1,
      name: "Byren Cheema",
      photo: byren,
    },
  
    {
      id: 2,
      name: "Clare Wu",
      photo: clare,
    },
  
    {
      id: 3,
      name: "Daniel Yi",
      photo: daniel,
    },
  
    {
      id: 4,
      name: "Jai Hathiramani",
      photo: jai,
    },
  
    {
      id: 5,
      name: "Kai Meyers",
      photo: kai,
    },
  
    {
      id: 6,
      name: "Michelle Lei",
      photo: michelle,
    },
  
    {
      id: 7,
      name: "Shreya Mawandia",
      photo: shreya,
    },
  
    {
      id: 8,
      name: "Vishwa Shah",
      photo: vishwa,
    },
  ];

  function Delta() {
    return (
        <div data-theme="black" className="text-center">
          <h1 className="font-semibold text-[56pt] text-white pt-[96px]">
          Delta
          </h1>
          <div className="grid justify-center grid-cols-[repeat(auto-fill,minmax(250px,1fr))] lg:gap-x-[150px] lg:gap-y-[100px] gap-[100px] pl-[100px] pr-[100px] pt-[30px] pb-[50px]">
            {deltaData.map((member) => (
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
  
  export default Delta;