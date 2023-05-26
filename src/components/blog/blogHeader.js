import React from "react";

const BlogHeader = ({ img, title, date }) => {
  return (
    <section className=" blog-header">
      <img className="blog-main-img" src={img} alt="main-photo" />
      <div>
        <h1 className="blog-main-title">{title}</h1>
        <h2 className="blog-main-date">{date}</h2>
      </div>
    </section>
  );
};

export default BlogHeader;
