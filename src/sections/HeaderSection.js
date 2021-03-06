import Hero from "../components/Hero";

import classes from "./HeaderSection.module.css";

const HeaderSection = (props) => {
  return (
    <header>
      <div id="home" className={classes.container}>
        <Hero />
        <div className={classes["header__text"]}>Hello There.</div>
      </div>
    </header>
  );
};

export default HeaderSection;
