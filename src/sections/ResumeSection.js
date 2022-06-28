import Layout from "../layout/Layout";

const ResumeSection = () => {
  return (
    <div className="mt-24 ">
      <div className="flex relative mb-[3.75rem]">
        <div>
          <img src="./img/design4.png" alt="" />
        </div>
        <div className="font-hero font-bold text-[2.75rem] absolute top-[60%] left-[5%] text-primary">
          Resumé
        </div>
      </div>

      <Layout>
        <div className="font-body text-primary">
          <div className="grid grid-cols-3">
            <div className="col-span-1">
              <div className=" text-[2rem] font-medium mb-10">
                Work Exprience
              </div>
              <div className=" text-2xl font-medium mb-8">
                Jand2Gidi Logistics
              </div>
              <div className="flex justify-between items-baseline mb-6">
                <div className="text-xl font-medium ">Product Designer</div>
                <div className="text-sm font-medium text-secondary-100">
                  August 2021 - current
                </div>
              </div>

              <div className="text-base leading-8 text-secondary-100">
                Idea generation, concept development, testing and implementation
                of her physical service and bringing it to life on a web page.
              </div>
            </div>
            <div className=" col-span-2 ml-[9.375rem]  ">
              <div className=" text-[2rem] font-medium mb-10">Skills</div>
              <div className=" grid grid-cols-3">
                <div>
                  <div className=" text-2xl font-medium mb-8">Design</div>
                  <div>
                    <div className="mb-4 text-xl text-secondary-100 font-medium">
                      Product Design
                    </div>
                    <div className="mb-4 text-xl text-secondary-100 font-medium">
                      UI/UX Design
                    </div>
                    <div className="mb-4 text-xl text-secondary-100 font-medium">
                      Wire Framing
                    </div>
                    <div className="mb-4 text-xl text-secondary-100 font-medium">
                      Prototyping
                    </div>
                    <div className=" text-xl text-secondary-100 font-medium">
                      Web development
                    </div>
                  </div>
                </div>
                <div className="ml-2">
                  <div className=" text-2xl font-medium mb-8">Development</div>
                  <div>
                    <div className="mb-4 text-xl text-secondary-100 font-medium">
                      HTML5/CSS
                    </div>
                    <div className="mb-4 text-xl text-secondary-100 font-medium">
                      Sass
                    </div>
                    <div className="mb-4 text-xl text-secondary-100 font-medium">
                      Tailwind & Bootstrap
                    </div>
                    <div className="mb-4 text-xl text-secondary-100 font-medium">
                      Javascript
                    </div>
                    <div className=" text-xl text-secondary-100 font-medium">
                      Reactjs
                    </div>
                  </div>
                </div>
                <div className="ml-10">
                  <div className=" text-2xl font-medium mb-8">Tools</div>

                  <div className="mb-4 text-xl text-secondary-100 font-medium">
                    Figma
                  </div>
                  <div className="mb-4 text-xl text-secondary-100 font-medium">
                    Canva
                  </div>
                  <div className="mb-4 text-xl text-secondary-100 font-medium">
                    Slack
                  </div>
                  <div className="mb-4 text-xl text-secondary-100 font-medium">
                    Jira
                  </div>
                  <div className="mb-4 text-xl text-secondary-100 font-medium">
                    Trello
                  </div>
                  <div className="mb-4 text-xl text-secondary-100 font-medium">
                    Google sheets
                  </div>
                  <div className="mb-4 text-xl text-secondary-100 font-medium">
                    Github
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default ResumeSection;
