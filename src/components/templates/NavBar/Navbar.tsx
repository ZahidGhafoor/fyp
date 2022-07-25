import React from 'react'
import "./NavBar.scss"

import logo from "../../../assets/logo.svg"
import search from "../../../assets/search.svg"

import ring from "../../../assets/ring.svg"
import question from "../../../assets/question.svg"
import down from "../../../assets/downarrow.svg"


const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="logo">
        <img src={logo} alt="" className="log__img" />
      </div>
      <div className="searchBar">
        <img src={search} alt="" className="search__img" />
        <input placeholder='Search' type="text" className="search__input" />

      </div>
      <div className="user">
        <img src={ring} alt="" className="ring" />
        <img src={question} alt="" className="question" />
        <div className="user__info">
          <div className="name">Elanar Pena</div>
          <div className="email">elanar@gmail.com</div>
        </div>
        <img src={down} alt="" className="down" />

      </div>
    </div>
  )
}

export default Navbar