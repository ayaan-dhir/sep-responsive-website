import React from "react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient.tsx";
import backgroundImage from "../assets/community/utahSquad.JPG";

const Recruitment = () => {
  // adjust this value to the height of the navbar, just keep it at 0
  const navbarHeight = 0;
  // adjust this value to move the background down
  const backgroundOffset = -126;

  return (
    <div
      className="sm:overflow-y-scroll sm:snap-mandatory sm:snap-y sm:h-screen relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: `center ${backgroundOffset}px`,
        paddingTop: `${navbarHeight}px`, // add top padding equal to the height of the navbar
        height: `calc(100vh - ${navbarHeight}px)`,
      }}
    >
      <div className="snap-start flex flex-col mx-auto text-center justify-center items-center h-full absolute top-0 left-0 right-0 bottom-0">
        <div className="flex justify-center items-center pt-2 pb-2 space-x-4">
          <div className="md:z-10 z-0">
            <HoverBorderGradient>
              <a
                href="https://forms.gle/nqqyqguzc6of3jDz8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white font-bold text-3xl rounded px-2 py-5 w-[250px]"
              >
                Interest Form
              </a>
            </HoverBorderGradient>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
