const bookmarksReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_BOOKMARK":
      return [...state, action.payload];
    case "DELETE_BOOKMARK":
      return state.filter((el) => el !== action.payload);
    default:
      return state;
  }
};

export default bookmarksReducer;