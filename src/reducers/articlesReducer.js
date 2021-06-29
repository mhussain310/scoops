const initialState = {
  currentArticle: {},
  articles: [],
  totalResults: null,
  error: "",
  loading: false,
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ARTICLES_REQUEST":
      return {
        ...state,
        error: "",
        loading: true,
      };
    case "FETCH_ARTICLES_SUCCESS":
      return {
        ...state,
        articles: [...state.articles, ...action.payload.articles],
        totalResults: action.payload.totalResults,
        loading: false,
      };
    case "FETCH_ARTICLES_FAILURE":
      return {
        ...state,
        articles: [],
        error: action.payload,
        loading: false,
      };
    case "REMOVE_ARTICLES":
      return {
        ...state,
        articles: [],
        loading: false,
      };
    case "CHANGE_CURRENT_ARTICLE":
      return {
        ...state,
        currentArticle: action.payload,
      };
    default:
      return state;
  }
};

export default articlesReducer;
