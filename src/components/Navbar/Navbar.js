import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Overlay from "../Overlay/Overlay";
import "./Navbar.css";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleHamburgerClick = () => setMenuClicked(!menuClicked);
  const closeMenu = () => {
    setMenuClicked(false);
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className={`nav ${menuClicked ? "nav--active" : ""}`}>
        <NavLink className="nav__logo-link" to="/" exact onClick={closeMenu}>
          <h1 className="nav__logo-text">scoops</h1>
        </NavLink>
        <button
          className={`hamburger hamburger--slider ${
            menuClicked ? "is-active" : ""
          }`}
          type="button"
          onClick={handleHamburgerClick}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
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
              to="/film"
              onClick={closeMenu}
            >
              Film
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className="nav__link"
              activeClassName="nav__link--active"
              to="/tech"
              onClick={closeMenu}
            >
              Tech
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className="nav__link"
              activeClassName="nav__link--active"
              to="/space"
              onClick={closeMenu}
            >
              Space
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className="nav__link"
              activeClassName="nav__link--active"
              to="/games"
              onClick={closeMenu}
            >
              Games
            </NavLink>
          </li>
        </ul>
      </nav>
      <Overlay menuClicked={menuClicked} closeMenu={closeMenu} />
    </>
  );
};

export default Navbar;
