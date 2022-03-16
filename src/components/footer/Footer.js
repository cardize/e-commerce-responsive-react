import React from 'react'
import './footer.scss'

import { Facebook, Instagram, Twitter } from '@material-ui/icons'
import footerLogo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div>
      <div className="footerContainer">
        <div className="footerLeft">
          <div className="footerLogoContainer">
            <img className="footerLogo" src={footerLogo} alt="" />
            <h1 className="footerTitle">Lorem Ipsum</h1>
          </div>
          <p className="footerDecribtion">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="socialContainer">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
        </div>
        <div className="footerLeft">
          <h3 className="footerTitle">Contact:</h3>
          <p className="footerDecribtion">
            Lorem ipsum dolor sit amet consectetur adipiscing elit
            <br />
            +90010101010101 <br />
            loremipsum@loremsipsum
          </p>
          <img
            className="payment"
            src="https://i.ibb.co/Qfvn4z6/payment.png"
            alt=""
          />
        </div>
      </div>
      <div
        className="footerBottom"
        style={{ textAlign: 'center', color: 'white' }}
      >
        Lorem Ipsum
        <br />
        ©2022 All rights reserved.
      </div>
    </div>
  )
}

export default Footer
