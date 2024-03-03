import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Menu from './components/Menu'
function App() {

  return (
    <>
      <Navbar />
      <Menu />
      <Footer />
    </>
  )
}

export default App
