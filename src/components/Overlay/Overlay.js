import React from "react";
import "./Overlay.css";

const Overlay = ({ menuClicked, closeMenu }) => {
  return (
    <div
      className={`overlay ${menuClicked ? "overlay--active" : ""}`}
      onClick={closeMenu}
    ></div>
  );
};

export default Overlay;
