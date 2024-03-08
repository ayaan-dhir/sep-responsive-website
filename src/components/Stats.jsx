import React from "react";

const Stats = () => {
  return (
    <div
      data-theme="night"
      className="join join-vertical lg:join-horizontal flex items-center justify-center mx-auto h-screen w-full gap-x-20 px-6 gap-y-10"
    >
      <div className="card card-normal w-96 bg-primary text-primary-content text-center">
        <div className="card-body">
          <h1 className="card-title justify-center md:text-6xl sm:text-5xl text-4xl">
            40+
          </h1>
          <p className="md:text-3xl sm:text-2xl text-xl">members</p>
        </div>
      </div>
      <div className="card card-normal w-96 bg-secondary text-primary-content text-center">
        <div className="card-body">
          <h1 className="card-title justify-center md:text-6xl sm:text-5xl text-4xl">
            20+
          </h1>
          <p className="md:text-3xl sm:text-2xl text-xl">startups</p>
        </div>
      </div>
      <div className="card card-normal w-96 bg-accent text-primary-content text-center">
        <div className="card-body">
          <h1 className="card-title justify-center md:text-6xl sm:text-5xl text-4xl">
            1
          </h1>
          <p className="md:text-3xl sm:text-2xl text-xl">family</p>
        </div>
      </div>
    </div>

    // <div
    //   data-theme="autumn"
    //   className="h-screen w-full flex justify-center items-center py-16"
    // >
    //   <div className="mx-auto grid md:grid-cols-3 gap-x-32 gap-y-6 text-center">
    //     {/* Adjusted container to flex and items-center for vertical centering, and set a smaller max-width */}
    //     <div className="flex flex-col items-center gap-y-4">
    //       <h1 className="text-secondary md:text-8xl sm:text-6xl">40+</h1>
    //       <h2>members</h2>
    //     </div>
    //     <div className="flex flex-col items-center gap-y-4">
    //       <h1 className="text-secondary md:text-8xl sm:text-6xl">20+</h1>
    //       <h2>startups</h2>
    //     </div>
    //     <div className="flex flex-col items-center gap-y-4">
    //       <h1 className="text-secondary md:text-8xl sm:text-6xl">1</h1>
    //       <h2>family</h2>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Stats;
