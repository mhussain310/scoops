import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { connect } from "react-redux";
import { toggleBookmark, toggleShareModal } from "../../actions";
import { removeSource, removeTLD, timeAgo } from "../../helper.js";
import PreviewInfo from "../PreviewInfo/PreviewInfo";
import PreviewActions from "../PreviewActions/PreviewActions";

import replacement from "../../img/replacement.jpg";

const PreviewArticleCard = ({
  article,
  topArticles,
  bookmarks,
  toggleBookmark,
  toggleShareModal,
}) => {
  const titleRef = useRef();

  const handleBookmarkClick = () => {
    const bookmarkedTitle = titleRef.current.textContent;
    const bookmarkedArticle = topArticles.find((article) =>
      article.title.includes(bookmarkedTitle)
    );

    !bookmarks.includes(bookmarkedArticle)
      ? toggleBookmark(bookmarkedArticle, true)
      : toggleBookmark(bookmarkedArticle);
  };

  const handleShareClick = () => {
    const title = titleRef.current.textContent;
    const targetArticle = topArticles.find((article) =>
      article.title.includes(title)
    );
    toggleShareModal(true, targetArticle);
  };

  const { ref, inView, entry } = useInView({
    root: null,
    threshold: 0,
    // rootMargin: "0px 0px -20px 0px",
  });

  useEffect(() => {
    if (inView) entry.target.classList.add("in-view");
  }, [inView, entry]);

  return (
    <article ref={ref} className="preview fadeup">
      <div className="preview__image-container">
        <div className="preview__image-wrapper">
          <img
            className="preview__image"
            src={article.urlToImage ? article.urlToImage : replacement}
            alt={article.title}
          />
        </div>
      </div>
      <div className="preview__content">
        <div className="preview__content-wrapper">
          <h2 ref={titleRef} className="preview__content-title">
            {removeSource(article.title)}
          </h2>
        </div>
        <div className="preview__content-wrapper-2">
          <PreviewActions
            bookmarked={bookmarks.some((bookmark) =>
              bookmark.title.includes(article.title)
            )}
            handleBookmarkClick={handleBookmarkClick}
            handleShareClick={handleShareClick}
            url={article.url}
          />
          <PreviewInfo
            source={removeTLD(article.source.name)}
            timeAgo={timeAgo(article.publishedAt)}
          />
        </div>
      </div>
    </article>
  );
};

const mapStateToProps = (state) => {
  return { topArticles: state.articles.articles, bookmarks: state.bookmarks };
};

export default connect(mapStateToProps, {
  toggleBookmark,
  toggleShareModal,
})(PreviewArticleCard);
