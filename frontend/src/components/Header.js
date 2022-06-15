import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../assets/logo.svg'
import './styles.scss'
import checkOutLogo from '../assets/logo.svg'

function Header(props) {
  return (
    <div className="header-container">
      <NavLink className="logo-container" to="/">
        <Logo className="logoSvg" />
      </NavLink>
      <div className="options-container">
        <NavLink to={'/login'}>
          <button className="signin-button">User</button>
        </NavLink>
        <NavLink to="/checkout">
          <img className="checkout-logo" src={checkOutLogo} alt="" />
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
