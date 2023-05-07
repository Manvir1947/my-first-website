import React from "react";

function NavBarResume() {
  return (
    <nav className="navbar">
      <div className="fix">
        <header>
          <h1 className="nav-title">Résumé</h1>
        </header>
        <ul className="nav-list md-font">
          <li>
            <a href="#adress-contact" className="nav-link">
              Manvir Singh
            </a>
          </li>
          <li>
            <a href="#objective" className="nav-link">
              Objective
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link">
              Professional Skills
            </a>
          </li>
          <li>
            <a href="#education" className="nav-link">
              Education
            </a>
          </li>
          <li>
            <a href="#work-experience" className="nav-link">
              Work Experience
            </a>
          </li>
          <li>
            <a href="#volunteer-experience" className="nav-link">
              Volunteer Experience
            </a>
          </li>
          <li>
            <a href="#reference" className="nav-link">
              Reference
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBarResume;
