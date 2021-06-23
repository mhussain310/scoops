import React from "react";
import { connect } from "react-redux";
import { changePage, fetchArticles, removeArticles } from "../../actions";
import { RES_PER_PAGE } from "../../config";
import Spinner from "../Spinner/Spinner";

import "./Pagination.css";

const Pagination = ({
  page,
  totalResults,
  loading,
  fetchArticles,
  changePage,
  // removeArticles,
}) => {
  const numPages = Math.ceil(totalResults / RES_PER_PAGE);

  const handleClick = () => {
    changePage();
    fetchArticles();
  };

  const conditionalRender = () => {
    if (loading) return <Spinner />;

    if (page === numPages) return null;

    return (
      <button className="pagination__btn" onClick={handleClick}>
        <span className="pagination__num">More articles</span>
        <svg
          className="pagination__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15a1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z" />
        </svg>
      </button>
    );
  };

  return (
    <div className="pagination">
      <div className="pagination__wrapper">{conditionalRender()}</div>
    </div>
  );
};

const mapStateToProps = ({ page, articles }) => {
  return {
    page,
    totalResults: articles.totalResults,
    loading: articles.loading,
  };
};

export default connect(mapStateToProps, {
  fetchArticles,
  changePage,
  removeArticles,
})(Pagination);