import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Overlay from "../Overlay/Overlay";

import "./Navbar.css";
import NavBookmark from "../NavBookmark/NavBookmark";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleHamburgerClick = () => setMenuClicked(!menuClicked);
  const closeMenu = () => {
    setMenuClicked(false);
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className={"nav"}>
        <button
          className={`hamburger hamburger--slider ${
            menuClicked ? "is-active" : ""
          }`}
          type="button"
          aria-label="menu"
          onClick={handleHamburgerClick}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <NavLink className="nav__logo-link" to="/" exact onClick={closeMenu}>
          <h1 className="nav__logo-text">
            sc
            <svg
              className="nav__logo-glass"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
            >
              <g>
                <path d="M4 6a2 2 0 1 1 0 4a2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0a3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0z" />
              </g>
            </svg>
            ps
          </h1>
        </NavLink>
        <NavBookmark />
        <ul className={`nav__list ${menuClicked ? "nav__list--active" : ""}`}>
          <li className="nav__item">
            <NavLink
              className="nav__link"
              activeClassName="nav__link--active"
              to="/"
              exact
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className="nav__link"
              activeClassName="nav__link--active"
              to="/entertainment"
              onClick={closeMenu}
            >
              Entertainment
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className="nav__link"
              activeClassName="nav__link--active"
              to="/technology"
              onClick={closeMenu}
            >
              Technology
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className="nav__link"
              activeClassName="nav__link--active"
              to="/health"
              onClick={closeMenu}
            >
              Health
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className="nav__link"
              activeClassName="nav__link--active"
              to="/science"
              onClick={closeMenu}
            >
              Science
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className="nav__link"
              activeClassName="nav__link--active"
              to="/sports"
              onClick={closeMenu}
            >
              Sports
            </NavLink>
          </li>
        </ul>
      </nav>
      <Overlay show={menuClicked} handleClick={closeMenu} />
    </>
  );
};

export default Navbar;
