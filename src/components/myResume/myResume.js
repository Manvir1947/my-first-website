import React from "react";
import "./style.css";
import NavBarResume from "./navBarResume";
import CollegeElement from "./collegeElement";
import WorkExperienceElement from "./workExperienceElement";

function MyResume() {
  const rabbaJobResponsibilities = [
    "Deliver excellent customer service that ensures ongoing sales and high levels of customer satisfaction",
    "Lorem ipsum dolor sipisicing elit. Fuga eligendi iusto officiis magni quae laboriosam.",
    "consectetur adipisicing elit. Fuga eligendi iusto offici",
    "lor sit, amet consectetur adipisicing elit. Fuga eligendi iusto offici",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga",
    "Lorem ipsum dolordipisicing elit Fuga eligendi iusto officiis magni quae laboriosam.",
    "Fuga eligendi iusto officiis magni quae laboriosam.",
  ];
  const officeAdministratorRes = [
    "Lorem ipsum dolor sipisicing elit. Fuga eligendi iusto officiis magni quae laboriosam.",
    "consectetur adipisicing elit. Fuga eligendi iusto offici",
    "lor sit, amet consectetur adipisicing elit. Fuga eligendi iusto offici",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Fuga",
  ];
  const publicIntern = [
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    "Dicta, ipsum voluptatum neque delectus blanditiis eius",
    "provident repellendus perspiciatis excepturi quam doloremque",
    "voluptates asperiores. Sit, dolorem!",
  ];
  const indianExperienceRes = [
    "Lorem ipsum dolor sipisicing elit. Fuga eligendi iusto officiis magni quae laboriosam.",
    "consectetur adipisicing elit.",
    "Fuga eligendi iusto offici, lor sit",
    "amet consectetur adipisicing elit. Fuga eligendi iusto offici",
  ];

  return (
    <div className="resume--body">
      <NavBarResume />
      <main className="main-doc">
        {/* <!-- least 10 p  (total) within .main-section --> */}
        {/* <!-- 5 li elements that are descendants of .main-section --> */}
        <section
          id="adress-contact"
          className="main-section main-title-contact"
        >
          <div className="main-img-div">
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              className="profile-img"
              alt="Profile Picture"
            />
          </div>
          <div className="main-title-contacts-div">
            <header>
              <h2 className="main-title">Manvir Singh</h2>
            </header>
            <ul className="adress-contact" id="adress-contact">
              <li className="address">
                <p>Scarborough, NIJ404</p>
              </li>
              <li className="address">
                <p>
                  <span className="special-l">|</span>
                </p>
              </li>
              <li className="phone-no">
                <p>676-005-000</p>
              </li>
              <li className="phone-no">
                <p>
                  <span className="special-l">|</span>
                </p>
              </li>
              <li className="email">
                <p>Loremh@gmail.com</p>
              </li>
            </ul>
          </div>
        </section>

        <section id="objective" className="main-section objective">
          <header className="svg-title">
            <svg
              className="svg-img"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M6 11c0 2.206 1.794 4 4 4 1.761 0 3.242-1.151 3.775-2.734l2.224-1.291.001.025c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6c1.084 0 2.098.292 2.975.794l-2.21 1.283c-.248-.048-.503-.077-.765-.077-2.206 0-4 1.794-4 4zm4-2c-1.105 0-2 .896-2 2s.895 2 2 2 2-.896 2-2l-.002-.015 3.36-1.95c.976-.565 2.704-.336 3.711.159l4.931-2.863-3.158-1.569.169-3.632-4.945 2.87c-.07 1.121-.734 2.736-1.705 3.301l-3.383 1.964c-.29-.163-.621-.265-.978-.265zm9.957 2.858c-.301-.483-1.066-1.061-1.962-.947l.005.089c0 4.411-3.589 8-8 8s-8-3.589-8-8 3.589-8 8-8c1.475 0 2.853.408 4.041 1.107.334-.586.428-1.544.146-2.18-1.275-.589-2.69-.927-4.187-.927-5.523 0-10 4.477-10 10 0 2.958 1.291 5.607 3.332 7.438l-1.307 4.052c-.123.383.35.679.64.399l3.002-2.888c1.312.634 2.778.999 4.333.999 1.556 0 3.023-.362 4.335-.996l3 2.886c.29.28.763-.017.64-.399l-1.306-4.05c1.839-1.652 3.065-3.973 3.288-6.583z" />
            </svg>
            <h2>Objective</h2>
          </header>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
            quibusdam suscipit sint. Culpa quis fugit voluptas eius voluptatum
            deserunt vitae esse harum? Quidem perferendis dolorum quis neque
            molestias explicabo repellendus voluptate deserunt recusandae rem
            eius aspernatur illum, nostrum labore id repudiandae. Perferendis
            possimus atque id animi ad, architecto rem voluptatum.
          </p>
        </section>
        <div id="skills" className="divider"></div>
        <section className="main-section skills">
          <header className="svg-title">
            <svg
              className="svg-img"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M15.996 24h-12.605s.734-3.931.633-5.686c-.041-.724-.161-1.474-.54-2.104-.645-1-2.636-3.72-2.475-7.43.224-5.209 4.693-8.779 10.126-8.779 5.098 0 8.507 3.001 9.858 7.483.328 1.079.311 1.541-.151 2.607l-.006.013 1.751 2.142c.26.381.413.791.413 1.239 0 .547-.233 1.045-.61 1.399-.368.345-.767.452-1.248.642 0 0-.576 2.592-.873 3.291-.7 1.643-1.97 1.659-2.97 1.849-.394.083-.49.133-.681.681-.208.591-.363 1.435-.622 2.653zm-4.842-22c-4.285.048-7.74 2.548-8.121 6.488-.192 1.991.463 3.986 1.516 5.705.611 1 1.305 1.592 1.464 3.875.091 1.313-.05 2.636-.241 3.932h8.604c.141-.645.35-1.485.687-2.057.449-.766 1.097-1.099 1.926-1.254.838-.148 1.238-.059 1.489-.785.212-.579.612-2.221.831-3.902 1.203-.335.612-.161 1.671-.559-.206-.234-1.918-2.314-2.045-2.6-.336-.759-.046-1.19.225-1.913.086-.251.06-.357-.009-.613-1.049-3.949-3.891-6.317-7.997-6.317zm.063 14h-.447c-.117 0-.231-.039-.308-.109l-.594-.391h2.25l-.594.391c-.076.069-.189.109-.307.109zm.922-1h-2.279c-.138 0-.25-.111-.25-.25 0-.138.112-.25.25-.25h2.279c.138 0 .25.112.25.25s-.111.25-.25.25zm-1.322-.986h-1.414c-.013-2.57-1.403-2.878-1.403-4.647 0-1.695 1.327-2.852 3-2.852h.02c1.663.009 2.98 1.163 2.98 2.852 0 1.769-1.391 2.077-1.404 4.647h-1.414c0-2.735 1.318-3.614 1.318-4.651 0-.856-.694-1.333-1.5-1.348h-.019c-.798.022-1.481.499-1.481 1.348 0 1.037 1.317 1.916 1.317 4.651zm4.053-3.628l1.349.612-.414.911-1.298-.589c.151-.3.276-.607.363-.934zm-7.739 0c.086.332.208.63.359.935l-1.296.588-.413-.911 1.35-.612zm9.369-.886h-1.501c.01-.335-.021-.672-.093-1h1.594v1zm-9.499 0h-1.501v-1h1.593c-.071.327-.101.663-.092.998v.002zm7.02-2.714l1.243-.881.579.815-1.252.889c-.147-.291-.336-.566-.57-.823zm-6.043 0c-.23.251-.418.525-.569.822l-1.251-.888.578-.815 1.242.881zm4.435-1.046l.663-1.345.896.442-.663 1.345c-.278-.183-.581-.332-.896-.442zm-2.826-.001c-.316.11-.618.258-.897.442l-.663-1.344.897-.442.663 1.344zm1.913-.208c-.334-.039-.654-.041-1-.002v-1.529h1v1.531z" />
            </svg>
            <h2>Professional Skills</h2>
          </header>
          <ul className="skills-list padding-left">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit.jkckj</li>
            <li>Lorem ipsum dolor sit amet consectetur</li>
            <li>Lorem ipsum dolor sit</li>
            <li>Lorem ipsum dolor sit amet consectetur</li>
          </ul>
        </section>

        <div id="education" className="divider"></div>
        {/* <!-- ==================EDUCATION============ --> */}
        <section className="main-section education">
          <header className="svg-title">
            <svg
              className="svg-img"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M24 21h-3l1-3h1l1 3zm-12.976-4.543l8.976-4.575v6.118c-1.007 2.041-5.607 3-8.5 3-3.175 0-7.389-.994-8.5-3v-6.614l8.024 5.071zm11.976.543h-1v-7.26l-10.923 5.568-11.077-7 12-5.308 11 6.231v7.769z" />
            </svg>
            <h2>Education</h2>
          </header>
          <CollegeElement
            collegeName={"Canadore College"}
            programName={"Public Relations"}
            studyDuration={"Jan 2020 - Aug 2020"}
            cityName={"Mississauga"}
          />
          <CollegeElement
            collegeName={"lorem College"}
            programName={"Business Management"}
            studyDuration={"Jan 2010 - Dec 2016"}
            cityName={"Mississauga"}
          />
          <CollegeElement
            collegeName={" Panjab University"}
            programName={"Bachelor of lorem"}
            studyDuration={"Aug 2015 - May 2018"}
            cityName={"India"}
          />
        </section>

        <div id="work-experience" className="divider"></div>
        {/* <!-- ======================================JOB EXPERIENCES --> */}

        <section className="main-section work-experience">
          <header className="svg-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="svg-img"
              viewBox="0 0 24 24"
            >
              <path d="M0 7v15h24v-15h-24zm22 13h-20v-6h6v-2h-6v-3h20v3h-6v2h6v6zm-13-15.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6c-1.104 0-2 .896-2 2v2h2v-1.5zm5 6.5h-4v4h4v-4z" />
            </svg>
            <h2>WORK EXPERIENCE</h2>
          </header>

          <div className="work-info">
            {/* <!-- FIRST JOB --> */}
            <WorkExperienceElement
              jobTitle={"Customer Service Representative"}
              companyName={"lorem Foods l Bloor Str. West, Toronto, ON Canada"}
              workDuration={"Oct 2020 - Present"}
              jobResponsibilities={rabbaJobResponsibilities}
            />
            {/* <!-- SECOND JOB --> */}
            <WorkExperienceElement
              jobTitle={"Office Administrator - Internship"}
              companyName={"lorem Truck Repair l Mississauga, ON Canada"}
              workDuration={"Oct 2020 - Present"}
              jobResponsibilities={officeAdministratorRes}
            />
            {/* <!-- THIRD JOB --> */}
            <WorkExperienceElement
              jobTitle={" Public Relations Associate - Internship"}
              companyName={"lorem Company l Lorem, ON Canada"}
              workDuration={"Oct 2020 - Present"}
              jobResponsibilities={publicIntern}
            />
            {/* <!-- FORTH JOB --> */}
            <WorkExperienceElement
              jobTitle={"Assistant Marketing Officer"}
              companyName={"Lorem Institute l Lorem, India"}
              workDuration={"Oct 2020 - Present"}
              jobResponsibilities={indianExperienceRes}
            />
          </div>
        </section>

        <div id="volunteer-experience" className="divider"></div>

        {/* <!----===================VOLUNTEERING EXPERIENCE========= --> */}

        <section className="main-section volunteer-experience">
          <header className="svg-title">
            <svg
              className="svg-img"
              clipRule="evenodd"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m18.39 8.428c-.835.186-2.113.51-2.845.866-1.089.529-1.874 1.358-1.874 2.76 0 4.089 3.073 7.956 3.073 8.293 0 .131-.137.203-.227.113 0-.001-.001-.002-.001-.002-.673-.69-1.997-2.747-2.606-3.738v-.001c-.404-.653-.951-1.448-1.903-1.448h-.003c-.961 0-1.509.791-1.914 1.449-2.274 3.698-2.707 3.738-2.607 3.738-.094.095-.228.015-.228-.111 0-.285 3.073-4.285 3.073-8.293 0-1.336-.697-2.139-1.744-2.678-.833-.428-1.923-.669-2.956-.944-.009-.002-.017-.004-.026-.006-.138-.032-.138-.272.011-.299 1.098.25 3.412.923 6.387.923 2.94 0 5.295-.669 6.389-.923.145.029.152.265.001.301m-6.392-4.928c.858 0 1.552.7 1.552 1.562s-.694 1.563-1.552 1.563c-.856 0-1.55-.701-1.55-1.563s.694-1.562 1.55-1.562m6.367 3.125c-.427 0-2.112.584-4.474.821.699-.561 1.157-1.414 1.157-2.384 0-1.691-1.366-3.062-3.05-3.062-1.681 0-3.049 1.371-3.049 3.062 0 .97.458 1.824 1.158 2.385-2.361-.238-4.018-.822-4.472-.822-.897 0-1.635.738-1.635 1.653 0 .765.536 1.437 1.256 1.608 1.805.478 3.573.755 3.573 2.168 0 3.145-2.041 6.072-2.852 7.462-.002.003-.004.006-.005.009-.142.251-.216.536-.216.822 0 .916.737 1.653 1.635 1.653.437 0 .853-.174 1.165-.494.722-.741 2.157-2.937 2.811-3.999.12-.195.238-.383.371-.537.082-.096.151-.199.267-.199.113 0 .176.105.256.198.133.154.252.343.373.539.652 1.06 2.086 3.255 2.809 3.997.31.319.724.495 1.167.495.896 0 1.634-.737 1.634-1.653 0-.282-.07-.562-.226-.837-.002-.002-.003-.005-.005-.008-.83-1.426-2.843-4.3-2.843-7.448 0-1.516 2.067-1.772 3.567-2.167.728-.173 1.263-.846 1.263-1.609 0-.915-.739-1.653-1.635-1.653" />
            </svg>
            <h2>VOLUNTEERING EXPERIENCE</h2>
          </header>

          <div className="work-info">
            {/* <!-- FIRST VOLUNTEERING JOB --> */}
            <WorkExperienceElement
              companyName={"Lorem Centre | Sault Ste. Marie, ON Canada"}
              workDuration={"2019"}
              jobResponsibilities={[
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                "Qui, necessitatibus quasi modi placeat facere sequi",
                "molestiae vitae ex dolorum officia omnis eum enim voluptas",
                "corrupti distinctio ducimus ratione perspiciatis atque?",
              ]}
            />

            {/* <!-- SECOND VOLUNTEERING JOB --> */}
            <WorkExperienceElement
              companyName={"Lorem | Sault Ste. Marie, ON Canada"}
              workDuration={"2019"}
              jobResponsibilities={[
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id",
                "atque ducimus ratione totam. Aperiam cumque voluptatem fuga",
                "placeat ad dolores incidunt culpa quasi sequi ut consectetur",
                "adipisci voluptatibus totam beatae architecto iusto ex",
                "optio quibusdam.",
              ]}
            />
          </div>
        </section>
        {/* <!-- ====================================FOOTER --> */}
        <div id="reference" className="divider"></div>
        <section className="main-section" className="reference">
          <header className="svg-title">
            <svg
              className="svg-img"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M18.722 17.289c.841-1.39 1.278-2.942 1.278-4.289v-2h-4v-6h6v5.391c0 2.936-1.176 5.333-3.278 6.898zm-13.993-.011c.836-1.386 1.271-2.934 1.271-4.278v-2h-4v-6h6v5.391c0 2.93-1.184 5.322-3.271 6.887zm-3.729 3.722c5.252-1.039 8.983-4.905 8.983-10.609v-7.391h-9.983v10h4c0 2.211-1.562 4.932-3.995 5.849l.995 2.151zm14 0c5.252-1.039 9-4.905 9-10.609v-7.391h-9.983v10h3.983c0 2.211-1.563 4.932-3.996 5.849l.996 2.151z" />
            </svg>
            <h2>REFERENCE</h2>
          </header>
          <div>
            <p className="heading-3">Abcd loremsdds</p>
            <p>Financial Services Representative</p>
            <p>Loremig@abc.com</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MyResume;
