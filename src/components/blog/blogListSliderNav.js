import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context";

const BlogListSliderNav = () => {
  const { blogSliderlist, setViewedBlog } = useContext(Context);
  const liElements = blogSliderlist.map((obj) => {
    return (
      <Link
        onClick={() => {
          setViewedBlog(obj.id);
        }}
        className="nav-blog-list-li-Link"
        to={`/${obj.id}`}
      >
        <li className="nav-blog-list-li">
          <img
            className="nav-blog-list-img"
            src={obj.iconImg}
            alt="blog icons"
          />
          <h1 className="nav-blog-list-title">{obj.title}</h1>
        </li>
      </Link>
    );
  });
  return (
    <div className="blog-list-slider-nav">
      <h1 className="blog-list-slider-nav-title">Blogs</h1>
      <ul className="blog-list-slider-nav-ul">{liElements}</ul>
    </div>
  );
};

export default BlogListSliderNav;
