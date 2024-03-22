import React, {useState} from "react";
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

const logos = [
  bonsai,
  bookit,
  cartello,
  clearly,
  diba,
  disko,
  idefy,
  lendopoly,
  lighthouse,
  puerta,
  recreate,
  redfordstartup,
  soundsense,
  student,
  surplus,
  thrust,
  vango,
  wastewise,
];

const Startups = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (event) => {
    setCurrentSlide(parseInt(event.target.value, 10));
  };

  return (
    <div data-theme="black">
      <div className="w-[full] h-screen mx-auto text-center flex flex-col justify-center items-center">
        <h1 className="md:text-7xl sm:text-6xl text-5xl font-bold md:py-8 sm:py-6 py-6 text-white">
          Our Startups
        </h1>
        <div className="carousel w-[80%] h-[50%] overflow-hidden justify-center items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`carousel-item absolute w-[80%] flex justify-center items-center transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="px-12">
                <img
                  src={logo}
                  className="w-[50%] mx-auto h-auto"
                  alt={`Startup ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </div>
        <input
          type="range"
          min={0}
          max={logos.length - 1}
          value={currentSlide}
          onChange={handleSlideChange}
          className="range range-white w-[80%]"
        />
      </div>
    </div>
  );
};

export default Startups;