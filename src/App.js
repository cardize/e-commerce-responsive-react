import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'

import Header from './components/header/Header'
import Homepage from './pages/homepage/Homepage'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer classname="footer" />
    </Router>
  )
}

export default App
