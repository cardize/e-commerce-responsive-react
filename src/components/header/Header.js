import React from 'react'
import { NavLink } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/logo.svg'
import './headerStyles.scss'
function Header() {
  return (
    <div className="headerContainer">
      <NavLink className="logoContainer" to="/">
        <Logo />
      </NavLink>
      <div className="optionsContainer">
        <NavLink className="optionLink" to="/shop">
          Shop
        </NavLink>
        <NavLink className="optionLink" to="/contact">
          Contact
        </NavLink>
        <NavLink className="optionLink" to="/signin">
          Sign In
        </NavLink>
        <NavLink className="optionLink" to="/cart">
          C'
        </NavLink>
      </div>
    </div>
  )
}

export default Header
