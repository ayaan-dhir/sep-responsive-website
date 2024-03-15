import React from "react";

const Stats = () => {
  return (
    <div
      data-theme="light"
      className="join join-vertical lg:join-horizontal flex items-center justify-center h-screen w-full gap-x-20 px-6 gap-y-5 pt-[96px]"
    >
      <div className="card card-normal w-64 md:w-96 sm:w-80 bg-accent text-primary text-center hover:scale-110 duration-300">
        <div className="card-body">
          <h1 className="card-title justify-center md:text-6xl sm:text-5xl text-4xl">
            40+
          </h1>
          <p className="md:text-3xl sm:text-2xl text-xl">members</p>
        </div>
      </div>
      <div className="card card-normal w-64 md:w-96 sm:w-80 bg-accent text-primary text-center hover:scale-110 duration-300">
        <div className="card-body">
          <h1 className="card-title justify-center md:text-6xl sm:text-5xl text-4xl">
            20+
          </h1>
          <p className="md:text-3xl sm:text-2xl text-xl">startups</p>
        </div>
      </div>
      <div className="card card-normal w-64 md:w-96 sm:w-80 bg-accent text-primary text-center hover:scale-110 duration-300">
        <div className="card-body">
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
