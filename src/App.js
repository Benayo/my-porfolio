import React from "react";
import { useState } from "react";

import Layout from "./layout/Layout";
import Nav from "./components/Nav";
import HeaderSection from "./sections/HeaderSection";
import AboutSection from "./sections/AboutSection";
import ResumeSection from "./sections/ResumeSection";
import WorkSection from "./sections/WorkSection";
import FooterSection from "./sections/FooterSection";
import SideBar from "./components/SideBar";

function App() {
  const [showSideBar, setShowSideBar] = useState(false);

  const toogleSideBarHandler = () => {
    setShowSideBar(true);
  };

  const toogleCloseSideBarHandler = () => {
    setShowSideBar(false);
  };

  if (showSideBar) {
    return <SideBar onCancel={toogleCloseSideBarHandler} />;
  }

  return (
    <div>
      <Layout>
        <Nav onClick={toogleSideBarHandler} />

        <HeaderSection />

        <AboutSection />

        <ResumeSection />

        <WorkSection />

        <FooterSection />
      </Layout>
    </div>
  );
}

export default App;
