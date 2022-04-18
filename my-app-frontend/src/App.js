import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return(
    <div>
      <Router>
      <Routes>
      <Route path= "/"  element = {<Home/>} />
      <Route path= "/home"  element = {<Home/>} />
      <Route path="/about" element = {<About/>}/>
      <Route path="/contact" element = {<Contact/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
