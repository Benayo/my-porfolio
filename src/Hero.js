const Hero = () => {
  return (
    <div className="font-body relative min-h-full flex justify-center items-center bg-orange-400">
      <div className=" absolute top-0 left-[25%] ">
      
      </div>

      <div className="absolute top-[30%] left-[30%] ">
        <div className="text-2xl font-semibold block">Hi, I'm Benjamin</div>
        <h1 className="text-[4rem] font-hero mt-4 font-bold block">
          Building digital <br /> products, brands, <br /> and experience.
        </h1>

        <div className="font-medium text-secondary-100">
          a <span className="font-semibold text-primary">Product Designer</span>{" "}
          and{" "}
          <span className="font-semibold text-primary">Frontend Developer</span>
          . I <br /> specialize in UI/UX Design, Responsive Web Design, <br />{" "}
          and visual development.
        </div>

        <div>
          <a href="/">Connect with me</a>
        </div>
      </div>

      <div className="absolute bottom-0 right-[25%] ">
        <img src="./img/design2.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
