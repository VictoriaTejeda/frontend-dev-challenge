import React, {useState}from "react";
import menu from "../assets/image/menu.svg";
import logo from "../assets/image/logo.svg";
import search from "../assets/image/search.svg";

import "../styles/Header.css"
import { Modal } from "./Modal";
import { Search } from "./Search";

export const Header = () => {
  const [modalState, setModalState] = useState(false);
  const [modalSearch, setModalSearch] = useState(false);
  
  return (
    <>
      <header className="header-menu">
        <img src={menu} alt="menu" className="menu" onClick={()=>{setModalState(true)}} />
        <img src={logo} alt="logo-mejor-salud" className="logo" />
        <img src={search} alt="btn-search" className="btn-search" onClick={()=>{setModalSearch(true)}} />
      </header>
        <Modal modalState={modalState} setModalState={setModalState}/>
        <Search modalState={modalSearch} setModalState={setModalSearch}/>
    </>
  );
};
