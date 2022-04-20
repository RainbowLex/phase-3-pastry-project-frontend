import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Top from './Top';
import Login from './Login';
import './Home.css';

function Home(){
    return(
        <div id="home" >
            <Header id='header'/>
            {/* <Login id='Login' /> */}
            <Top id='Top'/>
            <Footer id='footer'/>
        </div> 
    )
}

export default Home;