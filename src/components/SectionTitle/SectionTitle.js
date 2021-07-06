import React from "react";

import "./SectionTitle.css";

const SectionTitle = ({ title, padTopShort }) => {
  return (
    <h1
      className={`section-title ${
        padTopShort ? "section-title--pad-top-short" : ""
      }`}
    >
      {title}
    </h1>
  );
};

export default SectionTitle;
