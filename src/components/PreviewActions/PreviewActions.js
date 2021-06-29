import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Bookmark from "../Bookmark/Bookmark";

import "./PreviewActions.css";

const PreviewActions = ({
  bookmarked,
  url,
  handleBookmarkClick,
  handleShareClick,
}) => {
  const [dotsClicked, setDotsClicked] = useState(false);
  const onDotsClick = () => setDotsClicked(!dotsClicked);

  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current?.contains(e.target)) return;
      setDotsClicked(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  return (
    <div className="preview__actions">
      <Bookmark bookmarked={bookmarked} handleClick={handleBookmarkClick} />
      <div ref={ref} className="dots">
        <svg
          className="dots__icon"
          onClick={onDotsClick}
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
        >
          <g>
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0z" />
          </g>
        </svg>
        <ul className={`dots__list ${dotsClicked ? "dots__list--active" : ""}`}>
          <li
            className="dots__option"
            onClick={() => {
              setDotsClicked(false);
              handleShareClick();
            }}
          >
            <svg
              className="dots__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
            >
              <g>
                <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
              </g>
            </svg>
            <span className="dots__text">Share</span>
          </li>
          <li
            className="dots__option dots__option--no-pad"
            onClick={() => setDotsClicked(false)}
          >
            <Link
              className="dots__link"
              to={{ pathname: `${url}` }}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="dots__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
              >
                <g>
                  <path
                    fillRule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                  />
                </g>
              </svg>
              <span className="dots__text">Go to article source</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PreviewActions;
