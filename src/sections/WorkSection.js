import classes from "./WorkSection.module.css";

const WorkSection = () => {
  return (
    <section id="my-works" className={classes["container__main"]}>
      <div className={classes["container__sub"]}>
        <div className={classes["label__box"]}>
          <img src="./img/design5.png" alt="dots" className={classes.image} />
          <div className={classes["label__text"]}>Works</div>
        </div>

        <div className={classes["grid__container"]}>
          <div className="flex flex-col items-center justify-center  mb-11 sm:mb-0">
            <img
              src="./img/img-work-1.png"
              alt="Food App Project"
              className={classes["work__img"]}
            />

            <div className={classes["work__text"]}>
              <span className="block font-semibold text-primary text-sm py-2">
                Food ordering app
              </span>
              A mobile application that combines various dishes and drinks in
              order to increase level of sales and ensure the convenience of the
              choice for users.
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mb-11 md:mb-0">
            <img
              src="./img/img-work-2.png"
              alt="Food App Project"
              className={classes["work__img"]}
            />

            <div className={classes["work__text"]}>
              <span className="block font-semibold text-primary text-sm py-2">
                Academy Dashboard
              </span>
              A platform that provides a daily overview for students and
              teachers, great for long-term anaylsis and a high level
              understanding of behaviour.
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mb-11 md:mb-0">
            <img
              src="./img/img-work-3.png"
              alt="Food App Project"
              className={classes["work__img"]}
            />

            <span className={classes["work__text"]}>
              <span className="block font-semibold text-primary text-sm py-2">
                Watch store app
              </span>
              An application that allows users see varieties, descriptions,
              ratings,reviews, release note of watches and make purchasesat
              their convenience.
            </span>
          </div>
        </div>

        <a
          className={classes.btn}
          target="_blank"
          href="https://www.behance.net/benayo"
          rel="noopener noreferrer"
        >
          @BENAYO on behance
        </a>
      </div>
    </section>
  );
};
export default WorkSection;
