import React from "react";
import "./Header.css";

import Burger from "../Burger/Burger";

import { Link } from "react-router-dom";

import Logo from "../../images/airbnb-logo.svg";

import { BsFillHouseFill } from "react-icons/bs";
import { TbBrandAirbnb } from "react-icons/tb";
import { BiLogInCircle } from "react-icons/bi";
import { MdPersonPinCircle } from "react-icons/md";
import { MdHelp } from "react-icons/md";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container container">
        <Link to="/">
          <div className="header-logo-container">
            <img className="header-logo" src={Logo} alt="Airbnb header logo" />
          </div>
        </Link>
        <Burger />
        <nav className="header-nav">
          <ul className="header-nav-list">
            <Link to="/">
              <li className="header-nav-list-item">
                <TbBrandAirbnb className="header-nav-list-item-icon" />
                <span className="tooltip abnb">sign up</span>
              </li>
            </Link>
            <Link to="/about">
              <li className="header-nav-list-item">
                <BiLogInCircle className="header-nav-list-item-icon" />
                <span className="tooltip login">Login</span>
              </li>
            </Link>
            <Link to="/about">
              <li className="header-nav-list-item">
                <BsFillHouseFill className="header-nav-list-item-icon" />
                <span className="tooltip house">airbnb your home</span>
              </li>
            </Link>
            <Link to="/about">
              <li className="header-nav-list-item">
                <MdPersonPinCircle className="header-nav-list-item-icon" />
                <span className="tooltip person">host an experience</span>
              </li>
            </Link>
            <Link to="/about">
              <li className="header-nav-list-item">
                <MdHelp className="header-nav-list-item-icon" />
                <span className="tooltip help">help</span>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
