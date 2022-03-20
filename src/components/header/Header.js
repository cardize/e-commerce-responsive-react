import React from 'react'
import { NavLink } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/logo.svg'
import './headerStyles.scss'
import checkOutLogo from '../../assets/logo.svg'

function Header() {
  return (
    <div className="headerContainer">
      <NavLink className="logoContainer" to="/">
        <Logo className="logoSvg" />
      </NavLink>
      <div className="optionsContainer">
        <NavLink to="/signin">
          <button className="signInButton">Sign In</button>
        </NavLink>
        <NavLink to="/checkOut">
          <img className="checkOutLogo" src={checkOutLogo} alt="" />
        </NavLink>
      </div>
    </div>
  )
}

export default Header
