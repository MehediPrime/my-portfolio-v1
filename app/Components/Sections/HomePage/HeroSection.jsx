const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-5">
        <div className="col-span-3 py-4 lg:py-8 ">
          <div>Hello!</div>
          <div>Full Stack Web Developer</div>
          <div className="flex gap-4">
            <div className="w-8 mt-3 border-t-2 border-black"></div>
            <div>
              Hi, I'm a full stack web developer. I'm proficient in all aspects
              of web project development, from start to finish.
            </div>
          </div>
          <div>Button Section</div>
        </div>
        <div className="col-span-2 py-4 lg:py-8 ">2 HeroSection</div>
      </div>
    </div>
  );
};

export default HeroSection;
