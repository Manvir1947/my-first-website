import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="nav-bar--nav">
      <ul className="nav-bar--ul">
        <Link className="nav-bar-links" to={"/"}>
          <li className="nav-bar--li">Home</li>
        </Link>

        <Link className="nav-bar-links" to={"/blog"}>
          <li className="nav-bar--li nav-bar-blog-link flex-row">
            <span>Blog</span>
            <svg
              className="nav-bar-blog-svg"
              fill="white"
              viewBox="0 0 96 96"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title></title>{" "}
                <g>
                  {" "}
                  <path d="M12,72A12,12,0,1,0,24,84,12.0119,12.0119,0,0,0,12,72Z"></path>{" "}
                  <path d="M12,36a6,6,0,0,0,0,12A36.0393,36.0393,0,0,1,48,84a6,6,0,0,0,12,0A48.0512,48.0512,0,0,0,12,36Z"></path>{" "}
                  <path d="M12,0a6,6,0,0,0,0,12A72.0788,72.0788,0,0,1,84,84a6,6,0,0,0,12,0A84.0981,84.0981,0,0,0,12,0Z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </li>
        </Link>
        <Link className="nav-bar-links" to={"/resume"}>
          <li className="nav-bar--li">Resume</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
