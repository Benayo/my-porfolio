import { HashLink as Link } from "react-router-hash-link";

import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav>
      <div className={classes["nav__bar"]}>
        <div className={classes["logo__box"]}>
          <span className="font-logo text-logo font-normal ">BA</span>
          <div className="w-4 h-4 bg-primary rounded-full "></div>
        </div>

        <ul className={classes["nav__link"]}>
          <li>
            <Link to="#about-me" smooth>
              About
            </Link>
          </li>
          <li>
            <Link to="#resume" smooth>
              Resumé
            </Link>
          </li>
          <li>
            <Link to="#my-works" smooth>
              Works
            </Link>
          </li>
          <li>
            <Link to="#contact" smooth>
              Contact
            </Link>
          </li>
        </ul>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6  md:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Nav;
