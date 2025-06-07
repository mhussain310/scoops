const initialState = {
  showNotification: false,
  notificationStyle: "",
  message: "",
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      return {
        ...state,
        showNotification: true,
        notificationStyle: action.payload.style,
        message: action.payload.message,
      };
    case "REMOVE_NOTIFICATION":
      return {
        ...state,
        showNotification: false,
      };
    default:
      return state;
  }
};

export default notificationReducer;
