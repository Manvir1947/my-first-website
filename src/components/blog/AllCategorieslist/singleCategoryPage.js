import React from "react";

const SingleCategoryPage = ({
  allBlogBlockElements,
  listedBlogPage,
  categoryTitle,
}) => {
  return (
    <div className="main-content-container ">
      {listedBlogPage && (
        <div className="all-listed-blogs-title-div">
          <h1 className="all-listed-blogs-title">{categoryTitle}</h1>
        </div>
      )}

      <div className="blog-home-page">
        {listedBlogPage == false && (
          <div className="each-blog-info-block introductory-blog-info-block">
            <div className="introductory-blog-info-block-div-lines introductory-blog-info-block-div-line-1"></div>
            <h1 className="introductory-blog-info-block-title">
              Unlocking the wonders of science, technology and much more, one
              blog at a time
            </h1>
            <div className="introductory-blog-info-block-div-lines introductory-blog-info-block-div-line-2"></div>
          </div>
        )}
        {/* All the Blog Blocs are going to be here */}
        {allBlogBlockElements}
      </div>
    </div>
  );
};
SingleCategoryPage.defaultProps = {
  listedBlogPage: false,
};
export default SingleCategoryPage;
