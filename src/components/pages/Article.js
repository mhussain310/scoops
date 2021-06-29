import React, { useEffect } from "react";
import { connect } from "react-redux";
import { changeArticle } from "../../actions";
import ArticleImage from "../ArticleImage/ArticleImage";
import ArticleHeader from "../ArticleHeader/ArticleHeader";
import ArticleBody from "../ArticleBody/ArticleBody";
import Spinner from "../Spinner/Spinner";

const Article = ({ location, currentArticle, changeArticle }) => {
  useEffect(() => {
    changeArticle(location.state);

    return () => changeArticle();
  }, [location.state, changeArticle]);

  if (Object.keys(currentArticle).length !== 0)
    return (
      <>
        <ArticleHeader article={currentArticle} />
        <ArticleImage
          src={currentArticle.urlToImage}
          alt={currentArticle.title}
        />
        <ArticleBody article={currentArticle} />
      </>
    );

  return <Spinner message="Loading article" />;
};

const mapStateToProps = ({ articles }) => {
  return { currentArticle: articles.currentArticle };
};

export default connect(mapStateToProps, { changeArticle })(Article);
