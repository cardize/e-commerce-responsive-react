import React from 'react'
import './footer.scss'

import { Facebook, Instagram, Twitter } from '@material-ui/icons'
import footerLogo from '../assets/logo.svg'

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo-container">
            <img className="footer-logo" src={footerLogo} alt="" />
            <h2 className="footer-title">Lorem Ipsum</h2>
          </div>
          <p className="footer-decribtion">
            Lorem ipsum dolor sit amet, <br />
            sed do eiusmod tempor incididunt..
          </p>
          <div className="social-container">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
        </div>
        <div className="footer-right">
          <h3 className="footer-title">Contact:</h3>
          <p className="footer-decsription">
            <br />
            Lorem ipsum dolor sit amet consectetur adipiscing elit
            <br />
            +90010101010101
            <br />
            limpsum@lu.com
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        Mustafa S Sakarya ©2022 All rights reserved
      </div>
    </div>
  )
}

export default Footer
