import React from "react";

import "./PreviewInfo.css";

const PreviewInfo = ({ source, timeAgo }) => {
  return (
    <div className="article-info__block">
      <div className="article-info__source">
        <svg
          className="article-info__source-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path d="M4 16h16V5H4v11zm9 2v2h4v2H7v-2h4v-2H2.992A.998.998 0 0 1 2 16.993V4.007C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.986c0 .556-.455 1.007-.992 1.007H13z" />
        </svg>
        <span className="article-info__source-text">{source}</span>
      </div>
      <div className="article-info__date">
        <svg
          className="article-info__date-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="#626262"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </g>
        </svg>
        <span className="article-info__date-text">{timeAgo}</span>
      </div>
    </div>
  );
};

export default PreviewInfo;
