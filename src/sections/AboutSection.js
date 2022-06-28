import Layout from "../layout/Layout";

const AboutSection = () => {
  return (
    <Layout>
      <div className="flex ">
        <div className=" font-hero font-bold text-[2.75rem] text-primary">
          About me
        </div>
        <div className="absolute top-[-7%] left-[12%]">
          <img src="./img/design3.png" />
        </div>
      </div>
      <div className="grid grid-cols-2 my-10 gap-x-[6.625rem]">
        <div className=" font-body text-base font-normal text-primary flex flex-col align-center justify-center">
          <div className="leading-8 mt-8 ">
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
          <div className="mt-11 w-[11.375rem] text-center bg-primary px-4 py-3 rounded-md">
            <a href="/" className="mt-11 no-underline text-white uppercase  ">
              Download cv
            </a>
          </div>
        </div>
        <div className="rounded-md overflow-hidden ">
          <img
            src="./img/img-1.png"
            alt="Profile Picture"
            className="w-[100%]"
          />
        </div>
      </div>
    </Layout>
  );
};

export default AboutSection;
