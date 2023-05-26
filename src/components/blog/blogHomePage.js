import React from "react";

import { Link, Outlet } from "react-router-dom";
import Wrapper from "../../wrapper";
const BlogHomePage = () => {
  return (
    <section className="blog-home-page-section">
      <Wrapper>
        <div className="blog-nav-bar">
          <Link to={"all"}>
            <p className="blog-nav-option">All</p>
          </Link>
          <Link to={"philosophy"}>
            <p className="blog-nav-option">Philosophy</p>
          </Link>
          <Link to={"technology"}>
            <p className="blog-nav-option">Technology</p>
          </Link>
        </div>
        <Outlet />
      </Wrapper>
    </section>
  );
};

export default BlogHomePage;
