import React, { useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { changePage, fetchArticles, removeArticles } from "../../actions";
import { CATEGORY_NAMES } from "../../config";
import { capitaliseFirstLetter } from "../../helper";
import PreviewTopStory from "../PreviewTopStory/PreviewTopStory";
import SectionTitle from "../SectionTitle/SectionTitle";
import PreviewArticle from "../PreviewArticle/PreviewArticle";
import Pagination from "../Pagination/Pagination";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";

window.scrollTo(0, 0);

const Category = ({ articles, fetchArticles, changePage, removeArticles }) => {
  const category = useParams().category;
  const topArticles = articles[category]?.articles ?? [];
  const errorMsg = articles[category]?.error ?? "";
  const articlesLength = topArticles.length;

  useEffect(() => {
    if (articlesLength === 0) {
      changePage(1);
      fetchArticles(category);
    }

    return () => {
      // removeArticles();
      changePage(1);
    };
  }, [fetchArticles, removeArticles, changePage, articlesLength, category]);

  const render = () => {
    if (!CATEGORY_NAMES.includes(category)) return <Redirect to="/" />;

    if (errorMsg && topArticles.length === 0)
      return <Error message={`${errorMsg}`} />;

    if (topArticles.length > 0 && !errorMsg)
      return (
        <>
          <PreviewTopStory topStory={topArticles[0]} label="trending" />
          <SectionTitle title={`${capitaliseFirstLetter(category)} News`} />
          <PreviewArticle latestNews={topArticles.slice(1)} />
          <Pagination />
        </>
      );

    return <Spinner message="Loading articles" />;
  };

  return render(topArticles);
};

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps, {
  fetchArticles,
  changePage,
  removeArticles,
})(Category);
