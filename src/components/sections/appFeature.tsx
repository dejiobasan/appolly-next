import {
  ChatBubbleLeftEllipsisIcon,
  DevicePhoneMobileIcon,
  EyeIcon,
  PencilSquareIcon,
  UserPlusIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";
import shapeBG from "../../../public/Images/BackgroundImage.png";
import App from "../../../public/Images/App.png";
import Image from "next/image";


const AppFeatures = () => {
  return (
    <section id="features">
      <div className="relative flex flex-1 flex-col min-h-screen py-12">
        <div
          className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${shapeBG.src})` }}
        ></div>
        <div className="flex flex-col items-center justify-center relative z-10 min-h-screen px-4">
          <h1 className="text-2xl font-bold text-white mt-8">APP FEATURES</h1>
          <p className="text-sm text-white text-center mt-4 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
          <div className="flex flex-col items-center justify-center mt-12 mb-8">
            <ChatBubbleLeftEllipsisIcon className="h-8 w-8 text-white" />
            <h2 className="text-lg font-bold text-white mt-2">
              FULL FREE CHAT
            </h2>
            <p className="text-sm text-white text-center mt-2 max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae.
            </p>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex flex-col space-y-8 w-full lg:w-1/4 items-center lg:items-end">
              <div className="flex flex-col items-center md:items-end">
                <ComputerDesktopIcon className="h-8 w-8 text-white" />
                <h2 className="text-lg font-bold text-white mt-2 md:text-right">
                  UNLIMITED FEATURES
                </h2>
                <p className="text-sm text-white text-center md:text-right mt-2 max-w-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra nunc ante velit vitae.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-end">
                <DevicePhoneMobileIcon className="h-8 w-8 text-white" />
                <h2 className="text-lg font-bold text-white mt-2 md:text-right">
                  ISO AND ANDROID VERSION
                </h2>
                <p className="text-sm text-white text-center md:text-right mt-2 max-w-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra nunc ante velit vitae.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full lg:w-1/3">
              <Image
                src={App}
                alt="App"
                className="w-60 md:w-72 lg:w-96 h-auto relative z-10 mx-auto mt-8 lg:mt-0"
              />
            </div>
            <div className="flex flex-col space-y-12 w-full lg:w-1/4 items-center lg:items-start mt-8 lg:mt-0">
              <div className="flex flex-col items-center md:items-start">
                <PencilSquareIcon className="h-8 w-8 text-white" />
                <h2 className="text-lg font-bold text-white mt-2 md:text-left">
                  AWESOME UI DESIGN
                </h2>
                <p className="text-sm text-white text-center md:text-left mt-2 max-w-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra nunc ante velit vitae.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <EyeIcon className="h-8 w-8 text-white" />
                <h2 className="text-lg font-bold text-white mt-2 lg:text-left">
                  RETINA READY GRAPHICS
                </h2>
                <p className="text-sm text-white text-center md:text-left mt-2 max-w-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra nunc ante velit vitae.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center">
            <UserPlusIcon className="h-8 w-8 text-white" />
            <h2 className="text-lg font-bold text-white mt-2">
              24/7 SUPPORT BY REAL PEOPLE
            </h2>
            <p className="text-sm text-white text-center mt-2 max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
