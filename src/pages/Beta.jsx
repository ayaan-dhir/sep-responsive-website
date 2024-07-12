import React from "react";

// Beta
import chris from "../assets/members/beta/chris.jpg";
import inika from "../assets/members/beta/inika.jpg";
import jareice from "../assets/members/beta/jareice.jpg";
import nima from "../assets/members/beta/nima.jpg";
import romeo from "../assets/members/beta/romeo.jpg";
import saher from "../assets/members/beta/saher.jpg";
import shivam from "../assets/members/beta/shivam.jpg";

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

function Beta() {
    return (
        <div data-theme="black" className="text-center">
          <h1 className="font-semibold text-[56pt] text-white pt-[96px]">
          Beta
          </h1>
          <div className="grid justify-center grid-cols-[repeat(auto-fill,minmax(250px,1fr))] lg:gap-x-[150px] lg:gap-y-[100px] gap-[100px] pl-[100px] pr-[100px] pt-[30px] pb-[50px]">
            {betaData.map((member) => (
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
  
  export default Beta;