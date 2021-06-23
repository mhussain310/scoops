import React, { useEffect } from "react";
import { connect } from "react-redux";
import { changePage, fetchArticles, removeArticles } from "../../actions";
import PreviewTopStory from "../PreviewTopStory/PreviewTopStory";
import SectionTitle from "../SectionTitle/SectionTitle";
import PreviewArticle from "../PreviewArticle/PreviewArticle";
import Pagination from "../Pagination/Pagination";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";

const Home = ({
  topArticles,
  errorMsg,
  fetchArticles,
  changePage,
  removeArticles,
}) => {
  useEffect(() => {
    changePage(1);
    fetchArticles();

    return () => {
      removeArticles();
      changePage(1);
      window.scrollTo(0, 0);
    };
  }, [fetchArticles, removeArticles, changePage]);

  const render = () => {
    if (errorMsg && topArticles.length === 0)
      return <Error message={`${errorMsg}`} />;

    if (topArticles.length > 0 && !errorMsg)
      return (
        <>
          <PreviewTopStory topStory={topArticles[0]} />
          <SectionTitle title="Latest News" />
          <PreviewArticle latestNews={topArticles.slice(1)} />
          <Pagination />
        </>
      );

    return <Spinner message="Loading articles" />;
  };

  return render(topArticles);
  // return (
  //   <>
  //     <PreviewTopStory />
  //     <SectionTitle title="Latest News" />
  //     <PreviewArticle />
  //   </>
  // );
};

const mapStateToProps = (state) => {
  return {
    topArticles: state.articles.articles,
    errorMsg: state.articles.error,
  };
};

export default connect(mapStateToProps, {
  fetchArticles,
  changePage,
  removeArticles,
})(Home);
