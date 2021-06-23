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
          <h1 className="nav__logo-text">scoops</h1>
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
