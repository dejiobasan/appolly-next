import Navbar from "../navbar";
import shapeBG from "../../../public/Images/BackgroundImage.png";
import AppImage from "../../../public/Images/Mobile.png";
import GooglePlay from "../../../public/Images/GooglePlay.png";
import AppStore from "../../../public/Images/AppStore.png";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${shapeBG.src})` }}
      ></div>
      <div className="lg:max-w-7xl md:max-w-2xl max-w-full w-full mx-auto md:z-10 z-20">
        <div className="hidden md:flex flex-row items-center lg:p-10 p-7 bg-opacity-80">
          <EnvelopeIcon className="lg:h-6 lg:w-6 h-4 w-4 text-white" />
          <h1 className="text-white lg:ml-2 lg:text-lg ml-4 mr-6 text-sm">
            info@youremail.com
          </h1>
          <PhoneIcon className="lg:h-6 lg:w-6 h-4 w-4 ml-8 text-white" />
          <h2 className="text-white lg:ml-2 lg:text-lg ml-4 text-sm">
            (480) 555-0103
          </h2>
          <div className="flex items-center space-x-6 ml-auto">
            <Facebook className="lg:h-6 lg:w-6 h-4 w-4 text-white fill-white" />
            <Instagram className="lg:h-6 lg:w-6 h-4 w-4 text-white " />
            <Twitter className="lg:h-6 lg:w-6 h-4 w-4 text-white fill-white" />
            <Youtube className="lg:h-6 lg:w-6 h-4 w-4 text-white" />
          </div>
        </div>
        <Navbar />
        <div className="lg:max-w-7xl md:max-w-2xl max-w-full mx-auto lg:px-6 px-2 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-center lg:mt-16 md:ml-8 mt-30 mb-30">
          <div className="relative lg:p-8 md:p-6 p-4 border-[18px] border-[#7572FF] lg:w-[570px] lg:h-[535px] md:w-[375px] md:h-[381px] w-[323px] h-[358px] overflow-visible mx-auto">
            <div className="bg-white relative shadow-lg lg:p-6 md:p-4 p-2.5 lg:w-[570px] lg:h-[432px] md:w-[356px] md:h-[318px] w-[323px] h-[318px] top-0 right-0 lg:-translate-x-24 md:-translate-x-16 md:-translate-y-2 -translate-x-12 -translate-y-3">
              <h1 className="lg:text-5xl text-3xl lg:font-bold font-semibold text-[#4A3AFF] leading-tight lg:mb-6 mb-4">
                A GREAT APP MAKES YOUR LIFE BETTER
              </h1>
              <p className="text-gray-700 text-base lg:mb-12 mb-2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <h2 className="font-semibold text-black lg:mb-2 mb-4 lg:text-2xl text-xl">
                DOWNLOAD APP NOW
              </h2>
              <div className="flex lg:gap-4 gap-8 ml-0">
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
            </div>
          </div>

          <div className="flex justify-center lg:mt-10 md:mt-6 mt-12 md:ml-20 ml-16">
            <Image
              src={AppImage}
              alt="App Screenshot"
              className="md:h-[423px] h-[421px] lg:h-[725px] w-auto max-w-full lg:ml-0 md:ml-10 lg:mt-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

