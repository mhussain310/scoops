import React from "react";
import { removeChar } from "../../helper";
import ArticleText from "../ArticleText/ArticleText";
import Button from "../Button/Button";

import "./ArticleBody.css";

const ArticleBody = ({ article }) => {
  return (
    <div className="article-body">
      <ArticleText text={article.description} bold />
      <ArticleText text={removeChar(article.content)} />
      <Button url={article.url} text="Continue reading..." />
    </div>
  );
};

export default ArticleBody;
