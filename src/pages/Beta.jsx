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
    link: "https://www.linkedin.com/in/-christopher-kwan-/",
  },
  {
    id: 2,
    name: "Inika Meha",
    photo: inika,
    link: "https://www.linkedin.com/in/inika-mehra-0b2293191/",
  },
  {
    id: 3,
    name: "Jareice Graham",
    photo: jareice,
    link: "https://www.linkedin.com/in/jareice-graham-93226b224/",
  },
  {
    id: 4,
    name: "Nima Movahedi",
    photo: nima,
    link: "https://www.linkedin.com/in/nima-movahedi/",
  },
  {
    id: 5,
    name: "Romeo Azizian",
    photo: romeo,
    link: "https://www.linkedin.com/in/romeo-azizian-076000199/",
  },
  {
    id: 6,
    name: "Saher Noor",
    photo: saher,
    link: "https://www.linkedin.com/in/saher-noor-a666781a6/",
  },
  {
    id: 7,
    name: "Shivam Shah",
    photo: shivam,
    link: "https://www.linkedin.com/in/shivam-s-053b95129/",
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

export default Beta;
