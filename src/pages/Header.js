const Header = () => {
  return (
    <div className="max-h-screen relative font-primary  mx-[6.25rem] my-[3.75rem]   ">
      <nav>
        <div className=" flex justify-between items-center">
          <div className="flex items-baseline border-2 border-orange-800">
            <span className="font-logo text-logo font-normal ">BA</span>
            <div className="w-4 h-4 bg-primary rounded-full "></div>
          </div>

          <ul className="text-list list-none font-body font-medium opacity-75 flex ">
            <li>
              <a
                href="/"
                className="no-underline text-primary   pr-[3.75rem] hover:font-semibold transition ease-out duration-500 "
              >
                <span>About</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="no-underline text-primary   pr-[3.75rem] hover:font-semibold transition ease-out duration-500"
              >
                <span>Resumé</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="no-underline text-primary   pr-[3.75rem] hover:font-semibold transition ease-out duration-500"
              >
                <span>Works</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="no-underline text-primary hover:font-semibold transition ease-out duration-500"
              >
                <span>Contact me</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="mt-[3.75rem] h-full relative font-body">
        <div className="absolute top-0 left-[10%] ">
          <img src="./img/design1.png" alt="" />
        </div>
        <div className=" flex flex-col items-center justify-center md:p-28 ">
          <div className="text-lg font-semibold lg:text-2xl">Hi, I'm Benjamin</div>

          <h1 className="text-[2.0rem] font-hero m-4 font-bold text-center lg:text-[4rem] ">
            Building digital <span className="block "> products, brands, </span>
            and experience.
          </h1>

          <div className="font-medium text-secondary-100 text-center">
            a{" "}
            <span className="font-semibold text-primary">Product Designer</span>{" "}
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

          <div className=" m-8 bg-primary px-4 py-3 rounded-md">
            <a href="/" className=" no-underline text-white uppercase  ">
              Connect with me
            </a>
          </div>
        </div>
        <div className="absolute bottom-[15%] right-[10%]">
          <img src="./img/design2.png" alt="" />
        </div>
      </div>

      <div className="text-[12.5rem] font-logo  font-bold opacity-[3%] absolute left-[-18%] bottom-[-10%] ">
        Hello There.
      </div>
    </div>
  );
};

export default Header;
