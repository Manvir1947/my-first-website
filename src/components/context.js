import React, { createContext, useState, useEffect } from "react";

const Context = createContext();
function AppContextProvider(props) {
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
    <Context.Provider value={{ sectionSlideVariant, screenSize }}>
      {props.children}
    </Context.Provider>
  );
}

export { AppContextProvider, Context };
