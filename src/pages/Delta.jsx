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
    link: "https://www.linkedin.com/in/byren-cheema-255a25215/",
  },
  {
    id: 2,
    name: "Clare Wu",
    photo: clare,
    link: "https://www.linkedin.com/in/claremwu/",
  },
  {
    id: 3,
    name: "Daniel Yi",
    photo: daniel,
    link: "https://www.linkedin.com/in/daniel-yi-2a527223a",
  },
  {
    id: 4,
    name: "Jai Hathiramani",
    photo: jai,
    link: "https://www.linkedin.com/in/jai-h-1b7a96a3/",
  },
  {
    id: 5,
    name: "Kai Meyers",
    photo: kai,
    link: "https://www.linkedin.com/in/kai-meyers/",
  },
  {
    id: 6,
    name: "Michelle Lei",
    photo: michelle,
    link: "https://www.linkedin.com/in/ymlei/",
  },
  {
    id: 7,
    name: "Shreya Mawandia",
    photo: shreya,
    link: "https://www.linkedin.com/in/shreyamawandia/",
  },
  {
    id: 8,
    name: "Vishwa Shah",
    photo: vishwa,
    link: "https://www.linkedin.com/in/vishwa-shah-b82a70161/",
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

export default Delta;
