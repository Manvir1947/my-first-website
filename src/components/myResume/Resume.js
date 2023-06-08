import React from "react";
import "./resume.css";
import pdfSvg from "./pdfSvg";

const Resume = () => {
  return (
    <section className="resume-section">
      <div className="resume-img-div-container">
        <img
          className="resume-img"
          src={require("./1.png")}
          alt="Resume-Image"
        />
        <img
          className="resume-img"
          src={require("./2.png")}
          alt="Resume-Image"
        />
      </div>
      <img
        className="resume-profile-img"
        src={require("./my-photo.jpg")}
        alt="Resume-Image"
      />
      <a
        className="download-pdf-link"
        download
        href={require("./ManvirSinghResume.pdf")}
      >
        {pdfSvg}
        <h1 className="download-pdf-txt">Download Resume</h1>
      </a>
    </section>
  );
};

export default Resume;
