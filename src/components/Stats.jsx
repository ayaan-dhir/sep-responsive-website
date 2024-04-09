import React from "react";

<style>
  {`
    @keyframes slideBg {
      from {
        background-position: -100% 0, 0 0;
      }
      to {
        background-position: 200% 0, 0 0;
      }
    }
  `}
</style>;


export default function Stats() {
  return (
    <div className="sm:h-screen flex flex-col items-center justify-center">
      <div className="container px-6 pt-8 pb-4 mx-auto">
        <h1 className="lg:text-6xl text-4xl font-semibold text-center text-gray-800 dark:text-white">
          UCI's Premier Entrepreneurship Fraternity
        </h1>

        <p className="lg:text-2xl lg:max-w-5xl max-w-3xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
          Sigma Eta Pi is a tight-knit community of founders, innovators, and
          builders focused on making an impact in our communities. We do things
          differently at SEP.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-[linear-gradient(45deg,transparent_25%,rgba(200,200,200,.3)_50%,transparent_75%,transparent_100%)] bg-black relative overflow-hidden rounded-xl border border-slate-600 bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[2000ms]">
            <div className="w-full p-8 space-y-4 text-center">
              <h2 className="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
                40+
              </h2>
              <p className="font-medium text-gray-500 dark:text-gray-300">
                Community Members
              </p>
            </div>
          </div>

          <div className="bg-[linear-gradient(45deg,transparent_25%,rgba(200,200,200,.3)_50%,transparent_75%,transparent_100%)] bg-black relative overflow-hidden rounded-xl border border-slate-600 bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[2000ms]">
            <div className="w-full p-8 space-y-4 text-center">
              <h2 className="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
                15+
              </h2>
              <p className="font-medium text-gray-500 dark:text-gray-300">
                Majors
              </p>
            </div>
          </div>

          <div className="bg-[linear-gradient(45deg,transparent_25%,rgba(200,200,200,.3)_50%,transparent_75%,transparent_100%)] bg-black relative overflow-hidden rounded-xl border border-slate-600 bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[2000ms]">
            <div className="w-full p-8 space-y-4 text-center">
              <h2 className="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
                20+
              </h2>
              <p className="font-medium text-gray-500 dark:text-gray-300">
                Startups
              </p>
            </div>
          </div>

          <div className="bg-[linear-gradient(45deg,transparent_25%,rgba(200,200,200,.3)_50%,transparent_75%,transparent_100%)] bg-black relative overflow-hidden rounded-xl border border-slate-600 bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[2000ms]">
            <div className="w-full p-8 space-y-4 text-center">
              <h2 className="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
                10+
              </h2>
              <p className="font-medium text-gray-500 dark:text-gray-300">
                Countries
              </p>
            </div>
          </div>

          <div className="bg-[linear-gradient(45deg,transparent_25%,rgba(200,200,200,.3)_50%,transparent_75%,transparent_100%)] bg-black relative overflow-hidden rounded-xl border border-slate-600 bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[2000ms]">
            <div className="w-full p-8 space-y-4 text-center">
              <h2 className="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
                $1M+
              </h2>
              <p className="font-medium text-gray-500 dark:text-gray-300">
                In Funding
              </p>
            </div>
          </div>

          <div className="bg-[linear-gradient(45deg,transparent_25%,rgba(200,200,200,.3)_50%,transparent_75%,transparent_100%)] bg-black relative overflow-hidden rounded-xl border border-slate-600 bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[2000ms]">
            <div className="w-full p-8 space-y-4 text-center">
              <h2 className="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
                1
              </h2>
              <p className="font-medium text-gray-500 dark:text-gray-300">
                Family
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
