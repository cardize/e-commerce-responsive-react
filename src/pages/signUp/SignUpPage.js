import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './signUpStyles.scss'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, registerWithEmailAndPassword } from '../../firebase'
import { useState, useEffect } from 'react'

function SignUpPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()

  const register = () => {
    if (!name) alert('Please enter name')
    registerWithEmailAndPassword(name, email, password)
  }

  useEffect(() => {
    if (loading) return
    if (user) navigate('/dashboard')
  }, [user, loading])

  return (
    <div className="sing-up-container">
      <div className="sing-up-form">
        <form>
          <div className="form-group">
            <h1>Sign Up</h1>
            <label className="form-text" htmlFor="name">
              Name:
            </label>
            <input
              type="name"
              className="form-control"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Full Name"
            />
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
            <Link className="form-items" to="/dashboard">
              <button className="signInButton" onClick={register}>
                Sign Up
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpPage
