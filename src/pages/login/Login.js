import { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.scss'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const login = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then(navigate('/user'))
      .catch((err) => setError(err.message))
  }

  return (
    <div className="center">
      <div className="form-group">
        <h1>Log in</h1>
        {error && <div className="auth__error">{error}</div>}
        <form className="form-items" onSubmit={login} name="login_form">
          <div className="form-item">
            <input
              className="form-input"
              type="email"
              value={email}
              required
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-item">
            <input
              className="form-input"
              type="password"
              value={password}
              required
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
          <div className="form-item">Don't have an account?</div>
          <div className="form-item">
            <Link to="/register">
              <button className="register-button">Register</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
