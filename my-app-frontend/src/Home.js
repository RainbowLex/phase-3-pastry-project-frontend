import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Home.css';

function Home(){
    return(
        <div>
            <Header className='Header'/>
            <p>Home</p>
            <Footer className='Footer'/>
        </div> 
    )
}

export default Home;