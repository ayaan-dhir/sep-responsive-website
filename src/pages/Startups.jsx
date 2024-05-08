import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";
import bonsai from "../assets/logos/bonsai logo icon.png";
import bookit from "../assets/logos/bookit.png";
import cartello from "../assets/logos/cartello logo name.png";
import clearly from "../assets/logos/clearly logo color.png";
import diba from "../assets/logos/diBa logo white.png";
import disko from "../assets/logos/disko logo.png";
import idefy from "../assets/logos/idefy logo color.png";
import lendopoly from "../assets/logos/lendopoly logo with name.png";
import lighthouse from "../assets/logos/lighthouse logo yellow.png";
import puerta from "../assets/logos/puerta abierta logo.png";
import recreate from "../assets/logos/recreate energy logo .png";
import redfordstartup from "../assets/logos/redford startup logo.png";
import soundsense from "../assets/logos/soundsense logo color.png";
import student from "../assets/logos/student inc logo.png";
import surplus from "../assets/logos/surplus logo.png";
import thrust from "../assets/logos/thrust aeronautics logo color.png";
import vango from "../assets/logos/vango.png";
import wastewise from "../assets/logos/wastewise logo.png";

export const products = [
  {
    title: "Bonsai",
    thumbnail: bonsai,
  },
  {
    title: "BookIt",
    thumbnail: bookit,
  },
  {
    title: "Cartello",
    thumbnail: cartello,
  },
  {
    title: "Clearly",
    thumbnail: clearly,
  },
  {
    title: "DiBa",
    thumbnail: diba,
  },
  {
    title: "Disko",
    thumbnail: disko,
  },
  {
    title: "iDefy",
    thumbnail: idefy,
  },
  {
    title: "Lendopoly",
    thumbnail: lendopoly,
  },
  {
    title: "LightHouse",
    thumbnail: lighthouse,
  },
  {
    title: "Puerta Abierta",
    thumbnail: puerta,
  },
  {
    title: "Recreate Energy",
    thumbnail: recreate,
  },
  {
    title: "Clean",
    thumbnail: redfordstartup,
  },
  {
    title: "SoundSense",
    thumbnail: soundsense,
  },
  {
    title: "Student Inc",
    thumbnail: student,
  },
  {
    title: "Surplus",
    thumbnail: surplus,
  },
  {
    title: "Thrust Aeronautics",
    thumbnail: thrust,
  },
  {
    title: "VangoAI",
    thumbnail: vango,
  },
  {
    title: "WasteWise",
    thumbnail: wastewise,
  },
];


export default function Startups() {
  return (
    <>
      <HeroParallax products={products} />
      <div className="snap-start flex flex-col mx-auto text-center justify-center items-center h-screen">
        <h1 className="md:text-7xl sm:text-6xl text-5xl font-bold md:py-6 sm:py-4 py-2 text-white">
          Over $1M raised
        </h1>
        <p className="md:text-3xl sm:text-2xl text-xl font-bold text-slate-300">
          through competitions, accelerators, and investments
        </p>
      </div>
    </>
  );
}
