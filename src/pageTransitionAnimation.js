import React from "react";
import { motion } from "framer-motion";

const PageTransitionAnimation = ({ children }) => {
  return (
    <motion.div
      key="component-a"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "linear" }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransitionAnimation;
