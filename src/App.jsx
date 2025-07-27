import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Nav from "./Components/Nav"
import Home from "./Pages/Home"
import Register from "./Pages/Form"
import Details from "./Pages/EventDetails"
import Footer from "./Components/Footer"
import All from './Pages/All'

const App = () => {
  return (
    <div>
      <BrowserRouter>

        <Nav />

        <Routes>
          <Route path="/" element={<All />} />

          <Route path="/home" element={<Home />} />
          <Route path="/footer" element={<Footer />} />
          <Route path='/nav' element={<Nav />} />
          <Route path="/register" element={<Register />} />
          <Route path='/about' element={<Details />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
