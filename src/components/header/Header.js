import React from 'react'

import { ReactComponent as Logo } from '../../assets/logo.svg'
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './HeaderStyles.jsx'
function Header({ currentUser, hidden }) {
  return (
    <HeaderContainer className="header">
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        <OptionLink to="/signin">Sign In</OptionLink>
        <OptionLink to="/cart">C'</OptionLink>
      </OptionsContainer>
    </HeaderContainer>
  )
}

export default Header
