import React from 'react';
import './Header.css'; 

function Header(){
    return(
        <div id="Header">
            <nav className="navBar"> 
                <a className ='navLink' href="./Home" >Home<br></br></a> 
                <a className ='navLink' href="./About">About<br></br></a>
                <a className ='navLink' href="./Contact">Contact<br></br></a>
            </nav>
            <img className="headerImage" src="https://th.bing.com/th/id/R.98e33e37236c8764c3a1c69ec17a7735?rik=Dq%2ffGDRuTxd3UQ&riu=http%3a%2f%2fheritagebiblechapel.org%2fwp-content%2fuploads%2f2019%2f06%2fhorizontal-logo-png.png&ehk=IaH8dS9OKNsZaV%2flwR9jy83inGZ%2bm%2fWRR6Fxw1%2bYITo%3d&risl=&pid=ImgRaw&r=0" alt="Logo" width="130px" height="83px"></img>
            <p id="title">Postre Delicia</p>                                                        
        </div>
   )
}

export default Header;