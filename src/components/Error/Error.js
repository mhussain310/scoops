import React from "react";

import "./Error.css";

const Error = ({ message }) => {
  return (
    <div className="error">
      <svg
        className="error__icon"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <g fill="none">
          <path
            d="M9.172 16.172a4 4 0 0 1 5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
      <div className="error__msg">{message}</div>
    </div>
  );
};

export default Error;
