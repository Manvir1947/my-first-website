import React, { useContext } from "react";
import TimeLineExperiences from "./timeLineExperiences";
// import { motion } from "framer-motion";
import { Context } from "../context";
import { motion } from "framer-motion";
import JorneyData from "./myJourneyData";

const MyJorneyMain = () => {
  const { sectionSlideVariant } = useContext(Context);

  const parentVariant = {
    updownMotion: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 2,
      },
    },
  };

  const variant = {
    updownMotion: {
      y: [0, 10, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const timelineElements = JorneyData.map((data, index) => {
    let i = index + 1;
    let IsflexLeft = false;
    let svgSideClass = "svgRightSide";
    if (i > 3) {
      IsflexLeft = true;
      svgSideClass = "svgleftSide";
    }
    return (
      <motion.div variants={variant} className={`timeline-element-${i}`}>
        <TimeLineExperiences
          flexLeft={IsflexLeft}
          svgRotation={svgSideClass}
          year={data.year}
          description={data.description}
        />
      </motion.div>
    );
  });

  return (
    <motion.div
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: true }}
      variants={sectionSlideVariant}
      className="my-journey-main-section section-box-shadow section-gap"
    >
      <h1 className="my-journey-title section-heading ">My Journey</h1>
      <div className="my-journey-main-svg-content-container">
        <div className="dotted-png-div">
          <motion.img
            initial={{ x: -50 }}
            animate={{
              x: [0, -5, 0],
              y: [0, 5, 0],
              transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="dotted-png"
            src={require("./dottedPng.png")}
            alt=""
          />
          <motion.img
            animate={{
              x: [0, -10, 0],
              y: [0, 10, 0],
              transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="web-dev-svg"
            src="https://www.clipartmax.com/png/full/112-1127495_%C2%A0-%D0%BF%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B0-%D1%81%D0%B0%D0%B9%D1%82%D0%BE%D0%B2.png"
            alt=""
          />

          <motion.img
            animate={{
              x: [0, 10, -10, 0],
              y: [0, -10, 0],

              transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="zero-svg"
            src="https://pngimg.com/uploads/number0/number0_PNG19152.png"
            alt=""
          />
          {/* JOURNEY ELEMENTS RIGHT*/}
          <motion.div animate={"updownMotion"} variants={parentVariant}>
            {timelineElements}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default MyJorneyMain;
