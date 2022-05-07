import React from 'react'
import { Link } from 'react-router-dom'
import './signInStyles.scss'

//import SignInForm from '../../components/signIn/signIn'

export default function SignInPage() {
  return (
    <div className="sing-in-container">
      <div className="sing-in-form">
        <form>
          <div className="form-group">
            <h1>Sign In</h1>
            <label className="form-text" htmlFor="email">
              Email:
            </label>
            <input type="email" className="form-control" id="email" />
            <label className="form-text" htmlFor="email">
              Password:
            </label>
            <input type="password" className="form-control" id="password" />
            <Link className="form-items" to="">
              <button className="signInButton">Log In</button>
            </Link>
            <Link className="form-items" to="/signup">
              <button className="signUpButton">Register</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
