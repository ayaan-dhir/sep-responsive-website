import React from "react";

const Startups = () => {
  return (
    <div data-theme="forest">
      <div className="mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center">
        <h1 className="md:text-7xl sm:text-6xl text-5xl font-bold md:py-8 sm:py-6 py-6">
          Our Startups
        </h1>
        <div className="carousel w-[80%]">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
              className="w-full px-12"
              alt="test"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle btn-xs">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle btn-xs">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
              className="w-full px-12"
              alt="test"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle btn-xs">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle btn-xs">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
              className="w-full px-12"
              alt="test"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle btn-xs">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle btn-xs">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
              className="w-full px-12"
              alt="test"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle btn-xs">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle btn-xs">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Startups;
