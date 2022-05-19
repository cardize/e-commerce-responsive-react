import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Homepage from './pages/homepage/Homepage'
import SignInPage from './pages/signIn/SignInPage'
import SignUpPage from './pages/signUp/SignUpPage'
import CheckoutPage from './pages/checkout/CheckoutPage'
import Phones from './pages/products/Phones'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop/phones" element={<Phones />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <Footer classname="footer" />
    </Router>
  )
}

export default App
