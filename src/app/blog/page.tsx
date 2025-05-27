"use client";

import { RiHome2Fill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FaCaretRight } from "react-icons/fa";
import Navbar from "../../components/navbar";
import shapeBG from "../../../public/Images/BackgroundImage.png";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import BlogImage1 from "../../../public/Images/BlogImages/BlogImage1.jpg";
import BlogImage2 from "../../../public/Images/BlogImages/BlogImage2.jpg";
import BlogImage3 from "../../../public/Images/BlogImages/BlogImage3.jpg";
import BlogImage4 from "../../../public/Images/BlogImages/BlogImage4.jpg";
import BlogImage5 from "../../../public/Images/BlogImages/BlogImage5.jpg";
import BlogImage6 from "../../../public/Images/BlogImages/BlogImage6.jpg";
import BlogImage7 from "../../../public/Images/BlogImages/BlogImage7.jpg";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

import Image from "next/image";

const Blogs = [
  {
    image: BlogImage1,
    title: "The Snap Pixel: How It Works and How to Install",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie blandit nibh risus nisl, scelerisque. Fusce cursus massa ut egestas. Massa lorem turpis lectus viverra. Nulla volutpat urna eget velit vel at gravida fermentum, sem.Ut ullamcorper scelerisque interdum bibendum non tristique nullam. Netus nisl, leo nunc eu tincidunt vivamus nisi suspendisse. Non morbi eleifend sit ac.",
    link: "/blog/blog-details",
  },
  {
    image: BlogImage2,
    title: "Have brands given up on International Women’s Day?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie blandit nibh risus nisl, scelerisque. Fusce cursus massa ut egestas. Massa lorem turpis lectus viverra. Nulla volutpat urna eget velit vel at gravida fermentum, sem.Ut ullamcorper scelerisque interdum bibendum non tristique nullam. Netus nisl, leo nunc eu tincidunt vivamus nisi suspendisse. Non morbi eleifend sit ac.",
    link: "/blog/blog-details",
  },
  {
    image: BlogImage3,
    title: "6 Designers On The Brands Empowering Women Today",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie blandit nibh risus nisl, scelerisque. Fusce cursus massa ut egestas. Massa lorem turpis lectus viverra. Nulla volutpat urna eget velit vel at gravida fermentum, sem.Ut ullamcorper scelerisque interdum bibendum non tristique nullam. Netus nisl, leo nunc eu tincidunt vivamus nisi suspendisse. Non morbi eleifend sit ac.",
    link: "/blog/blog-details",
  },
  {
    image: BlogImage4,
    title:
      "Gillette Launches Planet KIND, A Slightly More Sustainable Line Of Personal Care.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie blandit nibh risus nisl, scelerisque. Fusce cursus massa ut egestas. Massa lorem turpis lectus viverra. Nulla volutpat urna eget velit vel at gravida fermentum, sem.Ut ullamcorper scelerisque interdum bibendum non tristique nullam. Netus nisl, leo nunc eu tincidunt vivamus nisi suspendisse. Non morbi eleifend sit ac.",
    link: "/blog/blog-details",
  },
  {
    image: BlogImage5,
    title: "The Snap Pixel: How It Works and How to Install",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie blandit nibh risus nisl, scelerisque. Fusce cursus massa ut egestas. Massa lorem turpis lectus viverra. Nulla volutpat urna eget velit vel at gravida fermentum, sem.Ut ullamcorper scelerisque interdum bibendum non tristique nullam. Netus nisl, leo nunc eu tincidunt vivamus nisi suspendisse. Non morbi eleifend sit ac.",
    link: "/blog/blog-details",
  },
  {
    image: BlogImage6,
    title: "The Snap Pixel: How It Works and How to Install",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie blandit nibh risus nisl, scelerisque. Fusce cursus massa ut egestas. Massa lorem turpis lectus viverra. Nulla volutpat urna eget velit vel at gravida fermentum, sem.Ut ullamcorper scelerisque interdum bibendum non tristique nullam. Netus nisl, leo nunc eu tincidunt vivamus nisi suspendisse. Non morbi eleifend sit ac.",
    link: "/blog/blog-details",
  },
  {
    image: BlogImage7,
    title: "The Snap Pixel: How It Works and How to Install",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie blandit nibh risus nisl, scelerisque. Fusce cursus massa ut egestas. Massa lorem turpis lectus viverra. Nulla volutpat urna eget velit vel at gravida fermentum, sem.Ut ullamcorper scelerisque interdum bibendum non tristique nullam. Netus nisl, leo nunc eu tincidunt vivamus nisi suspendisse. Non morbi eleifend sit ac.",
    link: "/blog/blog-details",
  },
];

const BLOGS_PER_PAGE = 5;

const BlogPage = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(Blogs.length / BLOGS_PER_PAGE);
  const startIdx = (page - 1) * BLOGS_PER_PAGE;
  const currentBlogs = Blogs.slice(startIdx, startIdx + BLOGS_PER_PAGE);


  const handleSectionNav = useCallback(
    (sectionId: string) => {
      router.push(`/#${sectionId}`);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    },
    [router]
  );

  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="relative flex flex-col h-3/4">
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
        </div>
        <div className="flex flex-col items-center justify-center h-[300px] text-center z-20 relative">
          <h1 className="text-white font-bold  text-4xl">BLOG</h1>
          <p className="text-white text-lg mt-4">
            <RiHome2Fill className="inline-block mr-2" />
            Home / Blog
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-stretch mt-10 p-10 gap-4">
        <div className="flex flex-col gap-6 px-4 w-full max-w-[771px] mx-auto mb-6">
          {currentBlogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg shadow-lg overflow-hidden w-full lg:h-auto md:h-[300px] h-auto mx-auto"
            >
              <Image
                src={blog.image}
                alt={`BlogImage${index + 1}`}
                className="w-full lg:h-48 md:h-24 h-48 object-cover"
              />
              <div className="flex flex-col items-start p-4">
                <h3 className="md:text-xl text-lg font-semibold">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{blog.description}</p>
                <Link
                  href={blog.link}
                  className="mt-4 text-sm inline-block text-[#5c4efc]"
                >
                  READ MORE
                </Link>
              </div>
            </div>
          ))}
          <div className="flex flex-col justify-center items-center mt-8 space-x-2">
            <span
              className="block w-3/4 mx-auto border-t border-black"
              style={{ height: "2px" }}
            ></span>
            <div className="flex flex-row justify-center items-center mt-8 space-x-2">
              <button
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                disabled={page === 1}
                className="px-3 py-1 rounded bg-[#5c4efc] text-white disabled:opacity-50"
              >
                Prev
              </button>
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setPage(idx + 1)}
                  className={`px-3 py-1 rounded ${
                    page === idx + 1
                      ? "bg-[#5c4efc] text-white"
                      : "bg-white text-[#5c4efc] border border-[#5c4efc]"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                disabled={page === totalPages}
                className="px-3 py-1 rounded bg-[#5c4efc] text-white disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-full max-w-md mx-auto">
          <div className="relative w-full mb-8" style={{ maxWidth: "300px" }}>
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
            <input
              type="text"
              placeholder="Search blogs"
              className="w-full p-2 border border-gray-600 rounded pl-10"
            />
          </div>
          <span
            className="block w-full mx-auto border-t border-black"
            style={{ height: "2px" }}
          ></span>
          <h1 className="text-black text-start font-bold lg:text-4xl text-2xl mt-6 mb-4">
            RECENT POST
          </h1>
          {Blogs.slice(0, 5).map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden w-full mb-4 flex flex-col items-center mt-8"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-4 w-full">
                <h3 className="text-md font-semibold text-black text-start">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
          <span
            className="block w-full mx-auto border-t border-black"
            style={{ height: "2px" }}
          ></span>
          <h2 className="text-black text-start font-bold lg:text-4xl text-2xl mt-6 mb-4">
            CATEGORY
          </h2>
          <div className="flex flex-col items-start justify-start">
            {["Marketing", "Design", "Development", "Branding", "Business"].map(
              (option, idx) => (
                <div key={idx} className="flex items-center mb-3">
                  <FaCaretRight className="text-black mr-2" />
                  <span className="text-black text-md">{option}</span>
                </div>
              )
            )}
          </div>
          <span
            className="block w-full mx-auto border-t border-black"
            style={{ height: "2px" }}
          ></span>
          <h3 className="text-black text-start font-bold lg:text-4xl text-2xl mt-6 mb-4">
            TAGS
          </h3>
          <div className="flex flex-row items-start justify-center space-x-4">
            <p className="underline">E-commerce App</p>
            <p className="underline">Music App</p>
          </div>
          <div className="flex flex-row items-start justify-center space-x-4">
            <p className="underline">Bank App</p>
            <p className="underline">Social App</p>
          </div>
        </div>
      </div>
      <div className="relative flex md:flex-row flex-col h-3/4 items-stretch justify-center bg-[#232233] lg:space-x-24 lg:px-6 lg:py-12 md:space-x-8 md:px-4 md:py-8 space-y-8">
        <div className="flex flex-col flex-1 items-start justify-start relative z-10 md:px-4 md:mt-0 px-2 mt-10">
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
            <button
              className="text-sm text-white mb-2 hover:text-[#5c4efc] text-left"
              onClick={() => handleSectionNav("home")}
            >
              Home
            </button>
            <button
              className="text-sm text-white mb-2 hover:text-[#5c4efc] text-left"
              onClick={() => handleSectionNav("about")}
            >
              About
            </button>
            <button
              className="text-sm text-white mb-2 hover:text-[#5c4efc] text-left"
              onClick={() => handleSectionNav("features")}
            >
              Features
            </button>
            <button
              className="text-sm text-white mb-2 hover:text-[#5c4efc] text-left"
              onClick={() => handleSectionNav("contact")}
            >
              Contact
            </button>
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

export default BlogPage;
