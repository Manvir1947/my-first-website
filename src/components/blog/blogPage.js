import { useParams, useLocation } from "react-router";
import "./blogCss.css";
import blogIntroductionData from "./blogIntroductionData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BlogListSliderNav from "./blogListSliderNav";
import { useState, useEffect } from "react";

const BlogPage = () => {
  const [isListSlider, setListSlider] = useState(false);
  const { id } = useParams();
  const blog = blogIntroductionData.filter((blog) => blog.id == id);
  const BlogElement = [blog[0].blog];

  const listSliderVarient = {
    hidden: {
      width: "0px",
      opacity: 0,
      // display: "none",
      transition: { duration: 0.1 },
    },
    visible: {
      // display: "block",
      width: "40%",
      opacity: 1,
      transition: { duration: 0.1 },
    },
  };
  const svgVarient = {
    hidden: { rotate: -90 },
    visible: {
      rotate: 0,
    },
  };

  return (
    <section className="blog-section">
      <div className="blog-svg-and-index-page">
        {isListSlider && (
          <motion.div
            initial={"hidden"}
            animate={isListSlider ? "visible" : "hidden"}
            variants={listSliderVarient}
            className="blog-list-slider-div"
          >
            {<BlogListSliderNav />}
          </motion.div>
        )}
        <div
          onClick={() => {
            setListSlider((prev) => !prev);
          }}
          className="blog-index-svg-txt-div"
        >
          <motion.svg
            viewBox="0 0 24 24"
            initial={"hidden"}
            animate={isListSlider ? "visible" : "hidden"}
            variants={svgVarient}
            fill="none"
            className="blog-index-svg"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M11.2497 3.89863V12.9186C11.2497 13.2486 11.0897 13.5486 10.8197 13.7386L3.60969 18.7886C3.01969 19.1986 2.17969 18.8786 2.04969 18.1686C1.89969 17.3086 2.09969 16.2986 2.69969 15.2086L5.81969 9.59864L8.75969 4.30863C8.98969 3.89863 9.23969 3.53863 9.49969 3.22863C10.0997 2.52863 11.2497 2.97863 11.2497 3.89863Z"
                fill="#751E1E"
              ></path>{" "}
              <path
                d="M20.39 18.7886L13.18 13.7386C12.91 13.5486 12.75 13.2486 12.75 12.9186V3.89863C12.75 2.97863 13.9 2.52863 14.5 3.22863C14.76 3.53863 15.01 3.89863 15.24 4.30863L18.18 9.59864L21.3 15.2086C21.9 16.2986 22.1 17.3086 21.95 18.1686C21.82 18.8786 20.98 19.1986 20.39 18.7886Z"
                fill="#751E1E"
              ></path>{" "}
              <path
                d="M5.26018 19.14L11.4102 15.04C11.7402 14.82 12.2802 14.82 12.6102 15.04L18.7602 19.14C20.3902 20.23 20.1202 21.12 18.1602 21.12H5.85018C3.90018 21.11 3.63018 20.22 5.26018 19.14Z"
                fill="#751E1E"
              ></path>{" "}
            </g>
          </motion.svg>
          <h2 className="blog-list-nav-option">Blog List</h2>
        </div>
      </div>
      <div className="blog-page-wrapper">
        <Link to={"/blog/blogEnter"} className="blog-go-back-link">
          <svg
            fill=" 	#808080"
            viewBox="-8.5 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="blog--go-back-svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>back</title>{" "}
              <path d="M15.281 7.188v17.594l-15.281-8.781z"></path>{" "}
            </g>
          </svg>
          <p className="blog--go-back-txt">Blog home page</p>
        </Link>
        <div className="main-blog-content-wrapper">{BlogElement}</div>
        <footer className="blog-footer-div">
          <p className="blog-footer-text">
            &copy; 2023 Your Blog. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default BlogPage;
