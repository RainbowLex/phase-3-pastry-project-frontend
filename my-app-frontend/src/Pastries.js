import React, {useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import PastryCard from './PastryCard'; 
import './Pastries.css';

function Pastries() {
    const [search, setSearch] = useState('')

    return (
    <div className="Pastries">
      <Header />
      <label id="searchPrompt" for='search'> </label>
      <input type="text" id="search" name='search' value = {search} placeholder="Search a pastry!" onChange={(event)=>{setSearch(event.target.value)}}/>
      <div id="pastryList">
        <PastryCard />
      </div>
      <Footer />
    </div>
  );
}

export default Pastries;