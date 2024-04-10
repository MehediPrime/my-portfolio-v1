import React from "react";
import Navbar from "./Components/Sections/HomePage/Navbar";
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
      <div>
        <Navbar />
      </div>
      <div className="px-4">
        <HeroSection />
      </div>
      <div className="px-4 bg-yellow">
        <AboutMeSection />
      </div>
      <div className="px-4">
        <SkillExperianceSection />
      </div>
      <div className="px-4 bg-yellow">
        <ProjectSection />
      </div>
      <div className="px-4">
        <EducationSection />
      </div>
      <div className="px-4">
        <BlogSection />
      </div>
      <div className="px-4">
        <ContactMeSection />
      </div>
    </div>
  );
};

export default page;
