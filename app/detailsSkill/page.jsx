"use client";
import { useState } from "react";

import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNodejs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import { data } from "./data";

const Page = () => {
  const [currentClick, setCurrentClick] = useState({
    bgColor: "#f7e025",
    textColor: "#000",
    secondTextColor: "#000",
    mode: "javascript",
    logo: <IoLogoJavascript />,
  });

  return (
    <>
      <div className="min-h-screen p-4 md:p-8">
        <div className="text-purple mt-4 w-fit">
          <Link href={"/"}>
            <div className="flex items-center gap-4 text-2xl font-bold w-fit">
              <span className="bg-purple p-3 text-white rounded-full animate-pulse">
                <IoMdArrowRoundBack />
              </span>
              <span>Homepage</span>
            </div>
          </Link>
        </div>
        <div className="text-3xl md:text-5xl mt-4 md:mt-8">Skills</div>
        <div className="mt-4 grid grid-cols-4 gap-8">
          <div className="col-span-4 md:col-span-2">
            {/* Strong Skill  */}
            <div className="text-xl md:text-2xl mt-4 md:mt-8 ">
              My Strong Skills
            </div>
            <div className="flex flex-wrap justify-start mt-4 md:mt-8 gap-6">
              <div
                className="min-w-32 sm:min-w-40 flex flex-col justify-center items-center cursor-pointer"
                onClick={() =>
                  setCurrentClick({
                    bgColor: "#313638",
                    textColor: "#fff",
                    secondTextColor: "#fff",
                    mode: "html",
                    logo: <TiHtml5 className="text-[#dd4b25]" />,
                  })
                }
              >
                <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center border-2 border-[#dd4b25]">
                  <TiHtml5 className="text-[#dd4b25] text-4xl " />
                </div>
                <p className="mt-4 text-2xl font-bold">HTML</p>
              </div>
              <div
                className="min-w-32 sm:min-w-40 flex flex-col justify-center items-center cursor-pointer"
                onClick={() =>
                  setCurrentClick({
                    bgColor: "#faf9f6",
                    textColor: "#000",
                    secondTextColor: "#000",
                    mode: "css",
                    logo: <FaCss3Alt className="text-[#254bdd]" />,
                  })
                }
              >
                <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center border-2 border-[#254bdd]">
                  <FaCss3Alt className="text-[#254bdd] text-4xl " />
                </div>
                <p className="mt-4 text-2xl font-bold">CSS</p>
              </div>
              <div
                className="min-w-32 sm:min-w-40 flex flex-col justify-center items-center cursor-pointer"
                onClick={() =>
                  setCurrentClick({
                    bgColor: "#f7e025",
                    textColor: "#000",
                    secondTextColor: "#000",
                    mode: "javascript",
                    logo: <IoLogoJavascript />,
                  })
                }
              >
                <div className="w-16 h-16 rounded-full bg-[#f7e025] flex justify-center items-center border-2 border-[#f7e025]">
                  <IoLogoJavascript className="text-black text-4xl " />
                </div>
                <p className="mt-4 text-2xl font-bold">JavaScript</p>
              </div>
              <div
                className="min-w-32 sm:min-w-40 flex flex-col justify-center items-center cursor-pointer"
                onClick={() =>
                  setCurrentClick({
                    bgColor: "#58c4dc",
                    textColor: "#000",
                    secondTextColor: "#000",
                    mode: "reactjs",
                    logo: <RiReactjsLine />,
                  })
                }
              >
                <div className="w-16 h-16 rounded-full bg-black flex justify-center items-center border-2 border-black">
                  <RiReactjsLine className="text-[#58c4dc] text-4xl" />
                </div>
                <p className="mt-4 text-2xl font-bold">ReactJS</p>
              </div>

              <div
                className="min-w-32 sm:min-w-40 flex flex-col justify-center items-center cursor-pointer"
                onClick={() =>
                  setCurrentClick({
                    bgColor: "#7fc728",
                    textColor: "#000",
                    secondTextColor: "#000",
                    mode: "nodejs",
                    logo: <TbBrandNodejs />,
                  })
                }
              >
                <div className="w-16 h-16 rounded-full bg-black flex justify-center items-center border-2 border-black">
                  <TbBrandNodejs className="text-[#7fc728] text-4xl" />
                </div>
                <p className="mt-4 text-2xl font-bold">NodeJS</p>
              </div>
              <div
                className="min-w-32 sm:min-w-40 flex flex-col justify-center items-center cursor-pointer"
                onClick={() =>
                  setCurrentClick({
                    bgColor: "#f7e025",
                    textColor: "#000",
                    secondTextColor: "#000",
                    mode: "expressjs",
                    logo: <SiExpress />,
                  })
                }
              >
                <div className="w-16 h-16 rounded-full bg-[#f7e025] flex justify-center items-center border-2 border-[#f7e025]">
                  <SiExpress className="text-black text-4xl" />
                </div>
                <p className="mt-4 text-2xl font-bold">ExpressJS</p>
              </div>
              <div
                className="min-w-32 sm:min-w-40 flex flex-col justify-center items-center cursor-pointer"
                onClick={() =>
                  setCurrentClick({
                    bgColor: "#118d4d",
                    textColor: "#000",
                    secondTextColor: "#000",
                    mode: "mongodb",
                    logo: <SiMongodb />,
                  })
                }
              >
                <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center border-2 border-[#118d4d]">
                  <SiMongodb className="text-[#118d4d] text-4xl" />
                </div>
                <p className="mt-4 text-2xl font-bold">MongoDB</p>
              </div>
            </div>

            {/* Supportive Skill  */}
            <div className="text-xl md:text-2xl mt-8 md:mt-12 ">
              My Other Skills
            </div>
            <div className="flex flex-wrap justify-start mt-4 md:mt-8 gap-6">
              <div
                className="min-w-32 sm:min-w-40 flex flex-col justify-center items-center cursor-pointer"
                onClick={() =>
                  setCurrentClick({
                    bgColor: "#313638",
                    textColor: "#ffffff",
                    secondTextColor: "#fff",
                    mode: "nextjs",
                    logo: <TbBrandNextjs />,
                  })
                }
              >
                <div className="w-16 h-16 rounded-full bg-black flex justify-center items-center border-2 border-black">
                  <TbBrandNextjs className="text-white text-4xl" />
                </div>
                <p className="mt-4 text-2xl font-bold">NextJS</p>
              </div>
              <div
                className="min-w-32 sm:min-w-40 flex flex-col justify-center items-center cursor-pointer"
                onClick={() =>
                  setCurrentClick({
                    bgColor: "#38bdf8",
                    textColor: "#000",
                    secondTextColor: "#000",
                    mode: "tailwind",
                    logo: <SiTailwindcss />,
                  })
                }
              >
                <div className="w-16 h-16 rounded-full bg-[#313638] flex justify-center items-center border-2 border-[#313638]">
                  <SiTailwindcss className="text-[#38bdf8] text-4xl " />
                </div>
                <p className="mt-4 text-2xl font-bold">Tailwind</p>
              </div>
            </div>
          </div>
          <div
            className="hidden md:block col-span-2 p-6 rounded-lg h-[70vh] overflow-y-scroll"
            style={{
              backgroundColor: currentClick.bgColor,
              color: currentClick.textColor,
            }}
          >
            <p className="text-7xl mb-2 flex justify-center">
              {currentClick.logo}
            </p>
            <p className="text-2xl font-bold">
              {data[currentClick.mode].titleOne}
            </p>
            <p
              className="mt-2 text-justify"
              style={{ color: currentClick.secondTextColor }}
            >
              {data[currentClick.mode].descriptionOne}
            </p>
            <p className="text-2xl font-bold mt-8">
              {data[currentClick.mode].titleTwo}
            </p>
            <p
              className="mt-2 text-justify"
              style={{ color: currentClick.secondTextColor }}
            >
              {data[currentClick.mode].descriptionTwo}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
