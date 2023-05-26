import React, { useState } from "react";
import data from "../../blogIntroductionData";
import SingleCategoryPage from "../singleCategoryPage";
import SingleBlogBlockEle from "../singleBlogBlockEle";
import { Link } from "react-router-dom";
const PhilosophyIndexPage = ({ listedBlogPage, genere, title }) => {
  const makeSingleElementFromObj = (objects) => {
    const singleElementsArray = objects.map((singleObjData) => (
      <SingleBlogBlockEle key={singleObjData.id} data={singleObjData} />
    ));

    return singleElementsArray;
  };

  const filteredCategories = () => {
    const specificGenereBlocks = data.filter((obj) => {
      return obj.genere == genere;
    });

    return makeSingleElementFromObj(specificGenereBlocks);
  };

  const filteredElements = filteredCategories();

  return (
    <SingleCategoryPage
      listedBlogPage={listedBlogPage}
      allBlogBlockElements={filteredElements}
      categoryTitle={title}
    />
  );
};

export default PhilosophyIndexPage;
