import React from "react";

import "./ArticleImage.css";

import replacement from "../../img/replacement.jpg";

const ArticleImage = ({
  children,
  src,
  alt,
  borderRadius,
  halfWidth,
  fullHeight,
  pad,
  overflowVis,
}) => {
  return (
    <div
      className={`article-image__container ${
        borderRadius ? "article-image__container--border-rad" : ""
      } ${halfWidth ? "article-image__container--width-50" : ""} ${
        pad ? "article-image__container--pad" : ""
      } ${overflowVis ? "article-image__container--overflow-vis" : ""}`}
    >
      <div
        className={`article-image__wrapper ${
          fullHeight ? "article-image__wrapper--full-height" : ""
        }`}
      >
        <img
          className="article-image__img"
          src={src ? src : replacement}
          alt={alt}
        />
        {children}
      </div>
    </div>
  );
};

export default ArticleImage;
