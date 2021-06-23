import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <span className="footer__dev">Developed by</span>
        <Link
          className="footer__link"
          to={{ pathname: "https://github.com/AH10Coding" }}
          target="_blank"
          rel="noreferrer"
        >
          AH10Coding
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
