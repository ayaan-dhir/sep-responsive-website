import React from "react";

const Stats = () => {
  return (
    <div
      data-theme="autumn"
      className="h-screen w-full flex justify-center items-center py-16 px-4"
    >
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-x-10 gap-y-6 text-center">
        {/* Adjusted container to flex and items-center for vertical centering, and set a smaller max-width */}
        <div className="flex flex-col items-center gap-y-4">
          {/* Added gap-y-2 for a small gap between the elements */}
          <h1 className="text-secondary md:text-6xl sm:text-2xl">40+</h1>
          <h2>members</h2>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <h1 className="text-secondary md:text-6xl sm:text-2xl">20+</h1>
          <h2>startups</h2>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <h1 className="text-secondary md:text-6xl sm:text-2xl">1</h1>
          <h2>family</h2>
        </div>
      </div>
    </div>
  );
};

export default Stats;
