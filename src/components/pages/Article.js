import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { changeArticle } from "../../actions";
import ArticleImage from "../ArticleImage/ArticleImage";
import ArticleHeader from "../ArticleHeader/ArticleHeader";
import ArticleBody from "../ArticleBody/ArticleBody";
import SectionTitle from "../SectionTitle/SectionTitle";
import PreviewArticle from "../PreviewArticle/PreviewArticle";
import Spinner from "../Spinner/Spinner";
import { CATEGORY_NAMES } from "../../config";

const Article = ({ location, currentArticle, articles, changeArticle }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    changeArticle(location.state);

    return () => {
      changeArticle();
      // window.scrollTo(0, 0);
    };
  }, [location.state, changeArticle]);

  if (
    Object.keys(currentArticle).length === 0 &&
    articles[CATEGORY_NAMES[0]].articles.length === 0
  )
    return <Redirect to="/" />;

  if (Object.keys(currentArticle).length !== 0)
    return (
      <>
        <ArticleHeader article={currentArticle} />
        <ArticleImage
          src={currentArticle.urlToImage}
          alt={currentArticle.title}
        />
        <ArticleBody article={currentArticle} />
        <SectionTitle title="Popular stories" />
        <PreviewArticle
          latestNews={articles[CATEGORY_NAMES[0]].articles
            .filter((el) => el.title !== currentArticle.title)
            .slice(0, 9)}
        />
      </>
    );

  return <Spinner message="Loading article" />;
};

const mapStateToProps = ({ articles }) => ({
  currentArticle: articles.currentArticle,
  articles,
});

export default connect(mapStateToProps, { changeArticle })(Article);
