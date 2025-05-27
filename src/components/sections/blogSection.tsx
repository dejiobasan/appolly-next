import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import BlogImage1 from "../../../public/Images/BlogImages/BlogImage1.jpg";
import BlogImage2 from "../../../public/Images/BlogImages/BlogImage2.jpg";
import BlogImage3 from "../../../public/Images/BlogImages/BlogImage3.jpg";
import  Link  from "next/link";
import Image from "next/image";

const BlogSection = () => {
  return (
    <div className="relative flex flex-col min-h-screen items-center justify-center bg-white py-12">
      <div className="flex flex-col items-center justify-center relative z-10 px-4">
        <h1 className="lg:text-4xl md:text-2xl text-lg text-center text-black md:font-bold lg:mb-8 mb-4">
          OUR RECENT BLOGS
        </h1>
        <p className="md:text-sm text-xs text-center text-black lg:max-w-xl max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
      </div>
      <div className="md:grid md:grid-cols-3 flex flex-col lg:gap-4 gap-2 md:mt-12 mt-6 md:px-4">
        <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden w-full max-w-xs sm:max-w-sm lg:h-auto md:h-[300px] h-auto mx-auto">
          <Image
            src={BlogImage1}
            alt="BlogImage"
            className="w-full lg:h-48 md:h-24 h-48 object-cover"
          />
          <div className="flex flex-col items-start lg:p-4 md:p-2 p-4">
            <h3 className="md:text-xl text-lg font-semibold">
              The Snap Pixel: How It Works and How to Install
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </p>
            <Link
              href="/blog"
              className="mt-4 text-sm inline-block text-[#5c4efc]"
            >
              READ MORE
            </Link>
          </div>
        </div>
        <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden w-full max-w-xs sm:max-w-sm lg:h-auto md:h-[300px] h-auto mx-auto">
          <Image
            src={BlogImage2}
            alt="BlogImage"
            className="w-full lg:h-48 md:h-24 h-48 object-cover"
          />
          <div className="flex flex-col items-start p-4">
            <h3 className="md:text-xl text-lg font-semibold">
              Global Partner Solutions: A Partnership of Innovation
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae.
            </p>
            <Link
              href="/blog"
              className="mt-4 text-sm inline-block text-[#5c4efc]"
            >
              READ MORE
            </Link>
          </div>
        </div>
        <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden w-full max-w-xs sm:max-w-sm lg:h-auto md:h-[300px] h-auto mx-auto">
          <Image
            src={BlogImage3}
            alt="BlogImage"
            className="w-full lg:h-48 md:h-24 h-48 object-cover"
          />
          <div className="flex flex-col items-start p-4">
            <h3 className="md:text-xl text-lg font-semibold">
              2021: An opportunity for Snapchatters to start fresh
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </p>
            <Link
              href="/blog"
              className="mt-4 text-sm inline-block text-[#5c4efc]"
            >
              READ MORE
            </Link>
          </div>
        </div>
      </div>
      <section id="contact">
        <div className="absolute shadow-md left-1/2 -translate-x-1/2 md:bottom-[-3rem] bottom-[-11rem] z-20 w-full flex justify-center pointer-events-none">
          <div className="relative bg-white rounded-2xl shadow-xl max-w-4xl w-11/12 sm:w-4/5 mx-auto flex flex-col md:flex-row items-center justify-center px-4 md:px-10 py-6 md:py-8 space-y-4 md:space-y-0 md:space-x-12 pointer-events-auto border border-gray-200">
            <div className="flex md:flex-row flex-col items-center space-x-3 md:space-x-4">
              <span className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#5c4efc] shadow-md">
                <EnvelopeIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </span>
              <p className="font-semibold text-xs md:text-sm text-black text-center">
                info@youremail.com
              </p>
            </div>
            <span className="w-full h-0.5 border-t border-gray-300 md:w-0 md:h-16 md:border-t-0 md:border-l"></span>
            <div className="flex md:flex-row flex-col items-center space-x-3 md:space-x-4">
              <span className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#5c4efc] shadow-md">
                <PhoneIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </span>
              <p className="font-semibold text-xs md:text-sm text-black text-center">
                +1 234 567 890
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
