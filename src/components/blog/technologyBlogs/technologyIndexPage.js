import React from "react";
import PhilosophyIndexPage from "../AllCategorieslist/philosophyPages/philosophyCategoryBlog";

const TechnologyParentEle = ({ listedBlogPage, genere, title }) => {
  return (
    <div>
      <PhilosophyIndexPage
        listedBlogPage={listedBlogPage}
        genere={genere}
        title={title}
      />
    </div>
  );
};

export default TechnologyParentEle;
