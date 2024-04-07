import { FaUserAstronaut } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { PiShareNetworkLight } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import Link from "next/link";

const AboutMeSection = () => {
  const dateStr = "1 May 2023";
  const dateObj = new Date(dateStr);

  const today = new Date();

  const yearsDiff = today.getFullYear() - dateObj.getFullYear();
  const monthsDiff = today.getMonth() - dateObj.getMonth();

  const totalMonthsPassed = yearsDiff * 12 + monthsDiff;
  return (
    <>
      <div className="min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-6">
          {/* Right Side  */}
          <div className="col-span-3 py-4 order-2">
            <div className="text-purple font-semibold -rotate-12 origin-bottom-left -ml-2">
              About Me
            </div>
            <div className="font-medium text-5xl md:text-7xl break-words">
              Hey There!
            </div>
            <div className="font-medium text-justify mt-4 md:mt-8">
              Hi, I&#39;m a full stack web developer from Bangladesh. I have
              deep understanding of the technologies and the processes required
              for realising a successful web project from A to Z. I&#39;m ready
              and eager to work to create something simple and unique.
            </div>
            <div className="flex gap-4 flex-wrap mt-4 md:mt-8">
              <div className="min-w-52 min-h-28 rounded-lg shadow-lg bg-white flex flex-col justify-center p-4 grow">
                <div className="flex gap-2 items-center">
                  <span>
                    <FaUserAstronaut />
                  </span>
                  <span className="mt-1 text-md">S M Mehedi</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span>
                    <MdOutlineAlternateEmail />
                  </span>
                  <span className="mt-1 text-md">s.mehedi2022@gmail.com</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span>
                    <TfiLocationPin />
                  </span>
                  <span className="mt-1 text-md">Dhaka, Bangladesh</span>
                </div>
              </div>
              <div className="min-w-52 min-h-28 rounded-lg shadow-lg bg-white flex flex-col gap-2 justify-center p-4 grow">
                <div className="flex gap-2 items-center">
                  <div>
                    <p className="text-5xl mt-3">{totalMonthsPassed}+</p>
                  </div>
                  <div>
                    <p className="font-bold md:text-lg">
                      Months of Professional
                    </p>
                    <p className="font-bold text-3xl md:text-4xl">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Left Side  */}
          <div className="col-span-3 py-4 h-96 order-1">
            <div className="relative w-min -ml-9 md:ml-0 ">
              <div className="w-44 h-44 md:w-64 md:h-64 bg-purple rounded-full relative top-24 left-12 flex flex-col justify-center items-center text-white">
                <PiShareNetworkLight className="text-5xl md:text-9xl" />
                <p className="bold mt-2 text-xl ">My Network</p>
              </div>
              <Link
                href={"https://www.linkedin.com/in/mehediprime/"}
                target="_blank"
                className="w-32 h-32 md:w-40 md:h-40 bg-blue rounded-full relative -top-40 left-7 md:-top-64 md:left-7 flex flex-col justify-center items-center text-white cursor-pointer hover:scale-110 hover:transition-all transition-all"
              >
                <RxLinkedinLogo className="text-3xl md:text-6xl" />
                <p className="bold mt-2 md:text-lg">LinkedIn</p>
              </Link>
              <Link
                href={"https://github.com/MehediPrime/"}
                target="_blank"
                className="w-32 h-32 md:w-40 md:h-40 bg-grayDark rounded-full relative -top-44 left-48 md:-top-64 md:left-64 flex flex-col justify-center items-center text-white cursor-pointer hover:scale-110 hover:transition-all transition-all"
              >
                <FaGithub className="text-3xl md:text-6xl" />
                <p className="bold mt-2 md:text-lg">Github</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeSection;
