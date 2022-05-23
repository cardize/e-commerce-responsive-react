import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './signInStyles.scss'
import { auth, logInWithEmailAndPassword } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useState, useEffect } from 'react'

function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (loading) {
      return
    }
    if (user) navigate('/dashboard')
  }, [user, loading])
  return (
    <div className="sing-in-container">
      <div className="sing-in-form">
        <form>
          <div className="form-group">
            <h1>Sign In</h1>
            <label className="form-text" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
            <label className="form-text" htmlFor="email">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <Link className="form-items" to="">
              <button
                className="signInButton"
                onClick={() => logInWithEmailAndPassword(email, password)}
              >
                Log In
              </button>
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

export default SignInPage
