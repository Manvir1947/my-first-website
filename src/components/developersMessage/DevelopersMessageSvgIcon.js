import React from "react";
import { motion } from "framer-motion";

const DevelopersMessageSvgIcon = () => {
  return (
    <motion.div
      className="developers-message-svg-main-div"
      initial={{ translateX: "-50%", opacity: 0 }}
      animate={{
        y: [30, -30, 30],
        opacity: [1, 0, 1],
      }}
      transition={{
        ease: "linear",
        repeat: Infinity,
        duration: 3,
      }}
    >
      <a href="#contact-section" className="developers-message-svg-caption">
        Contact Me ?
      </a>
      <svg
        fill="#000000"
        viewBox="0 0 24 24"
        id="triangle-ruler-pencil"
        dataName="Line Color"
        xmlns="http://www.w3.org/2000/svg"
        className="developers-message-svg-icon"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            id="secondary"
            d="M14.69,3.29l-1.4,1.4a1,1,0,0,0,0,1.4L18.2,11H21V8.2L16.09,3.29A1,1,0,0,0,14.69,3.29Z"
            style={{
              fill: "none",
              stroke: "#2ca9bc",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
            }}
          ></path>
          <polygon
            id="primary"
            points="19 21 3 21 3 5 19 21"
            style={{
              fill: "none",
              stroke: "#00CCFF",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
            }}
          ></polygon>
        </g>
      </svg>
    </motion.div>
  );
};

export default DevelopersMessageSvgIcon;
