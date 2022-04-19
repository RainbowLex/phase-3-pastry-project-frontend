import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Top from './Top';
import PastryCard from './PastryCard';
import Login from './Login';
import './Home.css';

function Home(){
    return(
        <div id="home" >
            <Header id='header'/>
            <h1 id="homePic">Pastry Database for Pastrie Lovers!</h1>
            {/* <Login id='Login' /> */}
            <Top id='Top'/>
            {/* {<PastryCard id='homeCards'/>} */}
            <Footer id='footer'/>
        </div> 
    )
}

export default Home;