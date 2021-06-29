import React from "react";
import { connect } from "react-redux";
import { RES_PER_PAGE } from "../../config";

import "./PreviewArticle.css";

import PreviewArticleCard from "../PreviewArticleCard/PreviewArticleCard";

// import PreviewInfo from "../PreviewInfo/PreviewInfo";
// import PreviewActions from "../PreviewActions/PreviewActions";

// import replacement from "../../img/replacement.jpg";

const PreviewArticle = ({ latestNews, page, totalResults }) => {
  const numPages = Math.ceil(totalResults / RES_PER_PAGE);

  const articles = latestNews.map((article, i, arr) => {
    const lastEl = arr.length - 1;

    if (i === lastEl && lastEl % 12 === 0 && page !== numPages) return null;
    return <PreviewArticleCard key={article.title} article={article} />;
  });

  return <div className="preview-container">{articles}</div>;
  // return (
  //   <div className="preview-container">
  //     <article className="preview">
  //       <div className="preview__image-container">
  //         <div className="preview__image-wrapper">
  //           <img
  //             className="preview__image"
  //             src={replacement}
  //             alt="replacement"
  //           />
  //         </div>
  //       </div>
  //       <div className="preview__content">
  //         <div className="preview__content-wrapper">
  //           <h2 className="preview__content-title">
  //             Oscar ratings fall at an all time low. See all the reactions from
  //             celebrities and fans around the globe
  //           </h2>
  //         </div>
  //         <div className="preview__content-wrapper-2">
  //           <PreviewActions
  //             // bookmarked={bookmarks.some((bookmark) =>
  //             //   bookmark.title.includes(article.title)
  //             // )}
  //             // handleBookmarkClick={handleBookmarkClick}
  //             // handleShareClick={handleShareClick}
  //             url="http://www.example.com"
  //           />
  //           <PreviewInfo source="Deadline" timeAgo="2 hours ago" />
  //         </div>
  //       </div>
  //     </article>
  //   </div>
  // );
};

const mapStateToProps = ({ page, articles }) => {
  return {
    page,
    totalResults: articles.totalResults,
  };
};

export default connect(mapStateToProps)(PreviewArticle);
