import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNodejs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";

const SkillExperianceSection = () => {
  return (
    <>
      <div className="min-h-screen flex">
        <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-6">
          {/* Left Side  */}
          <div className="col-span-3 py-4">
            <div className="text-purple font-semibold -rotate-12 origin-bottom-left -ml-2">
              Expertise
            </div>
            <div className="font-bold text-5xl md:text-7xl break-words">
              Skill &<br />
              Experience
            </div>
            <div className="flex gap-4 mt-4 lg:mt-8">
              <div className="w-8 mt-3 border-t-2 border-black "></div>
              <div className="opacity-85 pr-4 md:pr-14 text-justify">
                😎 Full-stack developer with expertise in front-end, back-end
                and databases, ✨ passionate about building user-friendly web
                applications that solve problems.
              </div>
            </div>
            <div className="font-bold text-4xl mt-6 md:mt-10">Skills</div>
            <div className="flex flex-wrap justify-between mt-4 md:mt-8 gap-4">
              <div className="min-w-32 sm:min-w-40">
                <div className="w-16 h-16 rounded-full bg-black flex justify-center items-center">
                  <IoLogoJavascript className="text-white text-4xl" />
                </div>
                <p className="mt-4 text-2xl font-bold">JavaScript</p>
              </div>
              <div className="min-w-32 sm:min-w-40">
                <div className="w-16 h-16 rounded-full bg-black flex justify-center items-center">
                  <RiReactjsLine className="text-white text-4xl" />
                </div>
                <p className="mt-4 text-2xl font-bold">ReactJS</p>
              </div>
              <div className="min-w-32 sm:min-w-40">
                <div className="w-16 h-16 rounded-full bg-black flex justify-center items-center">
                  <TbBrandNextjs className="text-white text-4xl" />
                </div>
                <p className="mt-4 text-2xl font-bold">NextJS</p>
              </div>
              <div className="min-w-32 sm:min-w-40">
                <div className="w-16 h-16 rounded-full bg-black flex justify-center items-center">
                  <TbBrandNodejs className="text-white text-4xl" />
                </div>
                <p className="mt-4 text-2xl font-bold">NodeJS</p>
              </div>
              <div className="min-w-32 sm:min-w-40">
                <div className="w-16 h-16 rounded-full bg-black flex justify-center items-center">
                  <SiExpress className="text-white text-4xl" />
                </div>
                <p className="mt-4 text-2xl font-bold">ExpressJS</p>
              </div>
              <div className="min-w-32 sm:min-w-40">
                <div className="w-16 h-16 rounded-full bg-black flex justify-center items-center">
                  <SiMongodb className="text-white text-4xl" />
                </div>
                <p className="mt-4 text-2xl font-bold">MongoDB</p>
              </div>
            </div>
          </div>

          {/* Right Side  */}
          <div className="col-span-3 py-4">
            <div className="font-bold text-4xl mt-6 md:mt-10">Experience</div>

            <div className="mt-6 md:mt-10 border-t-2 border-t-black">
              <div className="flex gap-8 items-center mt-4">
                <div>
                  <p className="font-bold text-sm w-32">Oct 2023 - Present</p>
                </div>
                <div>
                  <p className="font-bold text-2xl">
                    Executive, Software Developer
                  </p>
                  <p className="opacity-85 text-sm">Asiatic Mindhsare Ltd</p>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-10 border-t-2 border-t-black">
              <div className="flex gap-8 items-center mt-4">
                <div>
                  <p className="font-bold text-sm w-32">May 2023 - Sept 2023</p>
                </div>
                <div>
                  <p className="font-bold text-2xl">
                    Junior Executive, Software Developer
                  </p>
                  <p className="opacity-85 text-sm">Asiatic Mindhsare Ltd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillExperianceSection;
