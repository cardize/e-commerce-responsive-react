import React from 'react'
import { Link } from 'react-router-dom'
import './signUpStyles.scss'

export default function SignUpPage() {
  return (
    <div className="sing-up-container">
      <div className="sing-up-form">
        <form>
          <div className="form-group">
            <h1>Sign Up</h1>
            <label className="form-text" htmlFor="name">
              Name:
            </label>
            <input type="name" className="form-control" id="name" />
            <label className="form-text" htmlFor="surname">
              Surname:
            </label>
            <input type="surname" className="form-control" id="surname" />
            <label className="form-text" htmlFor="adress">
              Adress:
            </label>
            <input type="adress" className="form-control" id="adress" />
            <label className="form-text" htmlFor="email">
              Email:
            </label>
            <input type="email" className="form-control" id="email" />
            <label className="form-text" htmlFor="email">
              Password:
            </label>
            <input type="password" className="form-control" id="password" />
            <label className="form-text" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="confirm-password"
            />
            <Link className="form-items" to="">
              <button className="signInButton">Sign Up</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
