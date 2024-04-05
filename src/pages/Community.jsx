"use client";
import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

// import aifinals from "../assets/community/aifinals.JPG";
// import alphaBeta from "../assets/community/alpha+beta.jpeg";
// import alphaog from "../assets/community/alphaog.JPG";
// import ariyaJess from "../assets/community/ariya+jess.JPG";
// import ball from "../assets/community/ball.JPG";
// import banner from "../assets/community/banner.JPG";
// import boys from "../assets/community/boys.JPG";
// import check from "../assets/community/check.JPG";
// import check2 from "../assets/community/check2.jpeg";
// import clareVango from "../assets/community/clare+vango.JPG";
// import cookin from "../assets/community/cookin.JPG";
// import crescentbros from "../assets/community/crescentbros.JPG";
// import deltaDaniel from "../assets/community/delta+daniel.jpeg";
// import deltaRomeo from "../assets/community/delta+romeo.jpeg";
// import deltamerch from "../assets/community/deltamerch.jpeg";
// import empathics from "../assets/community/empathics.JPG";
// import grouppic from "../assets/community/grouppic.JPG";
// import hike from "../assets/community/hike.jpeg";
// import mhfinals from "../assets/community/mhfinals.jpeg";
// import michelleToni from "../assets/community/michelle+toni.JPG";
// import prezpitch from "../assets/community/prezpitch.JPG";
// import shake from "../assets/community/shake.JPG";
// import table from "../assets/community/table.JPG";
// import uciUcsd from "../assets/community/uci+ucsd.jpeg";
// import vnmoderators from "../assets/community/vnmoderators.JPG";
// import web3mixer from "../assets/community/web3mixer.JPG";

import aifinals from "../assets/community/compressed/aifinals Large.jpeg";
// import alphaBeta from "../assets/community/compressed/alpha+beta Large.jpeg";
import alphaog from "../assets/community/compressed/alphaog Large.jpeg";
// import ariyaJess from "../assets/community/compressed/ariya+jess Large.jpeg";
import ball from "../assets/community/compressed/ball Large.jpeg";
import banner from "../assets/community/compressed/banner Large.jpeg";
import boys from "../assets/community/compressed/boys Large.jpeg";
import check from "../assets/community/compressed/check Large.jpeg";
import check2 from "../assets/community/compressed/check2 Large.jpeg";
import clareVango from "../assets/community/compressed/clare+vango Large.jpeg";
import cookin from "../assets/community/compressed/cookin Large.jpeg";
import crescentbros from "../assets/community/compressed/crescentbros Large.jpeg";
import deltaDaniel from "../assets/community/compressed/delta+daniel Large.jpeg";
import deltaRomeo from "../assets/community/compressed/delta+romeo Large.jpeg";
import deltamerch from "../assets/community/compressed/deltamerch Large.jpeg";
import empathics from "../assets/community/compressed/empathics Large.jpeg";
import grouppic from "../assets/community/compressed/grouppic Large.jpeg";
import hike from "../assets/community/compressed/hike Large.jpeg";
import mhfinals from "../assets/community/compressed/mhfinals Large.jpeg";
// import michelleToni from "../assets/community/compressed/michelle+toni Large.jpeg";
import prezpitch from "../assets/community/compressed/prezpitch Large.jpeg";
import shake from "../assets/community/compressed/shake Large.jpeg";
import table from "../assets/community/compressed/table Large.jpeg";
// import uciUcsd from "../assets/community/compressed/uci+ucsd Large.jpeg";
import vnmoderators from "../assets/community/compressed/vnmoderators Large.jpeg";
import web3mixer from "../assets/community/compressed/web3mixer Large.jpeg";


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
    name: "aifinals",
    title: "aifinals",
  },
  {
    image: alphaog,
    name: "alphaog",
    title: "alphaog",
  },
  {
    image: ball,
    name: "ball",
    title: "ball",
  },
  {
    image: banner,
    name: "banner",
    title: "banner",
  },
  {
    image: boys,
    name: "boys",
    title: "boys",
  },
  {
    image: check,
    name: "check",
    title: "check",
  },
  {
    image: check2,
    name: "check2",
    title: "check2",
  },
  {
    image: clareVango,
    name: "clare Vango",
    title: "clare Vango",
  },
  {
    image: cookin,
    name: "cookin",
    title: "cookin",
  },
  {
    image: crescentbros,
    name: "crescentbros",
    title: "crescentbros",
  },
  {
    image: deltaDaniel,
    name: "delta Daniel",
    title: "delta Daniel",
  },
  {
    image: deltaRomeo,
    name: "delta Romeo",
    title: "delta Romeo",
  },
  {
    image: deltamerch,
    name: "deltamerch",
    title: "deltamerch",
  },
  {
    image: empathics,
    name: "empathics",
    title: "empathics",
  },
  {
    image: grouppic,
    name: "grouppic",
    title: "grouppic",
  },
  {
    image: hike,
    name: "hike",
    title: "hike",
  },
  {
    image: mhfinals,
    name: "mhfinals",
    title: "mhfinals",
  },
  {
    image: prezpitch,
    name: "prezpitch",
    title: "prezpitch",
  },
  {
    image: shake,
    name: "shake",
    title: "shake",
  },
  {
    image: table,
    name: "table",
    title: "table",
  },
  {
    image: vnmoderators,
    name: "vnmoderators",
    title: "vnmoderators",
  },
  {
    image: web3mixer,
    name: "web3mixer",
    title: "web3mixer",
  },
];


