import Button from "../UI/Button";

const Hero = () => {
  return (
    <div className="mt-[3.75rem] h-full relative font-body">
      <div className="absolute top-0 left-[10%] ">
        <img src="./img/design1.png" alt="" />
      </div>
      <div className=" flex flex-col items-center justify-center md:p-28 ">
        <div className="text-lg font-semibold lg:text-2xl">
          Hi, I'm Benjamin
        </div>

        <h1 className="text-[2.0rem] font-hero m-4 font-bold text-center lg:text-[4rem] ">
          Building digital{" "}
          <span className="block "> products, brands, and </span>
          experience.
        </h1>

        <div className="font-medium text-secondary-100 text-center">
          a <span className="font-semibold text-primary">Product Designer</span>{" "}
          and{" "}
          <span className="font-semibold text-primary ">
            Frontend Developer
          </span>
          . I{" "}
          <span className="block">
            specialize in UI/UX Design, Responsive Web Design,
          </span>
          and visual development.
        </div>
        <Button>Connect with me</Button>
      </div>
      <div className="absolute bottom-[15%] right-[10%]">
        <img src="./img/design2.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
