import React, { useRef, useState, useEffect } from "react";
import InfoSvg from "./infoSvg";
import projectInfoData from "./projectInfoData";
import ProjectInfoPage from "./projectInfoPage";
import OverFlowBackgroundHidden from "../overFlowBackgroundHidden";
import {
  useScroll,
  useMotionValueEvent,
  useTransform,
  motion,
} from "framer-motion";

const MainWork = () => {
  const [yPosition, setYposition] = useState(0);

  const [isAnyInfoPopUp, setIsAnyPopUp] = useState(false);
  const [isInfoPopUp, setInfoPopUp] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const elementRef = useRef();
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start end", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setYposition(latest);
  });

  const projectElements = projectInfoData.map((project, index) => (
    <motion.div
      initial={{ scale: 0.2, y: 50 }}
      whileInView={{ y: 0, scale: 1, transition: { duration: 0.5 } }}
      className="project-image-div stacked"
      viewport={{ once: true }}
    >
      {isInfoPopUp[index] && (
        <ProjectInfoPage
          data={project}
          setInfoPopUp={setInfoPopUp}
          index={index}
          isTrue={isInfoPopUp[index]}
          setIsAnyPopUp={setIsAnyPopUp}
        />
      )}

      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="project-only-img-div"
      >
        <img
          className="project-image"
          src={require(`./projectsImages/${project.img}`)}
          alt="Project Image"
        />
      </a>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, delay: 0.2 },
        }}
        className="project-img-content-div"
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [1.1, 1, 1.1, 0.8, 1.1, 1, 1.1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          onClick={(event) => {
            event.preventDefault();
            setIsAnyPopUp(true);
            setInfoPopUp((optionObj) => ({ ...optionObj, [index]: true }));
          }}
        >
          <InfoSvg />
        </motion.div>
        <h2 className="project-img-description-line">{project.title}</h2>
      </motion.div>
    </motion.div>
  ));

  return (
    <section
      id="work-section"
      className="section-gap main-workPortfolio-section"
    >
      <h1 className="section-heading projects-heading">Projects</h1>

      <div className="project-all-images-div first-div-position-fixed ">
        {projectElements}
      </div>
    </section>
  );
};

export default MainWork;
