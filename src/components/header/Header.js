import React from 'react'
import { NavLink } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/logo.svg'
import './headerStyles.scss'
import checkOutLogo from '../../assets/shoppingBag.svg'

function Header() {
  return (
    <div className="headerContainer">
      <NavLink className="logoContainer" to="/">
        <Logo />
      </NavLink>
      <div className="optionsContainer">
        <NavLink className="optionLink" to="/signin">
          Sign In
        </NavLink>
        <NavLink className="optionLink" to="/checkOut">
          <img src={checkOutLogo} alt="" />
        </NavLink>
      </div>
    </div>
  )
}

export default Header
