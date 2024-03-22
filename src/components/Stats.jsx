"use client";
import React from "react";
// import { BackgroundGradient } from "./ui/background-gradient";

const Stats = () => {
  return (
    <div className="join join-vertical lg:join-horizontal flex items-center justify-center h-screen w-full gap-x-20 px-6 gap-y-5 dpt-[96px]">
      <div className="card card-normal rounded-[22px] bg-[#4343ff] w-64 md:w-96 sm:w-80 text-center hover:scale-110 duration-300">
        <div className="card-body bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
          <h1 className="card-title justify-center md:text-6xl sm:text-5xl text-4xl">
            40+
          </h1>
          <p className="md:text-3xl sm:text-2xl text-xl">members</p>
        </div>
      </div>
      <div className="card card-normal rounded-[22px] bg-[#4343ff] w-64 md:w-96 sm:w-80 text-white text-center hover:scale-110 duration-300">
        <div className="card-body bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
          <h1 className="card-title justify-center md:text-6xl sm:text-5xl text-4xl">
            20+
          </h1>
          <p className="md:text-3xl sm:text-2xl text-xl">startups</p>
        </div>
      </div>
      <div className="card card-normal rounded-[22px] bg-[#4343ff] w-64 md:w-96 sm:w-80 bg- text-white text-center hover:scale-110 duration-300">
        <div className="card-body bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
          <h1 className="card-title justify-center md:text-6xl sm:text-5xl text-4xl">
            1
          </h1>
          <p className="md:text-3xl sm:text-2xl text-xl">family</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
