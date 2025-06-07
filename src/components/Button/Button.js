import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const Button = ({ url, text }) => {
  return (
    <div className="button-wrapper">
      <Link
        to={{ pathname: url }}
        target="_blank"
        rel="noreferrer"
        className="button-link"
      >
        <span className="button-text">{text}</span>
      </Link>
    </div>
  );
};

export default Button;
