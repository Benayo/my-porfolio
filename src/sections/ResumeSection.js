import classes from "./ResumeSection.module.css";
const ResumeSection = () => {
  return (
    <section id="resume" className="bg-secondary-200 py-11 relative">
      <div className={classes["label__box"]}>
        <img src="./img/design4.png" alt="dots" className={classes.image} />

        <div className={classes["label__text"]}>Resumé</div>
      </div>

      <div className={classes.container}>
        <div className={classes["resume__container__main"]}>
          <div className={classes["resume__grid__container__main"]}>
            <div className={classes["resume__container__sub--1"]}>
              <div className={classes["resume__heading__main"]}>
                Work Experience
              </div>
              <div className={classes["resume__heading__sub"]}>
                Jand2Gidi Logistics
              </div>
              <div className={classes["resume__text__box"]}>
                <div className={classes["resume__text__main"]}>
                  Product Designer
                </div>
                <div className={classes["resume__text__main--1"]}>
                  August 2021 - current
                </div>
              </div>

              <div className={classes["resume__text__sub"]}>
                Idea generation, concept development, testing and implementation
                of her physical service and bringing it to life on a web page.
              </div>
            </div>
            <div className={classes["resume__container__sub--2"]}>
              <div className={classes["resume__heading__main"]}>Skills</div>
              <div className={classes["resume__grid__container__sub"]}>
                <div>
                  <div className={classes["resume__heading__sub"]}>Design</div>
                  <div className="col-start-1 col-end-3  sm:col-span-1">
                    <div className={classes["resume__list"]}>
                      Product Design
                    </div>
                    <div className={classes["resume__list"]}>UI/UX Design</div>
                    <div className={classes["resume__list"]}>Wire Framing</div>
                    <div className={classes["resume__list"]}>Prototyping</div>
                    <div className={classes["resume__list"]}>
                      Web development
                    </div>
                  </div>
                </div>
                <div className="col-end-7 col-span-2 sm:col-span-1">
                  <div className={classes["resume__heading__sub"]}>
                    Development
                  </div>
                  <div>
                    <div className={classes["resume__list"]}>HTML5/CSS</div>
                    <div className={classes["resume__list"]}>Sass</div>
                    <div className={classes["resume__list"]}>
                      Tailwind & Bootstrap
                    </div>
                    <div className={classes["resume__list"]}>Javascript</div>
                    <div className={classes["resume__list"]}>Reactjs</div>
                  </div>
                </div>
                <div className="col-start-1  mt-8 sm:mt-0 sm:col-span-1">
                  <div className={classes["resume__heading__sub"]}>Tools</div>

                  <div className={classes["resume__list"]}>Figma</div>
                  <div className={classes["resume__list"]}>Canva</div>
                  <div className={classes["resume__list"]}>Slack</div>
                  <div className={classes["resume__list"]}>Jira</div>
                  <div className={classes["resume__list"]}>Trello</div>
                  <div className={classes["resume__list"]}>Google sheets</div>
                  <div className={classes["resume__list"]}>Github</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["resume__text"]}>Experience</div>
    </section>
  );
};
export default ResumeSection;
