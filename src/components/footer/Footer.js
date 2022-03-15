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
            <h1>Lorem Ipsum</h1>
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
        <div className="footerRight">
          <h3 className="footerTitle">Contact:</h3>
          <div className="contactItem">
            Lorem ipsum dolor sit amet consectetur adipiscing elit
          </div>
          <div className="contactItem">+90010101010101</div>
          <div className="contactItem">loremipsum@loremsipsum</div>
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
