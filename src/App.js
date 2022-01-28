import React from 'react'
import NavMenu from './components/NavMenu'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer'



export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Routes>
          <Route  path="/Projects" element={<Projects/>} />
          <Route  path="/Skills" element={<Skills />} />
          <Route  path="/Contact" element={<Contact />} />
        <Route  path="/" element={<Home />} />



        </Routes>
        <Footer />
      </Router>
    </>
  )
}
 