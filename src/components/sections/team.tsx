import teamMember1 from "../../../public/Images/Profile/Profile1.jpg";
import teamMember2 from "../../../public/Images/Profile/Profile2.jpg";
import teamMember3 from "../../../public/Images/Profile/Profile3.jpg";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

const Team = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white lg:py-20 lg:mt-24 md:py-30 md:mt-32 mt-48 p-6">
      <h1 className="lg:text-4xl text-2xl md:font-bold lg:mb-8 mb-4">
        OUR RELATIVE TEAM
      </h1>
      <p className="text-sm text-center lg:max-w-xl max-w-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet
        etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac
        nunc libero urna, feugiat.
      </p>
      <div className="md:grid md:grid-cols-3 flex flex-col lg:gap-4 gap-2 md:mt-12 mt-6">
        <div className="flex flex-col items-center lg:space-y-5 md:space-y-4 space-y-2 shadow-lg md:p-4 p-2 bg-white rounded-lg">
          <div className="relative lg:w-60 lg:h-60 md:w-40 md:h-40 w-30 h-30">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 160 160"
            >
              <circle
                cx="80"
                cy="80"
                r="74"
                fill="none"
                stroke="#5c4efc"
                strokeWidth="3"
                strokeDasharray="80,40"
                className="animate-spin-slow"
              />
            </svg>
            <Image
              src={teamMember2}
              alt="Team Member 2"
              className="w-full h-full object-cover rounded-full border-4 border-white lg:p-4 md:p-2 p-1"
            />
          </div>
          <h2 className="text-lg text-center font-bold text-gray-900">
            CARLA PRESS
          </h2>
          <p className="text-sm text-gray-600">APP DEVELOPER</p>
          <p className="text-sm text-gray-600 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex flex-row items-center justify-center mt-2 space-x-3">
            <Facebook className="h-6 w-6 text-black fill-black" />
            <span className="h-6 border-l border-black mx-2"></span>
            <Instagram className="h-6 w-6 text-black" />
            <span className="h-6 border-l border-black mx-2"></span>
            <Twitter className="h-6 w-6 text-black fill-black" />
            <span className="h-6 border-l border-black mx-2"></span>
            <Youtube className="h-6 w-6 text-black" />
          </div>
        </div>
        <div className="flex flex-col items-center lg:space-y-5 md:space-y-4 space-y-2 shadow-lg p-4 bg-white rounded-lg">
          <div className="relative lg:w-60 lg:h-60 md:w-40 md:h-40 w-30 h-30">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 160 160"
            >
              <circle
                cx="80"
                cy="80"
                r="74"
                fill="none"
                stroke="#5c4efc"
                strokeWidth="3"
                strokeDasharray="80,40"
                className="animate-spin-slow"
              />
            </svg>
            <Image
              src={teamMember3}
              alt="Team Member 2"
              className="w-full h-full object-cover rounded-full border-4 border-white lg:p-4 md:p-2 p-1"
            />
          </div>
          <h2 className="text-lg text-center font-bold text-gray-900">
            CRAIG GOUSE
          </h2>
          <p className="text-sm text-gray-600 text-center">UI/UX DESIGNER</p>
          <p className="text-sm text-gray-600 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex flex-row items-center justify-center mt-2 space-x-3">
            <Facebook className="h-6 w-6 text-black fill-black" />
            <span className="h-6 border-l border-black mx-2"></span>
            <Instagram className="h-6 w-6 text-black" />
            <span className="h-6 border-l border-black mx-2"></span>
            <Twitter className="h-6 w-6 text-black fill-black" />
            <span className="h-6 border-l border-black mx-2"></span>
            <Youtube className="h-6 w-6 text-black" />
          </div>
        </div>
        <div className="flex flex-col items-center lg:space-y-5 md:space-y-4 space-y-2 shadow-lg p-4 bg-white rounded-lg">
          <div className="relative lg:w-60 lg:h-60 md:w-40 md:h-40 w-30 h-30">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 160 160"
            >
              <circle
                cx="80"
                cy="80"
                r="74"
                fill="none"
                stroke="#5c4efc"
                strokeWidth="3"
                strokeDasharray="80,40"
                className="animate-spin-slow"
              />
            </svg>
            <Image
              src={teamMember1}
              alt="Team Member 2"
              className="w-full h-full object-cover rounded-full border-4 border-white lg:p-4 md:p-2 p-1"
            />
          </div>
          <h2 className="text-lg text-center font-bold text-gray-900">
            JOCELYN SEPTIMUS
          </h2>
          <p className="text-sm text-gray-600 text-center">APP DEVELOPER</p>
          <p className="text-sm text-gray-600 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex flex-row items-center justify-center mt-2 space-x-3">
            <Facebook className="h-6 w-6 text-black fill-black" />
            <span className="h-6 border-l border-black mx-2"></span>
            <Instagram className="h-6 w-6 text-black" />
            <span className="h-6 border-l border-black mx-2"></span>
            <Twitter className="h-6 w-6 text-black fill-black" />
            <span className="h-6 border-l border-black mx-2"></span>
            <Youtube className="h-6 w-6 text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
