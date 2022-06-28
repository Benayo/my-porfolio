const Nav = () => {
  return (
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
  );
};

export default Nav;
