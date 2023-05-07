import React, { useContext } from "react";
import { motion } from "framer-motion";
import LogoSlider from "./logoSlider ";
import Typewriter from "typewriter-effect";
import ArrowSvg from "./arrowSvg";
import SkillsList from "./skillsApi";
import { Context } from "../../context";

const MainSkills = () => {
  const { sectionSlideVariant } = useContext(Context);

  const ulParentVariant = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3,
      },
    },
    hidden: {
      y: 100,
      opacity: 0,
    },
  };
  const ulChildrenVariant = {
    visible: {
      y: 0,
      opacity: 1,
    },
    hidden: {
      y: 100,
      opacity: 0,
    },
  };

  const skillElements = SkillsList.map((ele) => {
    return (
      <motion.li variants={ulChildrenVariant} className="skill">
        {ele.svg}
        <p>{ele.txt}</p>
      </motion.li>
    );
  });
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: true }}
      variants={sectionSlideVariant}
      className="main-skills-section section-box-shadow section-gap"
    >
      <h2 className="section-heading  skills-heading-margin">Skills</h2>

      <div className="slider-main-div">
        <div className="slider-container animate">
          <LogoSlider />
          <LogoSlider />
        </div>
      </div>
      <div className="skills-list-div">
        <motion.ul
          className="skills-list-ul section-box-shadow"
          initial={"hidden"}
          whileInView={"visible"}
          variants={ulParentVariant}
          viewport={{ once: true }}
        >
          {skillElements}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default MainSkills;
