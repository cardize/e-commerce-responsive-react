import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import './headerStyles.scss'
import checkOutLogo from '../../assets/logo.svg'

function Header(props) {
  return (
    <div className="headerContainer">
      <NavLink className="logoContainer" to="/">
        <Logo className="logoSvg" />
      </NavLink>
      <div className="optionsContainer">
        <NavLink to="/signin">
          <button className="signInButton">User</button>
        </NavLink>
        <NavLink to="/checkOut">
          <img className="checkOutLogo" src={checkOutLogo} alt="" />
          <p className="quentity">{props.cart.length}</p>
        </NavLink>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}
export default connect(mapStateToProps)(Header)
