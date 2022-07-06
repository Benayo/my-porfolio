import { HashLink as Link } from "react-router-hash-link";

import classes from "./SideBar.module.css";

const SideBar = (props) => {
  return (
    <aside className={classes.container}>
      <div className={classes["logo__cancel__nav"]}>
        <div className={classes["logo__box"]}>
          <Link
            className={classes["logo__text"]}
            to="#home"
            onClick={props.onCancel}
          >
            BA
          </Link>
          <div className={classes["logo__circle"]}></div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classes.cancel}
            onClick={props.onCancel}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>

      <ul className={classes["nav__link"]}>
        <li>
          <Link onClick={props.onCancel} to="#about-me" smooth>
            About
          </Link>
        </li>
        <li>
          <Link onClick={props.onCancel} to="#resume" smooth>
            Resumé
          </Link>
        </li>
        <li>
          <Link onClick={props.onCancel} to="#my-works" smooth>
            Works
          </Link>
        </li>
        <li>
          <Link onClick={props.onCancel} to="#contact" smooth>
            Contact
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
