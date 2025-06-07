import React from "react";

import "./Bookmark.css";

const Bookmark = ({ bookmarked, handleClick, bookmarkArticle }) => {
  const bookmarkType = bookmarked ? (
    <svg
      className="bookmark__icon bookmark__icon--fill"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
    >
      <g>
        <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
      </g>
    </svg>
  ) : (
    <svg
      className="bookmark__icon bookmark__icon--empty"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
    >
      <g>
        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
      </g>
    </svg>
  );

  return (
    <div
      className={`bookmark ${bookmarkArticle ? "bookmark--article" : ""}`}
      onClick={handleClick}
    >
      {bookmarkType}
    </div>
  );
};

export default Bookmark;
