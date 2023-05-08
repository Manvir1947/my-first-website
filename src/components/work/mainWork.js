import React, { useRef, useState } from "react";
import InfoSvg from "./infoSvg";
import {
  useScroll,
  useMotionValueEvent,
  useTransform,
  motion,
} from "framer-motion";

const MainWork = () => {
  const projectsPathList = [
    {
      path: "./projectsImages/productVillaProjectPng.png",
      title:
        "A responsive e commerce platform, provides variety of products to buy, add to cart and placing order options.",
      href: "https://e-commerce-manvir.netlify.app/",
    },
    {
      path: "./projectsImages/watchProductProject.png",
      title:
        "Introducing Smart Watch Website project: The ultimate solution for marketing, advertising and palcing orders through single platform.",
      href: "#",
    },
    {
      path: "./projectsImages/quizzicalPng.png",
      title:
        " Test your knowledge and have fun with our quiz website! Enable to see your score, quiz results, including the questions you got right and wrong, once you have completed the quiz.",
      href: "#",
    },
    {
      path: "./projectsImages/movieFightProject.png",
      title:
        "Find your next favorite movie with our comparison website! Compare reviews, ratings, and more to discover the perfect movie for you.",
      href: "#",
    },
  ];
  const [yPosition, setYposition] = useState(0);
  const elementRef = useRef();
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start end", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setYposition(latest);
  });
  const projectElements = projectsPathList.map((project) => (
    <motion.a
      initial={{ scale: 0.2, y: 50 }}
      whileInView={{ y: 0, scale: 1, transition: { duration: 0.5 } }}
      className="project-image-div stacked"
      viewport={{ once: true }}
      href={project.href}
      rel="noopener noreferrer"
    >
      <div className="project-only-img-div">
        <img
          className="project-image"
          src={require(`${project.path}`)}
          alt="Project Image"
        />
      </div>
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
        <InfoSvg />
        <h2 className="project-img-description-line">{project.title}</h2>
      </motion.div>
    </motion.a>
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
