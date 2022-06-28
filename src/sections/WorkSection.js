import Layout from "../layout/Layout";

const WorkSection = () => {
  return (
    <div className=" mt-[7.5rem] pt-[1.875rem]  pb-[3.75rem] font-body bg-secondary-200 ">
      <Layout>
        <div className="relative flex justify-center">
          <div className="">
            <img src="./img/design5.png" alt="" />
          </div>
          <div className=" font-hero font-bold text-[2.75rem] text-primary absolute top-[50%]">
            Works
          </div>
        </div>
        <div className="grid grid-cols-3 mt-[5rem] gap-x-[6.5625rem]">
          <div>
            <div className="mb-[2rem]">
              <img src="./img/img-work-1.png" alt="Food App Project" />
            </div>
            <div className="text-sm leading-7 text-secondary-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a
              mauris arcu integer venenatis nunc. Sit vulputate nulla neque
              cursus vitae.
            </div>
          </div>
          <div>
            <div className="mb-[2rem]">
              <img src="./img/img-work-2.png" alt="Food App Project" />
            </div>
            <div className="text-sm leading-7 text-secondary-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a
              mauris arcu integer venenatis nunc. Sit vulputate nulla neque
              cursus vitae.
            </div>
          </div>
          <div>
            <div className="mb-[2rem]">
              <img src="./img/img-work-3.png" alt="Food App Project" />
            </div>
            <div className="text-sm leading-7 text-secondary-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a
              mauris arcu integer venenatis nunc. Sit vulputate nulla neque
              cursus vitae.
            </div>
          </div>
        </div>

        <div className=" mt-[3.75rem] w-fit text-center bg-primary px-4 py-3 rounded-md m-auto">
          <a href="/" className="mt-11 no-underline text-white uppercase  ">
            @BENAYO ON BEHANCE
          </a>
        </div>
      </Layout>
    </div>
  );
};
export default WorkSection;
