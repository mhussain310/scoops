import React from "react";
import { connect } from "react-redux";
import SectionTitle from "../SectionTitle/SectionTitle";
import PreviewArticle from "../PreviewArticle/PreviewArticle";
import Error from "../Error/Error";

const SavedArticles = ({ bookmarks }) => {
  if (bookmarks.length > 0)
    return (
      <>
        <SectionTitle title="Saved articles" padTopShort />
        <PreviewArticle latestNews={bookmarks} />
      </>
    );

  return (
    <>
      <SectionTitle title="Saved articles" padTopShort />
      <Error message="You have no saved articles." icon="bookmark" />
    </>
  );
};

const mapStateToProps = ({ bookmarks }) => {
  return { bookmarks };
};

export default connect(mapStateToProps)(SavedArticles);
