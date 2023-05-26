import React from "react";
import { Link } from "react-router-dom";

const SingleBlogBlockEle = ({ data }) => {
  return (
    <div className="each-blog-info-block">
      <Link className="blog-main-page-links" to={`/${data.id}`}>
        <img src={data.iconImg} alt="" className="blog-home-page-blog-images" />
      </Link>
      <div className="blog-info-block-txt-div">
        <Link className="blog-main-page-links" to={`/${data.id}`}>
          <h1 className="blog-title">{data.title}</h1>
        </Link>
        <h2 className="blog-date">{data.date}</h2>
        <p className="introducing-lines-blog">{data.smallDescription}</p>
        <Link to={`/${data.id}`} className="read-more-link">
          Read full article
        </Link>
      </div>
    </div>
  );
};

export default SingleBlogBlockEle;
