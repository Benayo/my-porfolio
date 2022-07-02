import React from "react";

import Layout from "./layout/Layout";
import HeaderSection from "./sections/HeaderSection";
import AboutSection from "./sections/AboutSection";
import ResumeSection from "./sections/ResumeSection";
import WorkSection from "./sections/WorkSection";
import FooterSection from "./sections/FooterSection";

function App() {
  return (
    <Layout>
      <HeaderSection />

      <AboutSection />

      <ResumeSection />

      <WorkSection />

      <FooterSection />
    </Layout>
  );
}

export default App;
