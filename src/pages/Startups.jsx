import React from "react";
import bookit from "../assets/logos/bookit.png";

const Startups = () => {
  return (
    <div data-theme="forest">
      <div className="mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center">
        <h1 className="md:text-7xl sm:text-6xl text-5xl font-bold md:py-8 sm:py-6 py-6">
          Our Startups
        </h1>
        <div className="carousel w-[80%]">
          {/* Wrap each img in a div with flex, justify-center, and items-center to center the image */}
          <div
            id="slide1"
            className="carousel-item relative w-full flex justify-center items-center"
          >
            <div className="px-12">
              <img src={bookit} className="w-[50%] mx-auto" alt="test" />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle btn-xs">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle btn-xs">
                ❯
              </a>
            </div>
          </div>
          {/* Repeat the process for each slide */}
          <div
            id="slide2"
            className="carousel-item relative w-full flex justify-center items-center"
          >
            <div className="px-12">
              <img
                src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                className="w-full mx-auto"
                alt="test"
              />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle btn-xs">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle btn-xs">
                ❯
              </a>
            </div>
          </div>
          {/* Continue wrapping images for centering */}
        </div>
      </div>
    </div>
  );
};

export default Startups;
