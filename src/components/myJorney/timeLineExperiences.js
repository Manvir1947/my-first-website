import React from "react";
import ArrowSvg from "./arrowSvg";

const TimeLineExperiences = ({ svgRotation, flexLeft, year, description }) => {
  return !flexLeft ? (
    <div className="timeline-svg-description-div-right">
      <ArrowSvg svgRotation={svgRotation} />
      <div className="timeline-year-description-div">
        <h1 className="timeline-year">{year}</h1>
        <div className="timeline-description">{description}</div>
      </div>
    </div>
  ) : (
    <div className="timeline-svg-description-div-left">
      <div className="timeline-year-description-div year-description-border-radius-left">
        <h1 className="timeline-year content-left">{year}</h1>
        <div className="timeline-description-left content-left">
          {description}
        </div>
      </div>
      <ArrowSvg svgRotation={svgRotation} />
    </div>
  );
};

export default TimeLineExperiences;
