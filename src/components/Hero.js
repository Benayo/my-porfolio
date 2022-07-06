import { HashLink as Link } from "react-router-hash-link";

import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes["hero__section"]}>
      <img
        src="./img/design1.png"
        alt="dots"
        className={classes["img__left"]}
      />

      <div className={classes["hero__text__box"]}>
        <div className={classes["hero__text__one"]}>Hi, I'm Benjamin</div>

        <h1 className={classes["hero__text__main"]}>
          Building digital
          <span className="block"> products and brands </span>
          for the future
        </h1>

        <div className={classes["hero__text__sub"]}>
          a{" "}
          <span className={classes["hero__text__sub--bold"]}>
            {" "}
            Product Designer
          </span>{" "}
          and{" "}
          <span className={classes["hero__text__sub--bold"]}>
            Frontend Developer
          </span>
          . I
          <span className="block">
            specialize in UI/UX Design, Responsive Web Design,
          </span>
          and visual development.
        </div>

        <Link className={classes["btn"]} to="#contact" smooth>
          connect with me
        </Link>
      </div>

      <img
        src="./img/design2.png"
        alt="dots"
        className={classes["img__right"]}
      />
    </div>
  );
};

export default Hero;
