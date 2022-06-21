import { useState } from 'react'
import './register.scss'
import { auth } from '../../firebase'
import { useNavigate, Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== '') {
      if (password !== confirmPassword) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    return isValid
  }

  const register = (e) => {
    e.preventDefault()
    setError('')
    if (validatePassword()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate('/user')
        })
        .catch((err) => setError(err.message))
    }
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <div>
      <div className="form-group">
        <h1>Register</h1>
        {error && <div className="auth__error">{error}</div>}
        <form
          className="form-items"
          onSubmit={register}
          name="registration_form"
        >
          <div className="form-item">
            <input
              className="form-input"
              type="email"
              value={email}
              placeholder="Enter your email"
              required
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

          <div className="form-item">
            <input
              className="form-input"
              type="password"
              value={confirmPassword}
              required
              placeholder="Confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="form-item">
            <button className="login-button" type="submit">
              Register
            </button>
          </div>
        </form>
        <div className="form-item">Already have an account?</div>
        <div className="form-item">
          <Link to="/login">
            <button className="register-button">Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
