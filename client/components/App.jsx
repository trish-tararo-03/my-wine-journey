import { Route, Routes } from 'react-router-dom'

import React from 'react'
import Home from './Home'
import Login from './Login'
import Nav from './Nav'
import Footer from './Footer'
import Quiz from './Quiz'

function App() {
  return (
    <>
      <Nav />
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Quiz" element={<Quiz />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
