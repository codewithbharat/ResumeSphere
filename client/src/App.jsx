import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Register, Login, CompleteRegistration, Profile } from './pages'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/complete-reg" element={<CompleteRegistration />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App