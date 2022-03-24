import React from "react";
import menu from "../assets/image/menu.svg";
import logo from "../assets/image/logo.svg";
import search from "../assets/image/search.svg";
import "../styles/Header.css"

export const Header = () => {
  return (
    <>
      <header className="header-menu">
        <img src={menu} alt="menu" className="menu" />
        <img src={logo} alt="logo-mejor-salud" className="logo" />
        <img src={search} alt="btn-search" className="btn-search" />
      </header>
    </>
  );
};
