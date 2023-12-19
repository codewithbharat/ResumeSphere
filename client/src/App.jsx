import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Register, Login, CompleteRegistration } from './pages'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/complete-profile" element={<CompleteRegistration />} />
      </Routes>
    </div>
  )
}

export default App