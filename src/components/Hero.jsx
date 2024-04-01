"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient.tsx";

export default function Hero() {
  return (
    <div className="h-screen w-full bg-black relative flex flex-col items-center justify-center antialiased">
      <div className="flex flex-col items-center max-w-2xl mx-auto p-4">
        <h1 className="relative z-1 sm:z-10 text-4xl md:text-7xl pb-3 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold p-2">
          Sigma Eta Pi
        </h1>
        <HoverBorderGradient>
          <a
            href="https://forms.gle/Xsw8naSn5Y52xc3m6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white font-semibold rounded w-[150px]"
          >
            Apply Now!
          </a>
        </HoverBorderGradient>
      </div>
      <BackgroundBeams className="invisible md:visible" />
    </div>
  );
}
