import React, { useEffect, useRef } from "react";
import { Link, withRouter } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { connect } from "react-redux";
import { toggleBookmark, toggleShareModal } from "../../actions";
import { timeAgo, titleToAlphaNumeric } from "../../helper.js";
import ArticleImage from "../ArticleImage/ArticleImage";
import PreviewActions from "../PreviewActions/PreviewActions";
import PreviewInfo from "../PreviewInfo/PreviewInfo";

const PreviewArticleCard = withRouter(
  ({
    history,
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
        <ArticleImage
          src={article.urlToImage}
          alt={article.title}
          borderRadius
          pad
          overflowVis
        />
        <div className="preview__content-wrapper">
          <Link
            to={{
              pathname: `/article/${titleToAlphaNumeric(
                article.title,
                article.publishedAt
              )}`,
              state: article,
            }}
            className="preview__title-container"
          >
            <h1 ref={titleRef} className="preview__title">
              {article.title}
            </h1>
          </Link>
          <div className="preview__content-container">
            <PreviewActions
              bookmarked={bookmarks.some((bookmark) =>
                bookmark.title.includes(article.title)
              )}
              handleBookmarkClick={handleBookmarkClick}
              handleShareClick={handleShareClick}
              url={article.url}
            />
            <PreviewInfo
              source={article.source}
              timeAgo={timeAgo(article.publishedAt)}
            />
          </div>
        </div>
      </article>
    );
  }
);

const mapStateToProps = (state) => {
  console.log(state.bookmarks);
  return { topArticles: state.articles.articles, bookmarks: state.bookmarks };
};

export default connect(mapStateToProps, {
  toggleBookmark,
  toggleShareModal,
})(PreviewArticleCard);
