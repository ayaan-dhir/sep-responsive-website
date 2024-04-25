"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient.tsx";

export default function Hero() {
  return (
    <div className="h-screen w-full bg-black relative flex flex-col items-center justify-center antialiased">
      <div className="flex flex-col items-center max-w-2xl mx-auto p-4">
        <h1 className="relative z-1 md:z-10 text-4xl md:text-7xl pb-3 text-white text-center font-sans font-bold p-2">
          Sigma Eta Pi
        </h1>
        <div className="md:z-10 z-0">
          <HoverBorderGradient>
            <a
              href="https://forms.gle/nqqyqguzc6of3jDz8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white font-black w-[150px]"
            >
              Apply Now!
            </a>
          </HoverBorderGradient>
        </div>
      </div>
      <BackgroundBeams className="invisible md:visible" />
    </div>
  );
}
