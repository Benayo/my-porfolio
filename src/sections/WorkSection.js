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

            <span className={classes["work__text"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a
              mauris arcu integer venenatis nunc. Sit vulputate nulla neque
              cursus vitae.
            </span>
          </div>
          <div className="flex flex-col items-center justify-center mb-11 md:mb-0">
            <img
              src="./img/img-work-2.png"
              alt="Food App Project"
              className={classes["work__img"]}
            />

            <span className={classes["work__text"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a
              mauris arcu integer venenatis nunc. Sit vulputate nulla neque
              cursus vitae.
            </span>
          </div>
          <div className="flex flex-col items-center justify-center mb-11 md:mb-0">
            <img
              src="./img/img-work-3.png"
              alt="Food App Project"
              className={classes["work__img"]}
            />

            <span className={classes["work__text"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a
              mauris arcu integer venenatis nunc. Sit vulputate nulla neque
              cursus vitae.
            </span>
          </div>
        </div>

        {/* <div className=" mt-[3.75rem] w-fit text-center bg-primary px-4 py-3 rounded-md ">
          <a href="/" className="mt-11 no-underline text-white uppercase  ">
            @BENAYO ON BEHANCE
          </a>
        </div> */}

        <button className={classes.btn}>@BENAYO on behance</button>
      </div>
    </section>
  );
};
export default WorkSection;
