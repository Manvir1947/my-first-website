import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import DotsButton from "./buttonNab/dotsButton";
import SliderShowingSvg from "./buttonNab/sliderShowingSvg";
const MyInfoMain = () => {
  const [isDotsButton, setDotsButton] = useState(false);

  const isDotsButtonVariant = {
    hidden: { opacity: 0, y: 100, scale: 0 },
    show: { opacity: 1, y: 0, scale: 1 },
  };
  const imageVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  const textVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  console.log(isDotsButton);
  return (
    <>
      <div id="top-of-webpage"></div>
      <motion.div
        id="about-me"
        className="profile-img-title-div-container section-gap"
      >
        <div className="profile-img-title-div section-box-shadow">
          <div className="profile-pic-div">
            <motion.img
              initial={"hidden"}
              animate={"visible"}
              variants={imageVariant}
              className="profile-pic"
              src={require("./my-image-removebg-preview.png")}
              alt=""
            />
          </div>
          <div className="profile-img-title-divider"></div>
          <motion.h1
            initial={"hidden"}
            animate={"visible"}
            variants={textVariant}
            className="main-intro-title"
          >
            <span className="name">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter

                    .typeString("Hello!")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("I am Manvir,")
                    .start();
                }}
              />
            </span>
            A front end developer, passionate for creating beautiful and
            functional websites and applications ,and dedicated to building
            user-friendly interfaces with seamless user experience.I hope to
            showcase some of my best work and give you a glimpse of what I can
            bring to your next project.
          </motion.h1>
        </div>
      </motion.div>
      <div className="touch-nav-div">
        <div className="touch-nav-relative">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ ease: "linear", duration: 5, repeat: Infinity }}
            onClick={() => {
              setDotsButton((prev) => !prev);
            }}
            className="dots-button-div"
          >
            <DotsButton />
          </motion.div>
          <motion.div
            variants={isDotsButtonVariant}
            initial={"hidden"}
            animate={isDotsButton ? "show" : "hidden"}
            className="touch-nav-options-div flex-column"
          >
            <ul className="touch-nav-ul flex-column">
              <li>
                <a className="touch-nav-anchor-element" href="#about-me">
                  About Me
                </a>
              </li>
              <li>
                <a className="touch-nav-anchor-element" href="#work-section">
                  My Work
                </a>
              </li>
              <li>
                <a className="touch-nav-anchor-element" href="#contact-section">
                  Contact
                </a>
              </li>
            </ul>
            <SliderShowingSvg />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default MyInfoMain;
