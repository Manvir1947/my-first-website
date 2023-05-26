import data from "../blogIntroductionData";
import SingleBlogBlockEle from "./singleBlogBlockEle";

const categoriesCustomHook = (listedBlogPage) => {
  const singleBlockFomer = (data) => {
    return <SingleBlogBlockEle data={data} />;
  };

  const isIndexOrAllListedPage = () => {
    const allBlogBlockElements = data.map((blogIntro, index) => {
      if (!listedBlogPage && index < 1) {
        return singleBlockFomer(blogIntro);
      } else if (!listedBlogPage && index > 1) {
        return true;
      } else {
        return singleBlockFomer(blogIntro);
      }
    });

    return allBlogBlockElements;
  };

  return [isIndexOrAllListedPage];
};

export default categoriesCustomHook;
