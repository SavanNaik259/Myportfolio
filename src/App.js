import React from "react";
import Home from "./Home";
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Professional from './Professional';
import External from './Externalservice';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
 import Navbar from "./Navbar";
const App =()=>{
  return (
    <>
      <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path="/contact" element={<Contact/>}/>
      </Routes>
    <Service/>
    <About/>
    <Professional/> 
    <External/>
    <Contact/>
    </>
  );
}

export default App;