import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AuthProvider } from '../src/pages/user/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../src/firebase'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Homepage from './pages/homepage/Homepage'
import CheckoutPage from './pages/checkout/CheckoutPage'
import Phones from './pages/products/Phones'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import User from './pages/user/User'

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])
  return (
    <Router>
      <AuthProvider value={{ currentUser }}>
        {' '}
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop/phones" element={<Phones />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<User />} />
        </Routes>
        <Footer classname="footer" />
      </AuthProvider>
    </Router>
  )
}

export default App
