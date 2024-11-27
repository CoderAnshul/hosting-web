import React from 'react'
import './assets/css/bundle-rtl.css'
import './assets/css/style.css'
import './assets/css/slick.min.css'
import './assets/css/bundle.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Newbar from './Components/Newbar'
import Navbar from './Components/Navbar'
import Homepage from './Pages/Homepage'
import Footer from './Components/Footer'
import Ssl from './Pages/Ssl'
import Websitesecurity from './Pages/Websitesecurity'
import Vps from './Pages/Vps'
import Shared from './Pages/Shared'
import { Dedicated } from './Pages/Dedicated'
import Domains from './Pages/Domains'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Terms from './Pages/Terms'

function App() {

  return (
    <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
    >
      <Newbar/>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/ssl' element={<Ssl/>} />
          <Route path='/website-security' element={<Websitesecurity/>} />
          <Route path='/vps' element={<Vps/>} />
          <Route path='/shared' element={<Shared/>} />
          <Route path='/dedicated' element={<Dedicated/>} />
          <Route path='/domain' element={<Domains/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/terms' element={<Terms/>} />
          {/* <Route path='*' element={<PageNotFound/>} />
          <Route path='/institute' element={<Instituepage/>} /> */}
        </Routes>
        {/* <Footer/> */}
        <Footer/>
    </BrowserRouter>
  )
}

export default App
