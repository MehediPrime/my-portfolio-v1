import React from "react";
import NavbarTop from "./Components/Sections/HomePage/NavbarTop";
import HeroSection from "./Components/Sections/HomePage/HeroSection";
import AboutMeSection from "./Components/Sections/HomePage/AboutMeSection";
import SkillExperianceSection from "./Components/Sections/HomePage/SkillExperianceSection";
import ProjectSection from "./Components/Sections/HomePage/ProjectSection";
import EducationSection from "./Components/Sections/HomePage/EducationSection";
import BlogSection from "./Components/Sections/HomePage/BlogSection";
import ContactMeSection from "./Components/Sections/HomePage/ContactMeSection";

import { Varta } from "next/font/google";

const varta = Varta({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const page = () => {
  return (
    <div className={varta.className}>
      <div className="sticky top-0 bg-white z-50">
        <NavbarTop />
      </div>
      <div className="px-4 " id="#home">
        <HeroSection />
      </div>
      <div className="px-4 pt-[10vh] bg-yellow" id="about">
        <AboutMeSection />
      </div>
      <div className="px-4 pt-[10vh]" id="skillandexperiance">
        <SkillExperianceSection />
      </div>
      <div className="px-4 pt-[10vh] bg-yellow" id="projects">
        <ProjectSection />
      </div>
      <div className="px-4 pt-[10vh]" id="education">
        <EducationSection />
      </div>
      {/* In Separeate Page  */}
      {/* <div className="px-4">
        <BlogSection />
      </div> */}
      <div className="px-4 pt-[10vh] bg-yellow" id="contactme">
        <ContactMeSection />
      </div>
    </div>
  );
};

export default page;
