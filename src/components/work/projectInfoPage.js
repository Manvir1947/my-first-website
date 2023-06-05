import React from "react";
import crossSvg from "./crossSvg";
import { motion } from "framer-motion";

const ProjectInfoPage = ({
  data,
  setInfoPopUp,
  index,
  isTrue,
  setIsAnyPopUp,
}) => {
  const featuresList = data.features.map((ele) => {
    return <li className="project-info-page-features-li">{ele}</li>;
  });
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
        animate={isTrue ? "active" : "hidden"}
        variants={infoPopVariant}
        className="project-info-page-main-content-div"
      >
        <div
          onClick={() => {
            setInfoPopUp((optionObj) => ({ ...optionObj, [index]: false }));
            setIsAnyPopUp(false);
          }}
        >
          {crossSvg}
        </div>
        <div className="project-info-page-title-img-div">
          <img
            className="project-info-page-img"
            src={require(`./projectsImages/${data.img}`)}
            alt="Project Image"
          />
          <h1 className="project-info-page-title"> {data.infoTitle}</h1>
        </div>
        <ul className="project-info-page-features-ul">{featuresList}</ul>
      </motion.div>
    </section>
  );
};

export default ProjectInfoPage;
