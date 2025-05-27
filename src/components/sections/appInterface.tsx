"use client";

import {
  ArrowRightCircleIcon,
  ArrowLeftCircleIcon,
  ArrowDownTrayIcon,
  HandThumbUpIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import SliderImage from "../../../public//Images/Sliders/SliderImage.png";
import SliderImage2 from "../../../public/Images/Sliders/SliderImage2.png";
import SliderImage3 from "../../../public/Images/Sliders/SliderImage3.png";
import SliderImage4 from "../../../public/Images/Sliders/SliderImage4.png";
import SliderImage5 from "../../../public/Images/Sliders/SliderImage5.png";
import Brand from "../../../public/Images/Brand.png";
import GooglePlay from "../../../public/Images/GooglePlay.png";
import AppStore from "../../../public/Images/AppStore.png";
import { useState } from "react";
import Image from "next/image";

const sliderImages = [
  SliderImage,
  SliderImage2,
  SliderImage3,
  SliderImage4,
  SliderImage5,
];

const AppInterface = () => {
  const [current, setCurrent] = useState(2);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );
  };

  return (
    <section id="screenshot">
      <div className="relative flex flex-1 flex-col min-h-screen space-y-12 mx-auto p-6">
        <div className="flex flex-col items-center justify-center relative z-10 px-4 pt-12">
          <h1 className="md:text-4xl text-2xl text-center font-bold text-black mt-2">
            CHECKOUT OUR APP INTERFACE LOOK
          </h1>
          <p className="text-sm text-black text-center mt-4 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
        </div>
        <div className="flex flex-row items-center justify-center relative z-10 px-4 space-x-4">
          <button onClick={prevSlide}>
            <ArrowLeftCircleIcon className=" lg:h-20 lg:w-20 md:h-15 md:w-15 h-10 w-10 text-[#5c4efc]" />
          </button>

          {sliderImages.map((src, index) => {
            const isCurrent = index === current;
            const isLeft =
              index ===
              (current - 1 + sliderImages.length) % sliderImages.length;
            const isRight = index === (current + 1) % sliderImages.length;

            return (
              <div
                key={index}
                className={`
                transition-all duration-500 ease-in-out
                ${isCurrent ? "z-20 scale-105 blur-0 opacity-100 block" : ""}
                ${
                  isLeft || isRight
                    ? "z-10 scale-95 blur-sm opacity-50 hidden sm:block"
                    : !isCurrent
                    ? "hidden"
                    : ""
                }
              `}
              >
                <Image
                  src={src}
                  alt={`slide-${index}`}
                  className="w-120 md:w-160 lg:w-280 h-auto relative z-10 mx-auto mt-8 lg:mt-0 object-contain"
                />
              </div>
            );
          })}

          <button onClick={nextSlide}>
            <ArrowRightCircleIcon className="lg:h-20 lg:w-20 md:h-15 md:w-15 h-10 w-10 text-[#5c4efc]" />
          </button>
        </div>
        <div className="flex justify-center items-center mt-4 space-x-2">
          {sliderImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`md:h-3 md:w-3 h-2 w-2 rounded-full transition-all duration-300 ${
                current === idx
                  ? "bg-[#5c4efc] scale-110"
                  : "bg-gray-300 hover:bg-[#5c4efc]"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <div className="flex md:flex-row flex-col items-center justify-center relative z-10 lg:space-x-4 space-x-2">
          <div className="flex flex-col items-start justify-center relative z-10 px-4">
            <h2 className="lg:text-2xl text-lg font-bold text-black">
              DOWNLOAD APP NOW
            </h2>
            <p className="text-sm text-black mt-4 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </p>
            <div className="flex flex-row items-center justify-start mt-8 space-x-4">
              <Image
                src={GooglePlay}
                alt="Google Play"
                className="lg:h-12 h-8 cursor-pointer"
              />
              <Image
                src={AppStore}
                alt="App Store"
                className="lg:h-12 h-8 cursor-pointer"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="flex flex-col items-center bg-[#5c4efc] rounded-md shadow-lg lg:p-8 p-2">
                <ArrowDownTrayIcon className="md:h-8 md:w-8 h-5 w-5 text-white" />
                <h2 className="md:text-lg text-md md:font-bold font-semibold text-white mt-2">
                  59865
                </h2>
                <p className="text-sm text-white text-center mt-2 max-w-xs">
                  DOWNLOAD
                </p>
              </div>
              <div className="flex flex-col items-center bg-[#5c4efc] rounded-md shadow-lg lg:p-8 p-2">
                <HandThumbUpIcon className="md:h-8 md:w-8 h-5 w-5  text-white" />
                <h2 className="md:text-lg text-md md:font-bold font-semibold text-white mt-2">
                  29852
                </h2>
                <p className="text-sm text-white text-center mt-2 max-w-xs">
                  LIKE
                </p>
              </div>
              <div className="flex flex-col items-center bg-[#5c4efc] rounded-md shadow-lg lg:p-8 p-2">
                <StarIcon className="md:h-8 md:w-8 h-5 w-5 text-white" />
                <h2 className="md:text-lg text-md md:font-bold font-semibold text-white mt-2">
                  1500
                </h2>
                <p className="text-sm text-white text-center mt-2 max-w-xs">
                  5 STAR RATING
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={Brand}
              alt="Brand"
              className="w-60 md:w-120 lg:w-150 h-auto relative z-10 mx-auto mt-8 lg:mt-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppInterface;
