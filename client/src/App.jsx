import { useState } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer/footer'
import Home from './pages/Home/home'
import About from './pages/About/about'
import BusTicket from './pages/Home/ticket/ticket'
import BusDetails from './pages/ticket/details/details'
import CheckOut from './pages/ticket/checkOut/checkout'
import Invoice from './pages/ticket/invoice/ticketPrint'
import Service from './pages/service/service'
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
            <Route path='/service' element={<Service/>} />
            <Route path='/busTicket' element={<BusTicket/>} />
            <Route path='/busDetails' element={<BusDetails/>} />
            <Route path='/busTicket/checkout' element={<CheckOut/>} />
            <Route path='/busTicket/payment' element={<Invoice/>} />
          </Routes>

        {/* footer */}
        <Footer/>
      </main>
  
    </Router>
    </>
    
  )
}

export default App
