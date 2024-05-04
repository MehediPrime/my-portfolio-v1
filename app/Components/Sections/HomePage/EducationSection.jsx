import { HiMiniAcademicCap } from "react-icons/hi2";

export const EducationCard = ({
  time = "time",
  degree = "degree",
  institute = "institute",
}) => {
  return (
    <div className="min-w-72 flex gap-5 items-center">
      <div>
        <HiMiniAcademicCap className="text-5xl bg-black p-2 rounded-full text-white" />
      </div>
      <div>
        <p className="text-lg font-bold">{time}</p>
        <p className="text-2xl font-bold">{degree}</p>
        <p className="text-lg font-bold opacity-55">{institute}</p>
      </div>
    </div>
  );
};

const EducationSection = () => {
  return (
    <>
      {/* For education section ----> */}
      <div className="min-h-screen max-w-6xl mx-auto flex flex-col pt-8">
        {/* title */}
        <div>
          <div className="text-purple font-semibold -rotate-12 origin-bottom-left -ml-2">
            Education
          </div>
          <div className="font-bold text-5xl md:text-7xl break-words">
            Academic
            <br />
            Achievements
          </div>
        </div>

        {/* Information */}
        <div className="mt-4 md:mt-12 mb-8 grid md:grid-cols-2 gap-8 md:gap-y-16">
          <EducationCard
            time="January 2024 - Present"
            degree="MS in Management Information Systems"
            institute="Daffodil International University"
          />
          <EducationCard
            time="2018 - 2022"
            degree="B.Sc. Engg. in Computer Science & Engineering"
            institute="Bangladesh University of Business & Technology"
          />
          <EducationCard
            time="2017"
            degree="Higher Secondary Certificate"
            institute="Maestro Crown College"
          />
          <EducationCard
            time="2015"
            degree="Secondary School Certificate"
            institute="Suapur Nannar High School"
          />
        </div>
      </div>
    </>
  );
};

export default EducationSection;
