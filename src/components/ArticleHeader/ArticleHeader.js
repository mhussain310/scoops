import React from "react";
import { connect } from "react-redux";
import { toggleBookmark } from "../../actions";
import { fmtDate, checkAuthor } from "../../helper";
import { DATE_OPTIONS } from "../../config";

import Socials from "../Socials/Socials";
import Bookmark from "../Bookmark/Bookmark";

import "./ArticleHeader.css";

const ArticleHeader = ({ article, bookmarks, toggleBookmark }) => {
  return (
    <header className="article-header">
      <h1 className="article-header__title">{article.title}</h1>
      <p className="article-header__author-container">
        <span className="article-header__author-by">By</span>
        <strong>{checkAuthor(article.author, article.source.name)}</strong>
      </p>
      <div className="article-header__date-container">
        <span className="article-header__date">
          {fmtDate(article.publishedAt, DATE_OPTIONS)}
        </span>
      </div>
      <div className="article-header__socials-container">
        <Socials
          url={article.url}
          title={article.title}
          description={article.description}
          buttonSize="40px"
          marginStyle="socials--margin-article"
        />
        <Bookmark
          bookmarked={bookmarks.some((bookmark) =>
            bookmark.title.includes(article.title)
          )}
          handleClick={() => toggleBookmark(article)}
          bookmarkArticle
        />
      </div>
    </header>
  );
};

const mapStateToProps = ({ bookmarks }) => {
  return { bookmarks };
};

export default connect(mapStateToProps, { toggleBookmark })(ArticleHeader);
