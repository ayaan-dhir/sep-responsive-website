import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div data-theme="night">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 sm:py-4 py-2">
          Sigma Eta Pi
        </h1>
        <div className="flex justify-center items-center">
          <ReactTyped
            className="md:text-3xl sm:text-2xl text-xl font-bold text-[#38D6FA]"
            strings={["Build.", "Connect.", "Launch."]}
            typeSpeed={100}
            backSpeed={120}
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
