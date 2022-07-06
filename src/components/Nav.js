import { HashLink as Link } from "react-router-hash-link";

import classes from "./Nav.module.css";

const Nav = (props) => {
  return (
    <div>
      <nav>
        <div className={classes["nav__bar"]}>
          <div className={classes["logo__box"]}>
            <Link className={classes["logo__text"]} to="#home">
              BA
            </Link>
            <div className={classes["logo__circle"]}></div>
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
            className={classes.menu}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            onClick={props.onClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
