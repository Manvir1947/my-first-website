import React from "react";

const CollegeElement = ({
  collegeName,
  programName,
  studyDuration,
  cityName,
}) => {
  return (
    <>
      <div className="college-div">
        <div className="college-info">
          <p className="college-name heading-3">
            {collegeName} <span className="college-city">{cityName}</span>
          </p>
          <p className="course-name">{programName}</p>
        </div>
        <p className="year-date">{studyDuration}</p>
      </div>
    </>
  );
};

export default CollegeElement;
