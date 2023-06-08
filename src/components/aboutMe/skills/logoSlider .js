import React from "react";

const LogoSlider = () => {
  const logosList = [
    "https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png",
    "https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png",
    "https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png",
  ];
  const logoDivs = logosList.map((ele, index) => {
    return (
      <div key={index} className="logo-img-div">
        <img className="logo-slider-img" src={ele} alt="Logo Image" />
      </div>
    );
  });
  return <div className="flex-slider w-50">{logoDivs}</div>;
};

export default LogoSlider;
