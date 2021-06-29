import React, { useRef } from "react";
import { connect } from "react-redux";
import { toggleBookmark, toggleShareModal } from "../../actions";
import { timeAgo } from "../../helper.js";

import ArticleImage from "../ArticleImage/ArticleImage";
import PreviewActions from "../PreviewActions/PreviewActions";
import PreviewInfo from "../PreviewInfo/PreviewInfo";

import "./PreviewTopStory.css";

const TopStory = ({
  topStory,
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

  return (
    <article className="top-story">
      <ArticleImage
        src={topStory.urlToImage}
        alt={topStory.title}
        borderRadius
        halfWidth
        fullHeight
      >
        <span className="top-story__label">breaking</span>
      </ArticleImage>
      <div className="top-story__content">
        <div className="top-story__content-wrapper">
          <h2 ref={titleRef} className="top-story__content-title">
            {topStory.title}
          </h2>
          <p className="top-story__content-description">
            {topStory.description}
          </p>
        </div>
        <div className="top-story__content-wrapper-2">
          <PreviewActions
            bookmarked={bookmarks.some((bookmark) =>
              bookmark.title.includes(topStory.title)
            )}
            handleBookmarkClick={handleBookmarkClick}
            handleShareClick={handleShareClick}
            url={topStory.url}
          />
          <PreviewInfo
            source={topStory.source}
            timeAgo={timeAgo(topStory.publishedAt)}
          />
        </div>
      </div>
    </article>
    // <article className="top-story">
    //   <div className="top-story__image-container">
    //     <div className="top-story__image-wrapper">
    //       <img
    //         className="top-story__image"
    //         src={replacement}
    //         alt="replacement"
    //       />
    //       <span className="top-story__label">breaking</span>
    //     </div>
    //   </div>
    //   <div className="top-story__content">
    //     <div className="top-story__content-wrapper">
    //       <h2 ref={titleRef} className="top-story__content-title">
    //         Oscar ratings fall at an all time low. See all the reactions from
    //         celebrities and fans around the globe
    //       </h2>
    //       <p className="top-story__content-description">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
    //         praesentium dicta. In quae labore reiciendis tenetur autem. Nulla,
    //         dolor sequi.
    //       </p>
    //     </div>
    //     <div className="top-story__content-wrapper-2">
    //       <PreviewActions
    //         // bookmarked={bookmarks.some((bookmark) =>
    //         //   bookmark.title.includes(topStory.title)
    //         // )}
    //         handleBookmarkClick={handleBookmarkClick}
    //         handleShareClick={handleShareClick}
    //         url="http://www.example.com"
    //       />
    //       <PreviewInfo source="BBC" timeAgo="2 hours ago" />
    //     </div>
    //   </div>
    // </article>
  );
};

const mapStateToProps = (state) => {
  return { topArticles: state.articles.articles, bookmarks: state.bookmarks };
};

export default connect(mapStateToProps, { toggleBookmark, toggleShareModal })(
  TopStory
);
