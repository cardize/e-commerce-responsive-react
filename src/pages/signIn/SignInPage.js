import React from 'react'
import { Link } from 'react-router-dom'

//import SignInForm from '../../components/signIn/signIn'

export default function SignInPage() {
  return (
    <div>
      <h1>signIn</h1>
      <Link to="/signup">
        <button>Register</button>
      </Link>
    </div>
  )
}
