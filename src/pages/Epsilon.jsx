import React from "react";

// Epsilon
import antonio from "../assets/members/epsilon/antonio.JPG";
import ariel from "../assets/members/epsilon/ariel.JPG";
import ariya from "../assets/members/epsilon/ariya.JPG";
import caleb from "../assets/members/epsilon/caleb.JPG";
import delphine from "../assets/members/epsilon/delphine.JPG";
import elisa from "../assets/members/epsilon/elisa.JPG";
import felix from "../assets/members/epsilon/felix.JPG";
import jessicahu from "../assets/members/epsilon/jessicahu.JPG";
import jessicatam from "../assets/members/epsilon/jessicatam.JPG";
import joseph from "../assets/members/epsilon/joseph.JPG";
import pahel from "../assets/members/epsilon/pahel.JPG";
import samantha from "../assets/members/epsilon/samantha.JPG";

const epsilonData = [
  {
    id: 1,
    name: "Antonio Li",
    photo: antonio,
    link: "https://www.linkedin.com/in/antonioli1/",
  },
  {
    id: 2,
    name: "Ariel Tjandra",
    photo: ariel,
    link: "https://www.linkedin.com/in/ariel-tjandra/",
  },
  {
    id: 3,
    name: "Ariya Gowda",
    photo: ariya,
    link: "https://www.linkedin.com/in/ariya-gowda-b20485225/",
  },
  {
    id: 4,
    name: "Caleb Chung",
    photo: caleb,
    link: "https://www.linkedin.com/in/caleb-chung-7796941a0/",
  },
  {
    id: 5,
    name: "Delphine Tai-Beauchamp",
    photo: delphine,
    link: "https://www.linkedin.com/in/delphinetb/",
  },
  {
    id: 6,
    name: "Elisa Yan",
    photo: elisa,
    link: "https://www.linkedin.com/in/elisa-yan-150852234/",
  },
  {
    id: 7,
    name: "Felix Toffaneto-Werner",
    photo: felix,
    link: "https://www.linkedin.com/in/felixtwerner/",
  },
  {
    id: 8,
    name: "Jessica Hu",
    photo: jessicahu,
    link: "https://www.linkedin.com/in/jessica-hu-a85557276/",
  },
  {
    id: 9,
    name: "Jessica Tam",
    photo: jessicatam,
    link: "https://www.linkedin.com/in/jessica-tam-704240281",
  },
  {
    id: 10,
    name: "Joseph Marquez",
    photo: joseph,
    link: "https://www.linkedin.com/in/joseph-marquez-6009a2262/",
  },
  {
    id: 11,
    name: "Pahel Srivastava",
    photo: pahel,
    link: "https://www.linkedin.com/in/pahel-srivastava/",
  },
  {
    id: 12,
    name: "Samantha Gibbons",
    photo: samantha,
    link: "https://www.linkedin.com/in/samantha-gibbons-395b40294/",
  },
];

function Epsilon() {
  return (
    <div data-theme="black" className="text-center">
      <h1 className="font-semibold text-[56pt] text-white pt-[96px]">
        Epsilon
      </h1>
      <div className="grid justify-center grid-cols-[repeat(auto-fill,minmax(250px,1fr))] lg:gap-x-[150px] lg:gap-y-[100px] gap-[100px] pl-[100px] pr-[100px] pt-[30px] pb-[50px]">
        {epsilonData.map((member) => (
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

export default Epsilon;
