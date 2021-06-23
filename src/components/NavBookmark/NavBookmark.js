import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import "./NavBookmark.css";

const NavBookmark = ({ bookmarks }) => {
  const showCount =
    bookmarks.length > 0 ? (
      <span className="nav__bookmarks-count">{bookmarks.length}</span>
    ) : null;

  return (
    <NavLink
      className="nav__bookmarks"
      to="/saved-articles"
      aria-label="saved-articles"
    >
      <svg
        className="nav__bookmarks-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path d="M17 17v2a1 1 0 0 0 2 0V4H5v11H3V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-2h16z" />
      </svg>
      {showCount}
    </NavLink>
  );
};

const mapStateToProps = ({ bookmarks }) => {
  return { bookmarks };
};

export default connect(mapStateToProps)(NavBookmark);
