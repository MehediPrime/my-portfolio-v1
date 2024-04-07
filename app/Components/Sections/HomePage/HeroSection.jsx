import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { AiOutlineCloudDownload } from "react-icons/ai";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-5">
        {/* Left Side  */}
        <div className="col-span-2 py-4">
          <div className="text-purple font-semibold -rotate-12 origin-bottom-left -ml-2">
            Hello!
          </div>
          <div className="font-medium text-6xl break-words">
            Full Stack Web Developer
          </div>
          <div className="flex gap-4 mt-4 lg:mt-8">
            <div className="w-8 mt-3 border-t-2 border-black "></div>
            <div className="opacity-85">
              Hi, I&#39;m a full stack web developer. I&#39;m proficient in all
              aspects of web project development from start to finish.
            </div>
          </div>
          <div className="mt-8 lg:mt-12">
            <div className="flex flex-wrap gap-8">
              <button
                type="button"
                className="bg-purple text-white py-4 px-8 rounded-2xl font-bold flex gap-2 items-center"
              >
                <span className="mt-1 text-lg">Let&#39;s Talk</span>
                <span>
                  <BiSolidMessageSquareDetail />
                </span>
              </button>
              <button
                type="button"
                className="py-4 px-8 rounded-lg font-bold flex gap-2 items-center"
              >
                <span className="mt-1 text-lg">Resume</span>
                <span>
                  <AiOutlineCloudDownload />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side  */}
        <div className="col-span-3 py-4">2 HeroSection</div>
      </div>
    </div>
  );
};

export default HeroSection;
