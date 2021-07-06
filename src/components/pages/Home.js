import React, { useEffect } from "react";
import { connect } from "react-redux";
import { changePage, fetchArticles, removeArticles } from "../../actions";
import PreviewTopStory from "../PreviewTopStory/PreviewTopStory";
import SectionTitle from "../SectionTitle/SectionTitle";
import PreviewArticle from "../PreviewArticle/PreviewArticle";
import Pagination from "../Pagination/Pagination";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";

window.scrollTo(0, 0);

const Home = ({ articles, fetchArticles, changePage, removeArticles }) => {
  const topArticles = articles.general.articles;
  const articlesLength = topArticles.length;
  const errorMsg = articles.general.error;

  useEffect(() => {
    if (articlesLength === 0) {
      changePage(1);
      fetchArticles();
    }

    return () => {
      // removeArticles();
      changePage(1);
    };
  }, [fetchArticles, removeArticles, changePage, articlesLength]);

  const render = () => {
    if (errorMsg && topArticles.length === 0)
      return <Error message={`${errorMsg}`} />;

    if (topArticles.length > 0 && !errorMsg)
      return (
        <>
          <PreviewTopStory topStory={topArticles[0]} label="breaking" />
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
  //     <Pagination />
  //   </>
  // );
};

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps, {
  fetchArticles,
  changePage,
  removeArticles,
})(Home);
