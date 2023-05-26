import React from "react";
import categoriesCustomHook from "../categoriesCustomHook";
import SingleCategoryPage from "../singleCategoryPage";

const AllBlogsListPage = ({ listedBlogPage, title }) => {
  const [isIndexOrAllListedPage] = categoriesCustomHook(listedBlogPage);

  return (
    <SingleCategoryPage
      listedBlogPage={listedBlogPage}
      categoryTitle={title}
      allBlogBlockElements={isIndexOrAllListedPage(listedBlogPage)}
    />
  );
};

export default AllBlogsListPage;
