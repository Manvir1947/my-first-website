import React, { useRef, useState } from "react";
import MyInfoMain from "./components/aboutMe/myInfoMain";
import MainSkills from "./components/aboutMe/skills/mainSkills";
import WorkPortfolio from "./components/work/mainWork";
import MyJorneyMain from "./components/myJorney/myJorneyMain";
import MainDevelopersMessage from "./components/developersMessage/mainDevelopersMessage";
import ContactFormMain from "./components/contactform/contactFormMain";
import FooterMain from "./components/footer/footerMain";

const Main = () => {
  return (
    <>
      <main className="main-container">
        <MyInfoMain />
        <MainSkills />
        <MyJorneyMain />
        <WorkPortfolio />
        <MainDevelopersMessage />
        <ContactFormMain />
      </main>
      <FooterMain />
    </>
  );
};

export default Main;
