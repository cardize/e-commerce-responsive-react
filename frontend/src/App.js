import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AuthProvider } from '../src/pages/user/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../src/firebase'
import Footer from './components/Footer'
import Header from './components/Header'
import Homepage from './pages/homepage/Homepage'
import CheckoutPage from './pages/checkout/CheckoutPage'
import Phones from './pages/products/Phones'
import Laptops from './pages/products/Laptops'
import Tablets from './pages/products/Tablets'
import Login from './pages/login/Login'
import Register from './pages/register/index'
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
          <Route
            path="/login"
            element={!currentUser ? <Login /> : <Navigate to="/user" replace />}
          />
          <Route
            path="/register"
            element={
              !currentUser ? <Register /> : <Navigate to="/user" replace />
            }
          />
          <Route path="/user" element={<User />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/shop/phones" element={<Phones />} />
          <Route path="/shop/laptops" element={<Laptops />} />
          <Route path="/shop/tablets" element={<Tablets />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <Footer classname="footer" />
      </AuthProvider>
    </Router>
  )
}

export default App
