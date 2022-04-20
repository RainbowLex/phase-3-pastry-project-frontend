import React, {useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import PastryCard from './PastryCard'; 
import './Pastries.css';

function Pastries() {
    const [search, setSearch] = useState('')
    const [pastry, setPastry] = useState([])
    function handleSubmit(event) {
      event.preventDefault();
  }
    useEffect(()=> {
        fetch(`http://localhost:9292/userrecipes/${search}`)
            .then((resp) => resp.json())
            .then((data) => setPastry(data))
    },[handleSubmit])

    return (
    <div className="Pastries">
      <Header />
      <form onSubmit={handleSubmit}>
        <label id="searchPrompt" for='search'> </label>
        <input type="text" id="search" name='search' value = {search} placeholder="Search a recipe!" onChange={(event)=>{setSearch(event.target.value)}}/>
      </form>
      <div id="pastryList">
        <PastryCard pastry={pastry} setPastry={setPastry}/>
      </div>
      <Footer />
    </div>
  );
}

export default Pastries;