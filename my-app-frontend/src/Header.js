import React from 'react';
import './Header.css'; 
import logo from "../src/images/made_with_love.png"

function Header(){
    function takeHome(){
        window.location.replace("http://localhost:3000/Home")
    }
    return(
        <div id="Header">
            <nav className="navBar"> 
                <a className ='navLink' href="./Home" >Home<br></br></a> 
                <a className ='navLink' href="./Pastries" >Recipes<br></br></a> 
                <a className ='navLink' href="./Submission">Submit<br></br></a>
                <a className ='navPast' href="./UpdatePastry">Update a Pastry<br></br></a>
                <a className ='navLink' href="./About">About<br></br></a>
            </nav>
            <img className="headerImage" src={logo} alt="Logo" onClick={takeHome}></img>                                                    
        </div>
   )
}
export default Header;