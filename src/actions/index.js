import news from "../api/news";
import { RES_PER_PAGE } from "../config";
import { removeSource, removeTLD } from "../helper";

export const fetchArticles = () => async (dispatch, getState) => {
  dispatch({ type: "FETCH_ARTICLES_REQUEST" });
  try {
    const { page } = getState();

    const res = await news(
      `top-headlines?country=gb&pageSize=${RES_PER_PAGE}&page=${page}`
    );

    const articles = res.articles.map((article) => {
      const articleTitle = removeSource(article.title);

      return {
        ...article,
        title: articleTitle,
        source: removeTLD(article.source.name),
      };
    });

    const data = { ...res, articles };

    dispatch({ type: "FETCH_ARTICLES_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_ARTICLES_FAILURE", payload: error.message });
  }
};

export const changeArticle = (article = {}) => {
  return { type: "CHANGE_CURRENT_ARTICLE", payload: article };
};

export const removeArticles = () => {
  return { type: "REMOVE_ARTICLES" };
};

export const toggleBookmark =
  (article, addBookmark = false) =>
  (dispatch) => {
    if (addBookmark) {
      dispatch({ type: "ADD_BOOKMARK", payload: article });
      dispatch(addNotification("Article saved!", "success"));
    } else {
      dispatch({ type: "DELETE_BOOKMARK", payload: article });
      dispatch(removeNotification());
    }
  };

export const changePage =
  (pageNum = null) =>
  (dispatch) => {
    pageNum
      ? dispatch({ type: "CHANGE_PAGE", payload: pageNum })
      : dispatch({ type: "INCREMENT_PAGE" });
  };

export const toggleShareModal =
  (open = true, article) =>
  (dispatch) => {
    open
      ? dispatch({ type: "SHARE_ARTICLE", payload: article })
      : dispatch({ type: "HIDE_SHARE_ARTICLE" });
  };

export const addToClipboard = () => async (dispatch, getState) => {
  try {
    const urlToShare = getState().share.article.url;
    await navigator.clipboard.writeText(urlToShare);
    dispatch(addNotification("Added to clipboard", "success"));
  } catch (err) {
    dispatch(addNotification("Failed to add to clipboard!", "error"));
    console.error(`Error copying url to clipboard: ${err.message}`);
  }
};

export const addNotification = (message, style) => (dispatch) => {
  dispatch(removeNotification());
  dispatch({ type: "ADD_NOTIFICATION", payload: { message, style } });
};

export const removeNotification = () => {
  return { type: "REMOVE_NOTIFICATION" };
};
