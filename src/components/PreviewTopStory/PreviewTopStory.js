import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleBookmark, toggleShareModal } from "../../actions";
import { timeAgo, titleToAlphaNumeric } from "../../helper.js";

import ArticleImage from "../ArticleImage/ArticleImage";
import PreviewActions from "../PreviewActions/PreviewActions";
import PreviewInfo from "../PreviewInfo/PreviewInfo";

import "./PreviewTopStory.css";

const TopStory = ({
  topStory,
  label,
  bookmarks,
  toggleBookmark,
  toggleShareModal,
}) => {
  return (
    <article className="top-story">
      <Link
        to={{
          pathname: `/article/${titleToAlphaNumeric(
            topStory.title,
            topStory.publishedAt
          )}`,
          state: topStory,
        }}
        className="top-story__image-container"
      >
        <ArticleImage
          src={topStory.urlToImage}
          alt={topStory.title}
          borderRadius
          // halfWidth
          fullHeight
        >
          <span className="top-story__label">{label}</span>
        </ArticleImage>
      </Link>
      <div className="top-story__content">
        <div className="top-story__content-wrapper">
          <Link
            to={{
              pathname: `/article/${titleToAlphaNumeric(
                topStory.title,
                topStory.publishedAt
              )}`,
              state: topStory,
            }}
            className="top-story__title-container"
          >
            <h2 className="top-story__title">{topStory.title}</h2>
          </Link>
          <p className="top-story__content-description">
            {topStory.description}
          </p>
        </div>
        <div className="top-story__content-wrapper-2">
          <PreviewActions
            bookmarked={bookmarks.some((bookmark) =>
              bookmark.title.includes(topStory.title)
            )}
            handleBookmarkClick={() => toggleBookmark(topStory)}
            handleShareClick={() => toggleShareModal(true, topStory)}
            url={topStory.url}
          />
          <PreviewInfo
            source={topStory.source.name}
            timeAgo={timeAgo(topStory.publishedAt)}
          />
        </div>
      </div>
    </article>
  );
};

const mapStateToProps = (state) => ({ bookmarks: state.bookmarks });

export default connect(mapStateToProps, { toggleBookmark, toggleShareModal })(
  TopStory
);
