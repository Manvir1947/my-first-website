import React, { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router";
import NavBar from "./components/navBar";
import { motion } from "framer-motion";
import Wrapper from "./wrapper";

const Root = () => {
  const [navShow, setNavShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const scrollFunction = () => {
    if (window.scrollY > lastScroll) {
      setNavShow(false);
    } else {
      setNavShow(true);
    }
    setLastScroll(window.scrollY);
  };
  useEffect(() => {
    if (typeof window != "undefined") {
      window.addEventListener("scroll", scrollFunction);
    }
    return () => window.removeEventListener("scroll", scrollFunction);
  }, [lastScroll]);

  const Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 10, transition: { duration: 1, delay: 10 } },
  };
  return (
    <div>
      <motion.div
        initial={{ y: -10 }}
        animate={navShow ? "open" : "close"}
        variants={Variants}
      >
        <NavBar />
      </motion.div>

      <Outlet />
    </div>
  );
};

export default Root;
