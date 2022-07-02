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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              posuere lacus eget nisl est viverra aenean. Viverra et tellus ac
              potenti aliquet eu ac eu, nunc. Sit accumsan imperdiet faucibus
              nec, ultrices tortor, pharetra. Tristique dui cursus nisl egestas
              quam ornare sem. Mattis nunc vitae nec vel. Elit, orci, et in enim
              viverra fringilla viverra molestie. Rutrum enim amet facilisi amet
              sit at. Lacus leo mattis sodales eu.
            </p>
            <p>
              Elit quis euismod volutpat facilisis nunc ut gravida. Adipiscing
              elit eget eget in dui. Donec et ac sagittis sit ut. Tristique
              vitae tincidunt lobortis facilisi duis semper lectus. Pulvinar
              eget amet sed bibendum eu suspendisse tempor, massa vitae. Viverra
              tempor, vitae enim in lorem quisque tempus dignissim quis. A
              vulputate vulputate pulvinar nisi. Faucibus id arcu quis ac.
            </p>
          </div>
          <button className={classes["btn"]}>Download cv</button>
        </div>

        <img
          src="./img/img-1.png"
          alt="Profile Picture"
          className={classes["image__container"]}
        />
      </div>
    </section>
  );
};

export default AboutSection;
