import React, {useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import './Pastries.css';

function Pastries() {
    const [search, setSearch] = useState('')
    return (
    <div className="Pastries">
      <Header />
      <label id="searchPrompt" for='search'>Search Pastries: </label>
      <input type="text" id="search" name='search' value = {search} placeholder="Search a pastry!" onChange={(event)=>{setSearch(event.target.value)}}/>
      <Footer />
    </div>
  );
}

export default Pastries;