import { useState } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer/footer'
import Home from './pages/Home/home'
import About from './pages/About/about'
import BusTicket from './pages/Home/ticket/ticket'
import BusDetails from './pages/ticket/details/details'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <>
    <Router>
      <main className='w-full flex flex-col bg-neutral-50 min-h-screen'>
        {/* navbar */}
        <Navbar/>

        {/* routes */}
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/busTicket' element={<BusTicket/>} />
            <Route path='/busDetails' element={<BusDetails/>} />
          </Routes>

        {/* footer */}
        <Footer/>
      </main>
  
    </Router>
    </>
  )
}

export default App
