import classes from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section id="about-me" className={classes.container}>
      <div className={classes["label__box"]}>
        <div className={classes["label__text"]}>About me</div>

        <img src="./img/design3.png" className={classes.image} />
      </div>
      <div className={classes["about__container"]}>
        <div className={classes["about__text__box"]}>
          <div className={classes["about__text"]}>
            <p>
              I am Benjamin Odeleye, a passionate product designer and a
              frontend developer which I enjoy doing by building, developing and
              bringing products to life on the internet. My interest in web
              development started back in 2020 when I decided to take a dive
              into product design and frontend developement in{" "}
              <a
                href="http://www.univelcity.com"
                className={classes["inline__text"]}
              >
                univelcity
              </a>{" "}
              where I collaborated with team memebers to produce a fully
              prototyped mobile real estate app. Since then, I have been working
              at my current role as a product designer at{" "}
              <a
                href="http://Jand2gidiWorldwide.com"
                className={classes["inline__text"]}
              >
                Jand2gidi Worldwide
              </a>{" "}
            </p>
            <p>
              I also possess coding abilities in HTML, CSS, Javascript and React
              Js which makes me an excellent team member assisting frontend and
              backend developer in acheiving users requirements. My focus
              currently is geared towards building accessible inclusive users
              friendly products, brands and digital experience for a sustainable
              user experience in foreseeable future.
            </p>
          </div>
          <a
            className={classes["btn"]}
            target="_blank"
            href="https://drive.google.com/file/d/1AaLcxtCJd2rG_P48HqVsJCyhSNKCZEkY/view?usp=sharing"
          >
            Download cv
          </a>
        </div>

        <img
          src="./img/profileMain.jpg"
          alt="Profile Picture"
          className={classes["image__container"]}
        />
      </div>
    </section>
  );
};

export default AboutSection;
