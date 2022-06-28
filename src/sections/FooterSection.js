import Layout from "../layout/Layout";

const FooterSection = () => {
  return (
    <div className="bg-black font-body mb-20">
      <Layout>
        <div className="pt-20 mb-8  ">
          <div className="text-white  font-hero font-bold text-[2.75rem] mb-4">
            Contact me
          </div>
          <div className="text-white  font-hero font-regular text-xl">
            Want To Get In Touch Or Need Me On Your Team?
          </div>
        </div>
        <div className="grid grid-cols-2 ">
          <fom className="pr-[6.75rem]">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full  h-11 rounded-md border-none pl-4 mb-6 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full  h-11 rounded-md border-none pl-4 mb-6 outline-none"
            />
            <input
              type="numeric"
              placeholder="Phone Number"
              className="w-full  h-11 rounded-md border-none pl-4 mb-6 outline-none appearance-none"
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Enter your message"
              className="w-full rounded-md border-none pl-4  font-body pt-4 outline-none"
            ></textarea>

            <div className=" text-center cursor-pointer mt-8  bg-[#828282] py-3 rounded-md">
              <a href="/" className="  no-underline text-white  ">
                Submit
              </a>
            </div>
          </fom>
          <div className="bg-blue-600"> icons</div>
        </div>
        <div>
          <div></div>
          <div> © Copyright2022. All rights reserved</div>
          <div></div>
        </div>
      </Layout>
    </div>
  );
};

export default FooterSection;
