import React from "react";
import "./Overlay.css";

const Overlay = ({ show, handleClick, modal }) => {
  return (
    <div
      className={`overlay ${show ? "overlay--active" : ""} ${
        modal ? "overlay--modal" : ""
      }`}
      onClick={handleClick}
    ></div>
  );
};

export default Overlay;
