import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { connect } from "react-redux";
import { toggleBookmark, toggleShareModal } from "../../actions";
import { timeAgo, titleToAlphaNumeric } from "../../helper.js";
import ArticleImage from "../ArticleImage/ArticleImage";
import PreviewActions from "../PreviewActions/PreviewActions";
import PreviewInfo from "../PreviewInfo/PreviewInfo";

const PreviewArticleCard = ({
  article,
  bookmarks,
  toggleBookmark,
  toggleShareModal,
}) => {
  const { ref, inView, entry } = useInView({
    root: null,
    threshold: 0,
    rootMargin: "0px 0px 20px 0px",
  });

  useEffect(() => {
    if (inView) entry.target.classList.add("in-view");
  }, [inView, entry]);

  return (
    <article ref={ref} className="preview fadeup">
      <Link
        to={{
          pathname: `/article/${titleToAlphaNumeric(
            article.title,
            article.publishedAt
          )}`,
          state: article,
        }}
        className="preview__image-container"
      >
        <ArticleImage
          src={article.urlToImage}
          alt={article.title}
          borderRadius
          pad
          overflowVis
        />
      </Link>
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
          <h1 className="preview__title">{article.title}</h1>
        </Link>
        <div className="preview__content-container">
          <PreviewActions
            bookmarked={bookmarks.some((bookmark) =>
              bookmark.title.includes(article.title)
            )}
            handleBookmarkClick={() => toggleBookmark(article)}
            handleShareClick={() => toggleShareModal(true, article)}
            url={article.url}
          />
          <PreviewInfo
            source={article.source.name}
            timeAgo={timeAgo(article.publishedAt)}
          />
        </div>
      </div>
    </article>
  );
};

const mapStateToProps = (state) => ({ bookmarks: state.bookmarks });

export default connect(mapStateToProps, {
  toggleBookmark,
  toggleShareModal,
})(PreviewArticleCard);
