import React from "react";
import "./Burger.css";

import { slide as Menu } from "react-burger-menu";

import { BsFillHouseFill } from "react-icons/bs";
import { TbBrandAirbnb } from "react-icons/tb";
import { BiLogInCircle } from "react-icons/bi";
import { MdPersonPinCircle } from "react-icons/md";
import { MdHelp } from "react-icons/md";

export default function Burger() {
  return (
    <Menu lassName="my-menu" width={"100vw"} isOpen={false} noOverlay right>
      <a className="menu-item" href="/">
        <TbBrandAirbnb className="burger-menu-item-icon" />
        Sign Up
      </a>
      <a className="menu-item" href="/">
        <BiLogInCircle className="burger-menu-item-icon" />
        Log in
      </a>
      <a className="menu-item" href="/">
        <BsFillHouseFill className="burger-menu-item-icon" />
        Airbnb your home
      </a>
      <a className="menu-item" href="/">
        <MdPersonPinCircle className="burger-menu-item-icon" />
        Host an experience
      </a>
      <a className="menu-item" href="/">
        <MdHelp className="burger-menu-item-icon" />
        Help
      </a>
    </Menu>
  );
}
