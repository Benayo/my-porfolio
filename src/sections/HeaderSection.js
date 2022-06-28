import Layout from "../layout/Layout";
import Nav from "../components/Nav";

import Hero from "../components/Hero";


const Header = () => {
  return (
    <Layout>
      <Nav />
      <Hero />
      <div className="text-[12.5rem] font-logo  font-bold opacity-[3%] absolute left-[-18%] bottom-[-10%] ">
        Hello There.
      </div>
    </Layout>
  );
};

export default Header;
