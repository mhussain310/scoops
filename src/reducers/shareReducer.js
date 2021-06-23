const initialState = {
  showModal: false,
  article: {
    url: "",
  },
};

const shareReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHARE_ARTICLE":
      return {
        ...state,
        showModal: true,
        article: action.payload,
      };
    case "HIDE_SHARE_ARTICLE":
      return {
        ...state,
        showModal: false,
        article: {
          url: "",
        },
      };
    default:
      return state;
  }
};

export default shareReducer;
