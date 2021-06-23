const paginationReducer = (state = 1, action) => {
  switch (action.type) {
    case "CHANGE_PAGE":
      return action.payload;
    case "INCREMENT_PAGE":
      return state + 1;
    default:
      return state;
  }
};

export default paginationReducer;
