class BaseState {
  articles = [];
  totalResults = 0;
  error = "";
  loading = false;
}

export const baseReducer = (state = new BaseState(), action) => {
  switch (action.payload.subtype) {
    case "FETCH_ARTICLES_REQUEST":
      return {
        ...state,
        error: "",
        loading: true,
      };
    case "FETCH_ARTICLES_SUCCESS":
      return {
        ...state,
        articles: [...state.articles, ...action.payload.data.articles],
        totalResults: action.payload.data.totalResults,
        loading: false,
      };
    case "FETCH_ARTICLES_FAILURE":
      return {
        ...state,
        articles: [],
        totalResults: 0,
        error: action.payload.error,
        loading: false,
      };
    case "REMOVE_ARTICLES":
      return {
        ...state,
        articles: [],
        totalResults: 0,
        loading: false,
      };
    default:
      return state;
  }
};

class InitialState {
  general = new BaseState();
  entertainment = new BaseState();
  technology = new BaseState();
  health = new BaseState();
  science = new BaseState();
  sports = new BaseState();
  currentArticle = {};
  category = "";
}

const articlesReducer = (state = new InitialState(), action) => {
  switch (action.type) {
    case "GENERAL":
      return {
        ...state,
        general: baseReducer(state.general, action),
      };
    case "ENTERTAINMENT":
      return {
        ...state,
        entertainment: baseReducer(state.entertainment, action),
      };
    case "TECHNOLOGY":
      return {
        ...state,
        technology: baseReducer(state.technology, action),
      };
    case "HEALTH":
      return {
        ...state,
        health: baseReducer(state.health, action),
      };
    case "SCIENCE":
      return {
        ...state,
        science: baseReducer(state.science, action),
      };
    case "SPORTS":
      return {
        ...state,
        sports: baseReducer(state.sports, action),
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

// const initialState = {
//   currentArticle: {},
//   articles: [],
//   totalResults: null,
//   error: "",
//   loading: false,
// };

// const articlesReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "FETCH_ARTICLES_REQUEST":
//       return {
//         ...state,
//         error: "",
//         loading: true,
//       };
//     case "FETCH_ARTICLES_SUCCESS":
//       return {
//         ...state,
//         articles: [...state.articles, ...action.payload.articles],
//         totalResults: action.payload.totalResults,
//         loading: false,
//       };
//     case "FETCH_ARTICLES_FAILURE":
//       return {
//         ...state,
//         articles: [],
//         error: action.payload,
//         loading: false,
//       };
//     case "REMOVE_ARTICLES":
//       return {
//         ...state,
//         articles: [],
//         loading: false,
//       };
//     case "CHANGE_CURRENT_ARTICLE":
//       return {
//         ...state,
//         currentArticle: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export default articlesReducer;
