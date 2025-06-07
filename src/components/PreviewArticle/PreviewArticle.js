import React from "react";
import { connect } from "react-redux";
import { RES_PER_PAGE } from "../../config";

import "./PreviewArticle.css";

import PreviewArticleCard from "../PreviewArticleCard/PreviewArticleCard";

const PreviewArticle = ({ latestNews, page, totalResults }) => {
  const numPages = Math.ceil(totalResults / RES_PER_PAGE);

  const articles = latestNews.map((article, i, arr) => {
    const lastEl = arr.length - 1;

    if (lastEl !== 0 && i === lastEl && lastEl % 12 === 0 && page !== numPages)
      return null;
    return <PreviewArticleCard key={article.title} article={article} />;
  });

  return <div className="preview-container">{articles}</div>;
};

const mapStateToProps = ({ page, articles }) => {
  return {
    page,
    totalResults: articles.totalResults,
  };
};

export default connect(mapStateToProps)(PreviewArticle);
