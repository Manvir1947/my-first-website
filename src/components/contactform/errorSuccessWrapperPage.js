import React, { useState } from "react";
import { motion } from "framer-motion";
import crossSvg from "../work/crossSvg";

const ErrorSuccessWrapperPage = ({ children, isTrue, setIsTrue }) => {
  const { bool, setBool } = isTrue;
  const infoPopVariant = {
    hidden: {
      opacity: 0,
      scale: 0,
      x: "-50%",
      y: "-50%",
    },
    active: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200 },
    },
  };
  return (
    <section className="project-info-page-hero">
      <motion.div
        initial={"hidden"}
        animate={bool ? "active" : "hidden"}
        variants={infoPopVariant}
        className="project-info-page-main-content-div"
      >
        <div onClick={() => setBool(false)}>
          <div>{crossSvg}</div>
        </div>
        {children}
      </motion.div>
    </section>
  );
};

export default ErrorSuccessWrapperPage;
