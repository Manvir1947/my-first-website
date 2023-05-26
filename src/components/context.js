import React, { createContext, useState, useEffect } from "react";
import blogIntroductionData from "./blog/blogIntroductionData";

const Context = createContext();

function AppContextProvider(props) {
  const [blogSliderlist, setBlogSliderlist] = useState([
    ...blogIntroductionData,
  ]);
  const setViewedBlog = (id) => {
    setBlogSliderlist((prev) => {
      const filteredArray = prev.filter((obj) => obj.id !== id);
      const singleObject = prev.filter((obj) => obj.id == id);

      const newArray = [...singleObject, ...filteredArray];

      return newArray;
    });
  };
  const [screenSize, setScreenSize] = useState({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  });
  const windowResize = () => {
    setScreenSize({
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", windowResize);
    return () => window.removeEventListener("resize", windowResize);
  }, [screenSize]);

  console.log(screenSize);

  const sectionSlideVariant = {
    hidden: { x: 100, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <Context.Provider
      value={{ sectionSlideVariant, screenSize, blogSliderlist, setViewedBlog }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { AppContextProvider, Context };
