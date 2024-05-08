import React from "react";
import ayaan from "../assets/members/alpha/ayaan.jpg";
import { HoverEffect } from "../components/ui/card-hover-effect";

// const curriculumItems = [
//   { title: "Problem Discovery" },
//   { title: "Customer Discovery" },
//   { title: "Minimum Viable Product" },
//   { title: "Market Analysis" },
//   { title: "Finance" },
//   { title: "Branding" },
//   { title: "Networking" },
//   { title: "Pitching" },
// ];

export const curriculumItems = [
  { title: "Problem Discovery" },
  { title: "Customer Discovery" },
  { title: "Minimum Viable Product" },
  { title: "Market Analysis" },
  { title: "Finance" },
  { title: "Branding" },
  { title: "Networking" },
  { title: "Pitching" },
];


function FoundersEducation() {
  return (
    <div className="sm:overflow-y-scroll sm:snap-mandatory sm:snap-y sm:h-screen">
      <div className="snap-start flex flex-col mx-auto text-center justify-center items-center h-screen">
        <h1 className="md:text-7xl sm:text-6xl text-5xl font-bold md:py-6 sm:py-4 py-2 text-white">
          Founder's Education
        </h1>
        <p className="md:text-4xl sm:text-3xl text-2xl font-bold text-slate-300">
          Our Startup Accelerator
        </p>
      </div>
      <div className="sm:snap-start flex flex-col mx-auto text-center justify-center items-center w-[90%] h-screen">
        <h1 className="md:text-7xl sm:text-6xl text-5xl font-bold md:py-6 sm:py-4 py-2 text-white">
          The Program
        </h1>
        <p className="md:text-4xl sm:text-3xl text-2xl font-bold text-slate-300">
          Founder's Education is our 8-week startup incubator program focused on
          helping you think and build like an entrepreneur.
        </p>
      </div>
      <div className="sm:snap-start flex flex-col h-screen text-center justify-center items-center sm:w-[80%] m-auto">
        <h1 className="text-white md:text-7xl sm:text-6xl text-4xl font-bold sm:py-4 py-2">
          Our Curriculum
        </h1>
        <div>
          <HoverEffect items={curriculumItems} />
        </div>
      </div>
      <div className="sm:snap-start flex flex-col justify-center items-center mx-auto sm:w-[90%] w-full h-screen text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-20 md:mt-20 lg:mt-0 xl:mt-0 w-full max-w-4xl text-white">
          A Note from Our FE
        </h1>
        <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center w-full max-w-6xl">
          <div className="w-5/12 sm:w-3/4 md:w-1/3 lg:max-w-md xl:w-96 mx-auto mt-2 lg:mx-4 rounded-lg overflow-hidden">
            <img src={ayaan} alt="Founder's Ed" className="w-full h-auto" />
          </div>
          <div className="flex-1 font-normal text-md md:text-xl lg:text-3xl mt-2 lg:mt-0 mx-4 text-left text-slate-300">
            <p>
              "Hi everyone! My name is Ayaan and I focus on building startups
              through our Founder's Education, our program designed to help you
              chase after your entrepreneurial endeavors. Our program is focused
              on collaboration and community as you get to build alongside your
              cohort. We have had members come in with no experience who later
              go on to pursue entrepreneurship full-time and we also have
              members who have started ventures before joining who go on to
              build their next startup. FE is the place where innovators at UCI
              come to build!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoundersEducation;
