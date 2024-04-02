"use client";
import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

import aifinals from "../assets/community/aifinals.JPG";
import alphaBeta from "../assets/community/alpha+beta.jpeg";
import alphaog from "../assets/community/alphaog.JPG";
import ariyaJess from "../assets/community/ariya+jess.JPG";
import ball from "../assets/community/ball.JPG";
import banner from "../assets/community/banner.JPG";
import boys from "../assets/community/boys.JPG";
import check from "../assets/community/check.JPG";
import check2 from "../assets/community/check2.jpeg";
import clareVango from "../assets/community/clare+vango.JPG";
import cookin from "../assets/community/cookin.JPG";
import crescentbros from "../assets/community/crescentbros.JPG";
import deltaDaniel from "../assets/community/delta+daniel.jpeg";
import deltaRomeo from "../assets/community/delta+romeo.jpeg";
import deltamerch from "../assets/community/deltamerch.jpeg";
import empathics from "../assets/community/empathics.JPG";
import grouppic from "../assets/community/grouppic.JPG";
import hike from "../assets/community/hike.jpeg";
import mhfinals from "../assets/community/mhfinals.jpeg";
import michelleToni from "../assets/community/michelle+toni.JPG";
import prezpitch from "../assets/community/prezpitch.JPG";
import shake from "../assets/community/shake.JPG";
import table from "../assets/community/table.JPG";
import uciUcsd from "../assets/community/uci+ucsd.jpeg";
import vnmoderators from "../assets/community/vnmoderators.JPG";
import web3mixer from "../assets/community/web3mixer.JPG";

export default function Community() {
  return (
    <div className="h-screen rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-center md:text-7xl sm:text-6xl text-5xl font-bold md:py-8 sm:py-6 py-6 text-white">
        Our Community
      </h1>
      <InfiniteMovingCards items={images} direction="right" speed="slow" />
    </div>
  );
}

const images = [
  {
    image: aifinals,
  },
  {
    image: alphaBeta,
  },
  {
    image: alphaog,
  },
  {
    image: ariyaJess,
  },
  {
    image: ball,
  },
  {
    image: banner,
  },
  {
    image: boys,
  },
  {
    image: check,
  },
  {
    image: check2,
  },
  {
    image: clareVango,
  },
  {
    image: cookin,
  },
  {
    image: crescentbros,
  },
  {
    image: deltaDaniel,
  },
  {
    image: deltaRomeo,
  },
  {
    image: deltamerch,
  },
  {
    image: empathics,
  },
  {
    image: grouppic,
  },
  {
    image: hike,
  },
  {
    image: mhfinals,
  },
  {
    image: michelleToni,
  },
  {
    image: prezpitch,
  },
  {
    image: shake,
  },
  {
    image: table,
  },
  {
    image: uciUcsd,
  },
  {
    image: vnmoderators,
  },
  {
    image: web3mixer,
  },
];
