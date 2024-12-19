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
          to={{ pathname: "https://github.com/mhussain310" }}
          target="_blank"
          rel="noreferrer"
        >
          mhussain310
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
