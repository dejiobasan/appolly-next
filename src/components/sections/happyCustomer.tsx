"use client";

import { useEffect, useState } from "react";
import shapeBG from "../../../public/Images/BackgroundImage.png";
import Customers from "../../../public/Images/Customers.png";
import Image from "next/image";

const testimonials = [
  {
    name: "ANN LUBIN",
    role: "CO-FOUNDER",
    image: Customers,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.`,
  },
  {
    name: "JOHN DOE",
    role: "CEO",
    image: Customers,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.`,
  },
  {
    name: "JANE SMITH",
    role: "CTO",
    image: Customers,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.`,
  },
];

const HappyCustomer = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  const current = testimonials[currentIndex];

  return (
    <div className="relative flex flex-col min-h-screen items-center justify-center">
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${shapeBG.src})` }}
      ></div>
      <div className="flex flex-col items-center justify-center relative z-10 px-4">
        <h1 className="lg:text-4xl md:text-2xl text-lg text-white md:font-bold lg:mb-8 mb-4">
          OUR HAPPY CUSTOMERS
        </h1>
        <p className="md:text-sm text-xs text-center text-white lg:max-w-xl max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
      </div>
      <div className="flex flex-row items-center justify-center relative z-10 px-4 pt-12">
        <div className="transition-all duration-700 transform scale-100 opacity-100 bg-white p-6 rounded-2xl max-w-2xl shadow-lg space-y-4">
          <Image
            src={current.image}
            alt={current.name}
            className="w-20 h-auto mx-auto"
          />
          <h2 className="text-center font-bold text-black">{current.name}</h2>
          <p className="font-semibold text-center text-black">{current.role}</p>
          <p className="text-center text-black text-sm">{current.text}</p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6 space-x-2 z-10 relative">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentIndex === idx
                ? "bg-[#5c4efc] scale-110"
                : "bg-gray-300 hover:bg-[#5c4efc]"
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HappyCustomer;
