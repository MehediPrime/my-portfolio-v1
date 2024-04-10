import { RiExternalLinkFill } from "react-icons/ri";
import Image from "next/image";
import projectPic1 from "@/public/Image/ProjectScreenshot/p1.jpg";
import CircularText from "../../SmallComponents/CircularText";
import Link from "next/link";

export const ProjectCard = ({
  title = "Project Title",
  subTitle = "sub-title",
  image,
}) => {
  return (
    <Link href={"#"}>
      <div className="mt-14 border-t-2 border-black w-80">
        <div className="flex mt-4 gap-2">
          <p className="font-bold text-3xl">{title}</p>
          <div className="w-fit">
            <div className="bg-purple p-4 w-fit rounded-full ">
              <RiExternalLinkFill className="text-2xl text-white" />
            </div>
          </div>
        </div>
        <p>{subTitle}</p>
        <Image
          src={image}
          width={"auto"}
          height={"auto"}
          priority={true}
          className="bg-cover w-80 h-80 mt-4"
          alt="Project Screenshot"
        ></Image>
      </div>
    </Link>
  );
};

const ProjectSection = () => {
  return (
    <>
      {/* For project section ----> */}
      <div className="min-h-screen max-w-6xl mx-auto flex justify-between items-center flex-wrap gap-y-4 relative">
        <div className="mt-4">
          <div className="py-4">
            <div className="text-purple font-semibold -rotate-12 origin-bottom-left -ml-2">
              Expertise
            </div>
            <div className="font-bold text-5xl md:text-7xl break-words">
              Latest
              <br />
              Projects
            </div>
            <ProjectCard
              title="Plantshop Landing Page Design"
              subTitle="Web/Landing Page"
              image={projectPic1}
            />
          </div>
        </div>
        <div className="">
          <ProjectCard
            title="VPS Hosting Website Design"
            subTitle="Web/Landing Page"
            image={projectPic1}
          />
        </div>
        <div className="mb-52">
          <ProjectCard
            title="Book Landing Page Design"
            subTitle="Web/Landing Page"
            image={projectPic1}
          />
        </div>
        <div className="absolute bottom-0 right-0 mt-2 mb-6">
          <CircularText />
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
