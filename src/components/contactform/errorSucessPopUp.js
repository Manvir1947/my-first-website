import React from "react";

const ErrorSucessPopUp = ({ svg, message }) => {
  return (
    <div className="error-page-main-div">
      {svg}
      <h1 className="error-page-text">{message}</h1>
    </div>
  );
};

export default ErrorSucessPopUp;
