import { Route, Routes } from 'react-router-dom'

import React from 'react'
import Home from './Home'
import Login from './Login'
import Nav from './Nav'
import Footer from './Footer'

function App() {
  return (
    <>
      <Nav />
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Home" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
