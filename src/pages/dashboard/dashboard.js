import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db, logout } from '../../firebase'
import { query, collection, getDocs, where } from 'firebase/firestore'
import './dashboard.scss'

function Dashboard() {
  const [user, loading, error] = useAuthState(auth)
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid))
      const doc = await getDocs(q)
    } catch (error) {
      console.error(error)
      alert('An error occured while fetching user data')
    }
  }

  useEffect(() => {
    if (loading) return
    if (!user) return navigate('/')

    fetchUserName()
  }, [user, loading])

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        Logged in as
        <div>{user.email}</div>
        <Link to="/">
          <button className="dashboard__btn" onClick={logout}>
            Logout
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard
