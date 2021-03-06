import './user.scss'
import { useAuthValue } from './AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import { Link } from 'react-router-dom'

const User = () => {
  const { currentUser } = useAuthValue()
  return (
    <div className="user-container">
      <div className="profile">
        <h1>Profile</h1>
        <p>
          <strong>Email: </strong>
          {currentUser?.email}
        </p>
        <Link to="/login" onClick={() => signOut(auth)}>
          <button className="logout-button">
            {currentUser ? 'Log Out' : 'Log In'}
          </button>
        </Link>
      </div>
    </div>
  )
}

export default User
