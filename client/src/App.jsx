import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {
  Home,
  Register,
  Login,
  CompleteRegistration,
  BasicInfo,
  Education,
  SocialLinks,
  Experience,
  Skill,
  Project,
  Resume,
  SharedResume
} from './pages'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/complete-reg" element={<CompleteRegistration />} />
        <Route path='/dashboard/basic-info' element={<BasicInfo />} />
        <Route path='/dashboard/social-links' element={<SocialLinks />} />
        <Route path='/dashboard/education' element={<Education />} />
        <Route path='/dashboard/experience' element={<Experience />} />
        <Route path='/dashboard/skills' element={<Skill />} />
        <Route path='/dashboard/projects' element={<Project />} />
        <Route path='/dashboard/resume' element={<Resume />} />
        <Route path='/resume/:userId' element={<SharedResume />} />
      </Routes>
    </div>
  )
}

export default App