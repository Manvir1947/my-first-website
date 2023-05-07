import React from "react";

const WorkExperienceElement = ({
  jobTitle,
  companyName,
  workDuration,
  jobResponsibilities,
}) => {
  console.log(jobResponsibilities);
  const responsibiliesArray = jobResponsibilities.map((responsibility) => (
    <li class="job-responsibility">
      <p>{responsibility}</p>
    </li>
  ));
  return (
    <div class="job-section">
      <div class="job-title-div">
        <div class="job-addr-title">
          {jobTitle && (
            <p class="description-job">Customer Service Representative</p>
          )}
          <span class="heading-3">
            lorem Foods l Bloor Str. West, Toronto, ON Canada
          </span>
        </div>
        <p>Oct 2020 - Present</p>
      </div>
      <ul class="job-resposibilites padding-left">{responsibiliesArray}</ul>
    </div>
  );
};

export default WorkExperienceElement;
