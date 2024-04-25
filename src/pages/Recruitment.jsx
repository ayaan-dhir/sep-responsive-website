import React from "react";
import shreya from "../assets/members/board/shreya.jpg";
import rise from "../assets/recruitment/rise-banner2.png";
import schedule from "../assets/recruitment/schedule.png";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient.tsx";

const Recruitment = () => {
  return (
    <div className="sm:overflow-y-scroll sm:snap-mandatory sm:snap-y sm:h-screen">
      <div className="snap-start flex flex-col mx-auto text-center justify-center items-center h-screen">
        <div className="flex justify-center items-center pt-2 pb-2 space-x-4">
          <div className="md:z-10 z-0">
            <HoverBorderGradient>
              <a
                href="https://forms.gle/EqRMeY1nV8pLoH7ZA"
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
