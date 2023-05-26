import React from "react";
import { Link } from "react-router-dom";

const BlogMain = () => {
  return (
    <section className="blog-main-page">
      <div className="matrix-img-div">
        <img
          className="blog-matrix-img"
          src={require("./matrix.png")}
          alt="Blue Pill or Red Pill"
        />

        <Link to={"/"}>
          <h1 className="matrix-options go-back-option">Go Back!</h1>
        </Link>

        <Link to={"blogEnter"}>
          <h1 className="matrix-options enter-to-truth-option">Enter?</h1>
        </Link>

        <h1></h1>
      </div>
    </section>
  );
};

export default BlogMain;
