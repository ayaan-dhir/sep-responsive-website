import React from "react";
import shreya from "../assets/members/board/shreya.jpg";
import rise from "../assets/recruitment/rise-banner2.png";
import schedule from "../assets/recruitment/schedule.png";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient.tsx";

const Recruitment = () => {
  return (
    <div className="sm:overflow-y-scroll sm:snap-mandatory sm:snap-y sm:h-screen">
      <div className="snap-start flex flex-col mx-auto text-center justify-center items-center h-screen">
        <img
          className="lg:w-[50%] md:w-[60%] sm:w-[70%] w-[90%]"
          src={rise}
          alt="Rise"
        />
        <div className="flex justify-center items-center pt-2 pb-2 space-x-4">
          <div className="md:z-10 z-0">
            <HoverBorderGradient>
              <a
                href="https://forms.gle/EqRMeY1nV8pLoH7ZA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white font-bold rounded px-2 py-2 w-[130px]"
              >
                Interest Form
              </a>
            </HoverBorderGradient>
          </div>

          <div className="md:z-10 z-0">
            <HoverBorderGradient>
              <a
                href="https://forms.gle/Xsw8naSn5Y52xc3m6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white font-bold rounded px-2 py-2 w-[130px]"
              >
                Application
              </a>
            </HoverBorderGradient>
          </div>
        </div>
      </div>
      <div className="sm:snap-start flex flex-col h-screen text-center justify-center items-center m-auto">
        <h1 className="text-white md:text-7xl sm:text-6xl text-4xl font-bold md:py-10 sm:py-4 py-2">
          The Schedule
        </h1>
        <img
          className="lg:w-[50%] md:w-[60%] sm:w-[70%] w-[90%]"
          src={schedule}
          alt="Schedule"
        />
      </div>
      <div className="sm:snap-start flex flex-col justify-center items-center mx-auto sm:w-[90%] w-full h-screen text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-20 md:mt-20 lg:mt-0 xl:mt-0 w-full max-w-4xl">
          President's Note
        </h1>
        <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center w-full max-w-6xl">
          <div className="w-6/12 sm:w-3/4 md:w-1/3 lg:max-w-md xl:w-96 mx-auto mt-2 lg:mx-4 rounded-lg overflow-hidden">
            <img src={shreya} alt="President" className="w-full h-auto" />
          </div>
          <div className="flex-1 font-normal text-md md:text-2xl lg:text-3xl mt-2 lg:mt-0 mx-4 text-left text-[#d25153]">
            <p>
              "Hey all, My name is Shreya Mawandia and I am so excited to
              welcome you to Spring 2024 Recruitment! I truly enjoyed my
              recruitment process as it was the first taste of what the culture
              at Sigma Eta Pi was and is today: scrappy, innovative, and
              exciting. One of my fondest memories was hearing all of the
              actives' stories and journey within SEP, and that really
              encouraged me to be authentic and resilient as I embarked on
              Founder's Education. I am so excited to meet you all"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
