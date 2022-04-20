import React, {useState, useEffect} from 'react';
import PastryCard from './PastryCard';
import './Top.css'; 


function Top(){

    const [pastry, setPastry] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:9292/top`)
            .then((resp) => resp.json())
            .then((data) => setPastry(data))
    },[])
    return(
        <div id="top">
            <h1 id="header">Our Top Rated Recipes!</h1>
            <PastryCard pastry={pastry} id="card"/>
        </div> 
    )
}

export default Top;