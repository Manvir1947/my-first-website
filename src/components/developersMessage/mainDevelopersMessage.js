import React from "react";
import DevelopersMessageSvgIcon from "./DevelopersMessageSvgIcon";

const MainDevelopersMessage = () => {
  return (
    <section className="developers-message-main-section section-border-radius section-gap">
      <h1 className="projects-heading section-heading ">Message</h1>
      <div className="developers-message-main-div  ">
        <h1 className="developers-message-txt">
          If you are looking for a talented front-end developer who can bring
          your vision to life, I would love to discuss how I can contribute to
          your projects. Please feel free to browse my portfolio and contact me
          to learn more.
        </h1>
        <img
          src={require("./profileWithoutBackground.png")}
          className="developers-message-img"
          alt="developers img"
        />
      </div>
      <DevelopersMessageSvgIcon />
    </section>
  );
};

export default MainDevelopersMessage;
