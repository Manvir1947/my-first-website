import React from "react";
import footerSvgTitle from "./footerSvgAndLinks";

const FooterLinks = () => {
  const footerLinksElements = footerSvgTitle.map((icon) => (
    <li className="footer-links-li ">
      <a className="footer-links-anchor" target="_blank" href={icon.href}>
        {icon.svg}
      </a>
    </li>
  ));

  return (
    <div className="footer-social-media-links-section flex-column">
      <div className="footer-links-divider"></div>
      <ul className="footer-links-ul flex-row">{footerLinksElements}</ul>
      <div className="footer-links-divider"></div>
      <h3 className="rights-reserved-line">
        Manvir Singh © All Rights Reserved.
      </h3>
    </div>
  );
};

export default FooterLinks;
