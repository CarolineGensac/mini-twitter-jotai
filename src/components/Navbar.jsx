import React from "react";
import { Link } from "react-router-dom";

  const Navbar = () => {
    return (
      <nav className="nav">
        <ul className="nav__menu">
          <li className="nav__menu__item">
            <Link to="/home" className="nav__menu__item__a">
              Home
            </Link>
          </li>
          <li className="nav__menu__item">
            <Link to="/profile" className="nav__menu__item__a">
              Profile
            </Link>
          </li>
          <li className="nav__menu__item">
            <Link to="/register" className="nav__menu__item__a">
              Register
            </Link>
          </li>
          <li className="nav__menu__item">
            <Link to="/login" className="nav__menu__item__a">
              Log In
            </Link>
          </li>
        </ul>
      </nav>
    );
  };


export default Navbar;
