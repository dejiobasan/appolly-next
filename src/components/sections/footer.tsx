import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="relative flex md:flex-row flex-col min-h-screen items-center justify-center bg-[#232233] lg:space-x-24 lg:px-6 lg:py-12 md:space-x-8 md:px-4 md:py-8 space-y-8 h-auto">
        <div className="flex flex-col flex-1 items-start justify-start relative z-10 md:px-4 md:mt-0 px-2 mt-60 ml-2">
          <h1 className="text-white font-bold lg:text-4xl text-2xl mb-4">
            LOGO
          </h1>
          <p className="text-sm text-white mt-0 max-w-xl mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Viverra nunc ante velit vitae. Est tellus vitae, nullam
            lobortis enim.
            <br /> Faucibus amet etiam tincidunt rhoncus,
            <br /> ullamcorper velit. Ullamcorper risus tempor, ac nunc <br />
            libero urna, feugiat.
          </p>
          <div className="flex flex-row items-center justify-center mt-2 space-x-4">
            <Facebook className="lg:h-6 lg:w-6 h-4 w-4 text-[#5c4efc] fill-[#5c4efc]" />
            <span className="lg:h-6 h-4 border-l border-white mx-2"></span>
            <Instagram className="lg:h-6 lg:w-6 h-4 w-4 text-white" />
            <span className="lg:h-6 h-4 border-l border-white mx-2"></span>
            <Twitter className="lg:h-6 lg:w-6 h-4 w-4 text-white fill-white" />
            <span className="lg:h-6 h-4 border-l border-white mx-2"></span>
            <Youtube className="lg:h-6 lg:w-6 h-4 w-4 text-white" />
          </div>
        </div>
        <div className="flex flex-col flex-1 items-start justify-start relative z-10 px-4 md:mr-0 mr-60">
          <h1 className="text-white font-bold lg:text-4xl text-2xl mb-4">
            QUICK LINKS
          </h1>
          <div className="flex flex-col items-start justify-center relative z-10">
            <a
              href="#home"
              className="text-sm text-white mb-2 hover:text-[#5c4efc]"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm text-white mb-2 hover:text-[#5c4efc]"
            >
              About
            </a>
            <a
              href="#features"
              className="text-sm text-white mb-2 hover:text-[#5c4efc]"
            >
              Features
            </a>
            <a
              href="#contact"
              className="text-sm text-white mb-2 hover:text-[#5c4efc]"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-start justify-start relative z-10 px-4">
          <h1 className="text-white font-bold lg:text-4xl text-2xl mb-4">
            NEWSLETTER
          </h1>
          <p className="text-sm text-white mt-0 max-w-xl mb-4">
            Subscribe our newsletter to get our latest update & news
          </p>
          <div className="flex flex-row items-center w-full mb-4">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-white text-black p-2 rounded-l-md flex-1"
            />
            <button className="bg-[#5c4efc] text-white p-2 rounded-r-md">
              <PaperAirplaneIcon className="h-6 w-6 inline-block" />
            </button>
          </div>
        </div>
      </div>
      <span
        className="block w-3/4 mx-auto border-t border-white"
        style={{ height: "2px" }}
      ></span>
      <div className="flex flex-row items-center justify-center bg-[#232233] text-white py-4">
        <p className="lg:text-lg text-sm">
          © Copyright 2021 .Ojjomedia. All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
