import React from "react";

const ArticleText = ({ text, bold }) => {
  return (
    <div className="article-text__wrapper">
      <div
        className={`article-text__container ${
          bold ? "article-text__container--bold" : ""
        }`}
      >
        <p className="article-text__content">{text}</p>
      </div>
    </div>
  );
};

export default ArticleText;
