// import Button from "../UI/Button";
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
          <span className="block"> products, brands, and </span>
          experience.
        </h1>

        <div className={classes["hero__text__sub"]}>
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

        <button className={classes["btn"]}>Connect with me</button>
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
