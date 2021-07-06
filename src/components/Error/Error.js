import React from "react";

import "./Error.css";

const ICON_STYLE = {
  error: (
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
  ),
  bookmark: (
    <svg
      className="error__icon-bookmark"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
    >
      <g>
        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
      </g>
    </svg>
  ),
};

const Error = ({ message, icon }) => {
  const checkIconStyle = ICON_STYLE[icon] ? ICON_STYLE[icon] : ICON_STYLE.error;

  return (
    <div className="error">
      {checkIconStyle}
      <div className="error__msg">{message}</div>
    </div>
  );
};

export default Error;
