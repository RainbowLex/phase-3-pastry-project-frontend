import React from 'react';
import Home from './Home';
import About from './About';
import Submission from './Submission';
import Pastries from './Pastries';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return(
    <div>
      <Router>
      <Routes>
      <Route path= "/"  element = {<Home/>} />
      <Route path= "/home"  element = {<Home/>} />
      <Route path="/pastries" element = {<Pastries/>}/>
      <Route path="/submission" element = {<Submission/>}/>
      <Route path="/about" element = {<About/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
