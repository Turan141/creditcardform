import React, { FC } from 'react'
import { NavbarComp } from './components/Navbar'
import { Footer } from './components/Footer'
import { CardData } from './components/CardData/CardData'
import './App.css'

const App: FC = () => {
  return (
    <div className="App">
      <NavbarComp />
      <CardData />
      <Footer />
    </div>
  )
}

export default App
