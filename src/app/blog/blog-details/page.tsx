'use client';

import { RiHome2Fill } from "react-icons/ri";
import Navbar from "@/components/navbar";
import shapeBG from "../../../../public/Images/BackgroundImage.png";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import BlogImage1 from "../../../../public/Images/BlogImages/BlogImage1.jpg";
import BlogImage2 from "../../../../public/Images/BlogImages/BlogImage2.jpg";
import BlogImage3 from "../../../../public/Images/BlogImages/BlogImage3.jpg";
import BlogImage4 from "../../../../public/Images/BlogImages/BlogImage4.jpg";
import BlogImage5 from "../../../../public/Images/BlogImages/BlogImage5.jpg";
import BlogImage6 from "../../../../public/Images/BlogImages/BlogImage6.jpg";
import BlogImage7 from "../../../../public/Images/BlogImages/BlogImage7.jpg";
import BlogImage8 from "../../../../public/Images/BlogImages/BlogImage8.jpg";
import BlogImage9 from "../../../../public/Images/BlogImages/BlogImage9.jpg";
import BlogImage10 from "../../../../public/Images/BlogImages/BlogImage10.jpg";
import BlogImage11 from "../../../../public/Images/BlogImages/BlogImage11.jpg";
import BlogImage12 from "../../../../public/Images/BlogImages/BlogImage12.jpg";
import AuthorImage from "../../../../public/Images/BlogImages/AuthorImage.jpg";
import { CiSearch, CiUser, CiHeart } from "react-icons/ci";
import { FaCaretRight, FaRegCommentDots } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdTimer } from "react-icons/md";
import { PiLineVertical } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
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

const BlogDetails = () => {
  const router = useRouter();
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
            Home / Blog / Blog Details
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-stretch mt-10 p-10">
        <div className="flex flex-col gap-6 px-4 w-full max-w-[771px] mx-auto mb-6">
          <div className="bg-white text-black rounded-lg overflow-hidden w-full lg:h-auto md:h-[300px] h-auto mx-auto">
            <Image
              src={BlogImage1}
              alt="Blog Image"
              className="w-full lg:h-72 md:h-56 h-36 object-cover"
            />
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="flex flex-row space-x-2 mr-5">
              <MdTimer className="text-gray-700" />
              <p>January 25, 2021</p>
            </div>
            <div className="flex flex-row space-x-2 mr-5">
              <CiUser className="text-black" />
              <p>Charlie Herwitz</p>
            </div>
            <div className="flex flex-row space-x-2">
              <FaRegCommentDots className="text-gray-700" />
              <p>50 Comment</p>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <p className="text-black font-light">
              The Memphis Design movement is one of unlikeliest success stories
              in the history of design. Like so many artistic reactions, it
              began as an outlet for its creators, a way to rail against and
              confound elite sensibilities. The result was a style that was
              revolutionary in its time and whose spirit is a continual source
              of inspiration to this day.
            </p>
            <p className="text-black  font-light">
              As popular and influential as Memphis Design has been over the
              years, it can sometimes get a bad rap. It is a loud, colorful
              style that is hard to separate from its era. And when implemented
              without care, it can make some design projects feel antiquated. On
              the other hand, a good designer can turn these sins into virtues:
              obnoxious retro becoming lively nostalgia.
            </p>
            <p className="text-black font-light">
              Memphis Design is a 1980s design aesthetic characterized by
              scattered, brightly colored shapes and lines. It typically
              combines circles and triangles with black-and-white graphic
              patterns such as polka dots and squiggly lines.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden w-full mx-auto mt-4">
            <iframe
              src="https://www.youtube.com/embed/Tq-2IwLg7f8?si=pi653u0Qv4d_ii9F"
              title="YouTube video player"
              className="w-full object-cover h-[150px] md:h-[250px] lg:h-[300px]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <div className="flex bg-[#5c4efc] rounded-xl p-8 mt-4">
            <p className="text-white">
              Imagine you’re at a party, and you’re bored. You’ve been bored for
              a while—years, it feels like. You wonder how a party, something
              that is supposed to be fun, can feel like it’s draining the life
              out of your very soul. As you look around the yawning faces of the
              guests, you realize it’s going to take drastic measures to salvage
              any excitement out of this long night. So you sneak a desperate
              gulp of your drink, slip on your tinted sunglasses and leap atop
              of the sofa. You’ve sacrificed yourself to karaoke.
            </p>
          </div>
          <div className="flex md:flex-row flex-col items-start justify-between space-x-4 space-y-4 mt-4">
            <div className="flex flex-col">
              <Image src={BlogImage9} alt="image" className="w-full h-56 rounded-lg" />
              <p className="text-start mt-4">
                The birth of Memphis Design was a lot like this, starting with a
                gathering of architects and industrial designers in Milan, Italy
                in 1981. But it wasn’t the party that bored the guests. It was
                the general state of design—how creativity had stagnated to
                become corporate and uniform.
              </p>
            </div>
            <div className="flex flex-col">
              <Image src={BlogImage8} alt="image" className="w-full h-56 rounded-lg" />
              <p className="text-start mt-4">
                Long before all this, there had been a number of fine art and
                design movements that precipitated Memphis Design, and these
                were likely on the guests’ minds as they traced where it all had
                gone wrong. Kadinsky composition On White Kadinsky’s work also
                likely inspired the Memphis design movement.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-start justify-between shadow-lg bg-white rounded-lg space-x-4 mt-4 p-4">
            <div className="flex flex-col space-y-4">
              <Image src={AuthorImage} alt="image" className="w-20 h-20 rounded-full" />
              <div className="flex flex-row space-x-4">
                <Facebook />
                <Twitter />
                <Youtube />
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <h1 className="font-bold text-lg">Charlie Herwitz</h1>
              <p className="font-semibold text-sm text-[#5c4efc]">
                UI Designer
              </p>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
                porttitor est amet, volutpat augue a sodales nec, vitae.
                Pulvinar vitae eu sed elit vitae.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between mt-4">
            <div className="flex md:flex-row flex-col space-y-2 items-start justify-between w-full mx-auto mb-2">
              <p className="font-bold text-start">3 COMMENTS</p>
              <p className="font-bold text-start">DISCUSS</p>
              <div className="flex flex-row">
                <FaRegCommentDots className="mr-2" />
                <p className="font-bold text-start">GWEN</p>
              </div>
            </div>
            <span
              className="block w-full mx-auto border-t border-black"
              style={{ height: "2px" }}
            ></span>
          </div>
          <div className="flex md:flex-row flex-col space-y-2 justify-between items-start w-full mx-auto">
            <div className="flex flex-row">
              <CiHeart className="mr-2 fill-[#5c4efc]" />
              <p className="font-bold text-start">RECOMMEND</p>
            </div>
            <div className="flex flex-row">
              <p className="font-bold text-start mr-2">SORT BY THE BEST</p>
              <IoIosArrowDown />
            </div>
          </div>
          <div className="flex items-start w-full mx-auto">
            <input
              type="text"
              className="w-full border p-6 border-gray-600 rounded-lg"
            />
          </div>
          <div className="flex flex-row justify-between items-start w-full space-x-2">
            <Image src={BlogImage10} alt="image" className="rounded-lg w-15 h-15" />
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col space-y-2">
                <h1 className="font-bold text-2xl text-[#5c4efc]">
                  Ruben Vetrovs
                </h1>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ullamcorper accumsan malesuada sed feugiat. Rhoncus vel
                  ultrices metus ut sed. Sit nunc, in nibh nisi, viverra quis
                  sociis malesuada.
                </p>
                <div className="flex flex-row space-x-2">
                  <IoIosArrowDown />
                  <PiLineVertical />
                  <IoIosArrowUp />
                </div>
              </div>
              <div className="flex flex-row justify-between items-start w-full space-x-2">
                <Image src={BlogImage11} alt="image" className="rounded-lg w-10 h-10" />
                <div className="flex flex-col space-y-2">
                  <h1 className="font-bold text-xl text-[#5c4efc]">
                    Wilson Schleifer
                  </h1>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ullamcorper accumsan malesuada sed feugiat. Rhoncus vel
                    ultrices metus ut sed. Sit nunc, in nibh nisi, viverra quis
                    sociis malesuada.
                  </p>
                  <div className="flex flex-row space-x-2">
                    <IoIosArrowDown />
                    <PiLineVertical />
                    <IoIosArrowUp />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between items-start w-full space-x-2">
                <Image src={BlogImage12} alt="image"className="rounded-lg w-10 h-10" />
                <div className="flex flex-col space-y-2">
                  <h1 className="font-bold text-xl text-[#5c4efc]">
                    Desirae Geidt
                  </h1>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ullamcorper accumsan malesuada sed feugiat. Rhoncus vel
                    ultrices metus ut sed. Sit nunc, in nibh nisi, viverra quis
                    sociis malesuada.
                  </p>
                  <div className="flex flex-row space-x-2">
                    <IoIosArrowDown />
                    <PiLineVertical />
                    <IoIosArrowUp />
                  </div>
                </div>
              </div>
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
          {Blogs.slice(2, 7).map((blog, index) => (
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

export default BlogDetails;
