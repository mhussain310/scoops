import React from "react";

import "./Spinner.css";

const Spinner = ({ message = "" }) => {
  return (
    <div
      className={`spinner ${!message ? "spinner--default" : "spinner--nav"}`}
    >
      <div className="pulse-container">
        <div className="pulse-bubble pulse-bubble-1"></div>
        <div className="pulse-bubble pulse-bubble-2"></div>
        <div className="pulse-bubble pulse-bubble-3"></div>
      </div>
      <div className="spinner__text">{message}</div>
    </div>
  );
};

export default Spinner;
