import { combineReducers } from "redux";
import articlesReducer from "./articlesReducer";
import bookmarksReducer from "./bookmarksReducer";
import paginationReducer from "./paginationReducer";
import shareReducer from "./shareReducer";
import notificationReducer from "./notificationReducer";

export default combineReducers({
  articles: articlesReducer,
  bookmarks: bookmarksReducer,
  page: paginationReducer,
  share: shareReducer,
  notification: notificationReducer,
});
