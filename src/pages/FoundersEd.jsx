import React from "react";

import ayaan from "../assets/members/alpha/ayaan.jpg";

const curriculumItems = [
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
    <div>
      <div className="h-screen flex flex-col m-[-96px] mx-auto text-center justify-center items-center">
        <h1 className="md:text-7xl sm:text-6xl text-5xl font-bold md:py-6 sm:py-4 py-2">
          Founder's Education
        </h1>
        <p className="md:text-4xl sm:text-3xl text-2xl font-bold text-accent">
          Our Startup Accelerator
        </p>
      </div>
      <div className="h-screen flex flex-col mx-auto text-center justify-center items-center">
        <h1 className="md:text-7xl sm:text-6xl text-5xl font-bold md:py-6 sm:py-4 py-2">
          The Program
        </h1>
        <p className="md:text-4xl sm:text-3xl text-2xl font-bold text-accent px-20">
          Founder's Education is our 8-week startup incubator program focused on
          helping you think and build like an entrepreneur.
        </p>
      </div>
      <div className="h-screen mx-auto text-center justify-center items-center pt-[10px] w-[80%] m-auto">
        <h1 className="headings">Our Curriculum</h1>
        <div>
          <div className="grid justify-center items-start gap-[30px] px-[50px] auto-cols-[minmax(100px,1fr)]">
            {curriculumItems.map((item, index) => (
              <div
                key={index}
                className="bg-black border-4 border-white rounded-lg p-5 flex flex-col justify-center h-38"
              >
                <div className="title">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-screen flex flex-col mx-auto text-center justify-center items-center">
        <h1 className="headings">A Note from Our FE</h1>
        <div className="fe-content-wrapper flex flex-row justify-center mx-auto items-center px-10">
          <div className="fe-photo">
            <img src={ayaan} alt="Founder's Ed"></img>
          </div>
          <div className="fe-text">
            <p>
              "Hi everyone! My name is Ayaan and I focus on building startups
              through our Founder's Education, our program designed to help you
              chase after your entrepreneurial endeavors. Beyond our curriculum,
              our program is heavily focused on collaboration and community as
              you get to build alongside your cohort. What makes FE so special
              is that it caters to all experience levels. We have had members
              come in with no experience who later go on to pursue
              entrepreneurship full-time and we also have members who have
              started ventures before joining who find their co-founders for
              their next startup. FE is the place where innovators at UCI come
              to build!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoundersEducation;
