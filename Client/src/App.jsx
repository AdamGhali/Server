import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from './Register';

import Navbar from './Navbar';
import About from './About';
import Booking from './Booking';
import Home from './Home';
import Welcome from './components/welcome';
 

const App = () => {
  return (
    <BrowserRouter>
    <Routes>  
    <Route path="/" element={<Navbar  />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/about" element={<About />} />
         <Route path="/booking" element={<Booking />} />
         <Route path="/home" element={<Home />} />
         <Route path="/welcome" element={<Welcome/>} />
  
        
       
         
    </Routes>
    </BrowserRouter>
  )
}

export default App
