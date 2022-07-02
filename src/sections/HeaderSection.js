import Nav from "../components/Nav";
import Hero from "../components/Hero";

import classes from "./HeaderSection.module.css";

const HeaderSection = () => {
  return (
    <div className={classes.container}>
      <Nav />
      <Hero />
      <div className={classes["header__text"]}>Hello There.</div>
    </div>
  );
};

export default HeaderSection;
