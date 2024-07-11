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

// Delta
import byren from "../assets/members/delta/byren.jpg";
import clare from "../assets/members/delta/clare.JPG";
import daniel from "../assets/members/delta/daniel.jpg";
import jai from "../assets/members/delta/jai.JPG";
import kai from "../assets/members/delta/kai.jpg";
import michelle from "../assets/members/delta/michelle.jpg";
import shreya from "../assets/members/delta/shreya.jpg";
import vishwa from "../assets/members/delta/vishwa.JPG";

// Gamma
import ashley from "../assets/members/gamma/ashley.jpg";
import kanu from "../assets/members/gamma/kanu.jpg";
import kyletran from "../assets/members/gamma/kyletran.jpg";
import kylettran from "../assets/members/gamma/kylettran.png";
import redford from "../assets/members/gamma/redford.JPG";
import rithwik from "../assets/members/gamma/rithwik.jpg";
import rod from "../assets/members/gamma/rod.png";
import zak from "../assets/members/gamma/zak.jpg";

// Beta
import chris from "../assets/members/beta/chris.jpg";
import inika from "../assets/members/beta/inika.jpg";
import jareice from "../assets/members/beta/jareice.jpg";
import nima from "../assets/members/beta/nima.jpg";
import romeo from "../assets/members/beta/romeo.jpg";
import saher from "../assets/members/beta/saher.jpg";
import shivam from "../assets/members/beta/shivam.jpg";

// Alpha
import alexia from "../assets/members/alpha/alexia.JPG";
import ayaan from "../assets/members/alpha/ayaan.jpg";
import isaac from "../assets/members/alpha/isaac.JPG";
import michael from "../assets/members/alpha/michael.jpg";
import rosario from "../assets/members/alpha/rosario.jpg";
import ruby from "../assets/members/alpha/ruby.JPG";

// Founding
import danielvega from "../assets/members/founding/danielvega.jpg";
import marc from "../assets/members/founding/marc.JPG";
import nikesh from "../assets/members/founding/nikesh.jpg";
import nolan from "../assets/members/founding/nolan.jpg";
import stefani from "../assets/members/founding/stefani.JPG";

const epsilonData = [
  {
    id: 1,
    name: "Antonio Li",
    photo: antonio,
  },

  {
    id: 2,
    name: "Ariel Tjandra",
    photo: ariel,
  },

  {
    id: 3,
    name: "Ariya Gowda",
    photo: ariya,
  },

  {
    id: 4,
    name: "Caleb Chung",
    photo: caleb,
  },

  {
    id: 5,
    name: "Delphine Tai-Beauchamp",
    photo: delphine,
  },

  {
    id: 6,
    name: "Elisa Yan",
    photo: elisa,
  },

  {
    id: 7,
    name: "Felix Toffaneto-Werner",
    photo: felix,
  },

  {
    id: 8,
    name: "Jessica Hu",
    photo: jessicahu,
  },

  {
    id: 9,
    name: "Jessica Tam",
    photo: jessicatam,
  },

  {
    id: 10,
    name: "Joseph Marquez",
    photo: joseph,
  },

  {
    id: 11,
    name: "Pahel Srivastava",
    photo: pahel,
  },

  {
    id: 12,
    name: "Samantha Gibbons",
    photo: samantha,
  },
];

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

const betaData = [
  {
    id: 1,
    name: "Christopher Kwan",
    photo: chris,
  },

  {
    id: 2,
    name: "Inika Meha",
    photo: inika,
  },

  {
    id: 3,
    name: "Jareice Graham",
    photo: jareice,
  },

  {
    id: 4,
    name: "Nima Movahedi",
    photo: nima,
  },

  {
    id: 5,
    name: "Romeo Azizian",
    photo: romeo,
  },

  {
    id: 6,
    name: "Saher Noor",
    photo: saher,
  },

  {
    id: 7,
    name: "Shivam Shah",
    photo: shivam,
  },
];

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

const foundingData = [
  {
    id: 1,
    name: "Daniel Vega",
    photo: danielvega,
  },

  {
    id: 2,
    name: "Marc Villafuerte",
    photo: marc,
  },

  {
    id: 3,
    name: "Nikesh Poudel",
    photo: nikesh,
  },

  {
    id: 4,
    name: "Nolan Carroll",
    photo: nolan,
  },

  {
    id: 5,
    name: "Stefani Rios",
    photo: stefani,
  },
];

function Classes() {
  return (
    <div data-theme="black" className="text-center">
      <h1 className="font-semibold text-[56pt] text-white pt-[96px]">
        Classes
      </h1>
      <h2 className="font-normal text-[40pt] text-white pt-[30px]">Epsilon</h2>
      <div className="grid justify-center grid-cols-[repeat(auto-fill,minmax(250px,1fr))] lg:gap-x-[150px] lg:gap-y-[100px] gap-[100px] pl-[100px] pr-[100px] pt-[30px] pb-[50px]">
        {epsilonData.map((member) => (
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
      <h2 className="font-normal text-[40pt] text-white pt-[30px]">Delta</h2>
      <div className="grid justify-center grid-cols-[repeat(auto-fill,minmax(250px,1fr))] lg:gap-x-[150px] lg:gap-y-[100px] gap-[100px] pl-[100px] pr-[100px] pt-[30px] pb-[50px]">
        {deltaData.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            <img
              src={member.photo}
              alt={member.name}
              loading="lazy"
              className="w-[300px] h-[400px] rounded-[20px] object-cover"
            />
            <div className="font-normal text-[18pt] mt-[10px] text-white">
              {member.name}
            </div>
          </div>
        ))}
      </div>
      <h2 className="font-normal text-[40pt] text-white pt-[30px]">Gamma</h2>
      <div className="grid justify-center grid-cols-[repeat(auto-fill,minmax(250px,1fr))] lg:gap-x-[150px] lg:gap-y-[100px] gap-[100px] pl-[100px] pr-[100px] pt-[30px] pb-[50px]">
        {gammaData.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            <img
              src={member.photo}
              alt={member.name}
              loading="lazy"
              className="w-[300px] h-[400px] rounded-[20px] object-cover"
            />
            <div className="font-normal text-[18pt] mt-[10px] text-white">
              {member.name}
            </div>
          </div>
        ))}
      </div>
      <h2 className="font-normal text-[40pt] text-white pt-[30px]">Beta</h2>
      <div className="grid justify-center grid-cols-[repeat(auto-fill,minmax(250px,1fr))] lg:gap-x-[150px] lg:gap-y-[100px] gap-[100px] pl-[100px] pr-[100px] pt-[30px] pb-[50px]">
        {betaData.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            <img
              src={member.photo}
              alt={member.name}
              loading="lazy"
              className="w-[300px] h-[400px] rounded-[20px] object-cover"
            />
            <div className="font-normal text-[18pt] mt-[10px] text-white">
              {member.name}
            </div>
          </div>
        ))}
      </div>
      <h2 className="font-normal text-[40pt] text-white pt-[30px]">Alpha</h2>
      <div className="grid justify-center grid-cols-[repeat(auto-fill,minmax(250px,1fr))] lg:gap-x-[150px] lg:gap-y-[100px] gap-[100px] pl-[100px] pr-[100px] pt-[30px] pb-[50px]">
        {alphaData.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            <img
              src={member.photo}
              alt={member.name}
              loading="lazy"
              className="w-[300px] h-[400px] rounded-[20px] object-cover"
            />
            <div className="font-normal text-[18pt] mt-[10px] text-white">
              {member.name}
            </div>
          </div>
        ))}
      </div>
      <h2 className="font-normal text-[40pt] text-white pt-[30px]">Founding</h2>
      <div className="grid justify-center grid-cols-[repeat(auto-fill,minmax(250px,1fr))] lg:gap-x-[150px] lg:gap-y-[100px] gap-[100px] pl-[100px] pr-[100px] pt-[30px] pb-[50px]">
        {foundingData.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            <img
              src={member.photo}
              alt={member.name}
              loading="lazy"
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

export default Classes;
