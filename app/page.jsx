import React from "react";
import Navbar from "./Components/Sections/HomePage/Navbar";
import HeroSection from "./Components/Sections/HomePage/HeroSection";
import AboutMeSection from "./Components/Sections/HomePage/AboutMeSection";
import SkillExperianceSection from "./Components/Sections/HomePage/SkillExperianceSection";
import ProjectSection from "./Components/Sections/HomePage/ProjectSection";
import EducationSection from "./Components/Sections/HomePage/EducationSection";
import BlogSection from "./Components/Sections/HomePage/BlogSection";
import ContactMeSection from "./Components/Sections/HomePage/ContactMeSection";

const page = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <HeroSection />
      </div>
      <div>
        <AboutMeSection />
      </div>
      <div>
        <SkillExperianceSection />
      </div>
      <div>
        <ProjectSection />
      </div>
      <div>
        <EducationSection />
      </div>
      <div>
        <BlogSection />
      </div>
      <div>
        <ContactMeSection />
      </div>
    </div>
  );
};

export default page;
