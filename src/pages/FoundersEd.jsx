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

  const customHeight = 'calc(100vh - 96px)';

  return (
    <div
      style={{
        height: "calc(100vh - 96px)", // Adjust the height to be the full viewport height minus 96px
        // marginTop: "-96px", // Move everything up by 96px
      }}
      className="overflow-y-scroll snap-mandatory snap-y h-screen"
    >
      <div
        style={{ height: customHeight }}
        className="snap-start flex flex-col mx-auto text-center justify-center items-center pb-[96px]"
      >
        <h1 className="md:text-7xl sm:text-6xl text-5xl font-bold md:py-6 sm:py-4 py-2">
          Founder's Education
        </h1>
        <p className="md:text-4xl sm:text-3xl text-2xl font-bold text-accent">
          Our Startup Accelerator
        </p>
      </div>
      <div
        style={{ height: customHeight }}
        className="snap-start flex flex-col mx-auto text-center justify-center items-center w-[80%] pb-[96px]"
      >
        <h1 className="md:text-7xl sm:text-6xl text-5xl font-bold md:py-6 sm:py-4 py-2">
          The Program
        </h1>
        <p className="md:text-4xl sm:text-3xl text-2xl font-bold text-accent px-20">
          Founder's Education is our 8-week startup incubator program focused on
          helping you think and build like an entrepreneur.
        </p>
      </div>
      <div
        style={{ height: customHeight }}
        className="snap-start flex flex-col h-screen text-center justify-center items-center sm:w-[80%] m-auto pb-[96px]"
      >
        <h1 className="md:text-7xl sm:text-6xl text-5xl font-bold md:py-10 sm:py-4 py-2">
          Our Curriculum
        </h1>
        <div>
          <div className="grid justify-center items-start gap-4 px-5 sm:gap-6 sm:px-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 pb-10">
            {curriculumItems.map((item, index) => (
              <div
                key={index}
                className="sm:text-2xl text-l font-medium text-accent border-[4px] border-white rounded-lg sm:p-[20px] p-[10px] flex flex-col justify-center sm:h-[120px] h-[80px]"
              >
                <div className="title">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        style={{ height: customHeight }}
        className="snap-start flex flex-col justify-center items-center w-full h-screen px-4 text-center py-8 pb-[96px]"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-8 md:mt-20 lg:mt-0 xl:mt-0 w-full max-w-4xl">
          A Note from Our FE
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-6xl mt-6">
          <div className="w-11/12 sm:w-3/4 md:w-1/3 lg:max-w-md xl:w-96 mx-auto lg:mx-4 my-4 rounded-lg overflow-hidden shadow-lg">
            <img src={ayaan} alt="Founder's Ed" className="w-full h-auto" />
          </div>
          <div className="flex-1 text-xl md:text-2xl lg:text-3xl mt-6 lg:mt-0 mx-4 text-left text-accent">
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
