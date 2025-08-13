import { CheckCircleIcon } from "@heroicons/react/24/solid";
import android from "../../../public/Images/Android.png";
import Image from "next/image";

const About = () => {
  const aboutFeatures = [
    {
      feature: "CREATIVE DESIGN",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Viverra nunc ante velit vitae Est tellus vitae nullam lobortis enim Faucibus amet etiam tincidunt rhoncus ullamcorper velit",
      icon: <CheckCircleIcon className="h-6 w-6 text-[#5c4efc] mr-2" />,
    },
    {
      feature: "EASY TO USE",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Viverra nunc ante velit vitae Est tellus vitae nullam lobortis enim Faucibus amet etiam tincidunt rhoncus ullamcorper velit",
      icon: <CheckCircleIcon className="h-6 w-6 text-[#5c4efc] mr-2" />,
    },
    {
      feature: "BEST USER EXPERIENCE",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Viverra nunc ante velit vitae Est tellus vitae nullam lobortis enim Faucibus amet etiam tincidunt rhoncus ullamcorper velit",
      icon: <CheckCircleIcon className="h-6 w-6 text-[#5c4efc] mr-2" />,
    },
  ];
  return (
    <section id="about">
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-white px-6 py-12">
        <h1 className="lg:text-4xl text-2xl md:font-bold  lg:mb-8 mb-4">
          ABOUT OUR APP
        </h1>
        <p className="text-sm text-center lg:max-w-xl max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
        <div
          className="flex flex-col md:flex-row lg:flex-row items-center justify-center lg:mt-12 mt-8 relative"
          style={{ minHeight: "8rem" }}
        >
          <div className="absolute lg:left-12 lg:translate-y-50 md:left-2 md:translate-y-55 top-60 w-60 h-28 bg-white rounded-[50%_50%_50%_50%/60%_60%_40%_40%] shadow-lg z-0" />
          <Image
            src={android}
            alt="Android"
            className="w-60 md:w-72 lg:w-96 h-auto relative z-10 mx-auto"
          />
          <div className="flex flex-col items-center justify-center lg:mt-0 lg:ml-40 md:ml-20 mt-12 w-full max-w-xl">
            <div className="space-y-6 w-full px-2">
              {aboutFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                    <span className="text-indigo-600 mr-3 text-3xl">
                      {feature.icon}
                    </span>
                    {feature.feature}
                  </h2>
                  <p className="text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
