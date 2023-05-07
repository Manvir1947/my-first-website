import React from "react";

const DotsButton = () => {
  return (
    <svg
      className="nav-dots-svg nav-touch-svg"
      fill="#000000"
      viewBox="0 0 192 192"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M0 0h192v192H0z" style={{ fill: "none" }}></path>
        <circle cx="28.97" cy="96" r="12.97"></circle>
        <circle cx="62.49" cy="62.49" r="12.97"></circle>
        <circle cx="96" cy="28.97" r="12.97"></circle>
        <circle cx="62.49" cy="129.51" r="12.97"></circle>
        <circle cx="96" cy="96" r="12.97"></circle>
        <circle cx="129.51" cy="62.49" r="12.97"></circle>
        <circle cx="96" cy="163.03" r="12.97"></circle>
        <circle cx="129.51" cy="129.51" r="12.97"></circle>
        <circle cx="163.03" cy="96" r="12.97"></circle>
      </g>
    </svg>
  );
};

export default DotsButton;
