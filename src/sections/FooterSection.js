import classes from "./FooterSection.module.css";

const FooterSection = () => {
  return (
    <section id="contact" className={classes["main__container"]}>
      <div className={classes.container}>
        <div className={classes.label}>
          <div className={classes["label__main"]}>Contact me</div>
          <div className={classes["label__sub"]}>
            Want To Get In Touch Or Need Me On Your Team?
          </div>
        </div>
        <div className={classes["grid__container"]}>
          <form
            target="_blank"
            action="https:formsubmit.co/benjaminodeleye1@gmail.com"
            method="POST"
          >
            <input type="text" name="text" required placeholder="Full Name" />

            <input
              type="email"
              name="text"
              required
              placeholder="Email Address"
            />
            <input type="numeric" name="numeric" placeholder="Phone Number" />

            <textarea
              name="message"
              id="textarea"
              cols="30"
              rows="10"
              placeholder="Enter your message"
            ></textarea>
            <button type="submit" className={classes.btn}>
              Submit
            </button>
          </form>

          <div>
            <div className={classes["contact__link__container"]}>
              <a
                href="mailto:Benjaminodeleye1@gmail.com?subject=feedback"
                className={classes["contact__link"]}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={classes["contact__link__svg"]}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className={classes["contact__link__text"]}>
                  benjaminodeleye1@gmail.com
                </span>
              </a>

              <a
                href="tel:+234-818-343-7774"
                className={classes["contact__link"]}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={classes["contact__link__svg"]}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span className={classes["contact__link__text"]}>
                  +234-818-343-7774
                </span>
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.github.com/benayo"
                className={classes["contact__link"]}
              >
                <img
                  src="./img/git.png"
                  className={classes["contact__link__svg"]}
                  alt=""
                />

                <span className={classes["contact__link__text"]}>
                  github.com/benayo
                </span>
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/odeleye-benjamin-4815a225"
                className={classes["contact__link"]}
              >
                <img
                  src="./img/linkedin.png"
                  alt=""
                  className={classes["contact__link__svg"]}
                />

                <span className={classes["contact__link__text"]}>
                  linkedIn.com/in/odeleye-benjamin-4815a225
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="py-0 sm:py-12 lg:py-24 flex  justify-center items-center">
          <span className="w-0 xl:w-[37%] h-[0.0625rem] bg-white mr-10"></span>
          <div>
            <span className="text-white font-body text-xs inline">
              © Copyright2022. All rights reserved
            </span>
          </div>
          <span className="w-0 xl:w-[37%] h-[0.0625rem] bg-white ml-10"></span>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
