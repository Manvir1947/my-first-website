import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import arrowSvg from "./arrowSvg";
import blogIntroductionData from "./blogIntroductionData";
import AllBlogsListPage from "./allBlogsListPage";

const AllCategoryBlog = () => {
  return (
    <div>
      <h1 className="main-tag-line">
        Unveiling the marvels of science and technology, where innovation meets
        inspiration and curiosity knows no bounds.
      </h1>
      <div className="arrow-svg-allblogslistpage">
        {/* All block page */}
        {
          <AllBlogsListPage
            listedBlogPage={false}
            data={blogIntroductionData}
          />
        }
        <Link to={"allblogspage"} className="explore-more-link">
          <p className="explore-more-link-txt">Explore more</p>
          <motion.div
            initial={{ x: 5 }}
            animate={{ x: [20, 5, 20] }}
            transition={{ duration: 2, type: "linear", repeat: "Infinity" }}
          >
            {arrowSvg}
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default AllCategoryBlog;
