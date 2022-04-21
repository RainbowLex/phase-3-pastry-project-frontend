import React from 'react';
import './Footer.css'; 
import logo from "../src/images/made_with_love.png"


function Footer(){
    return(
        <div id="Footer">
            <footer class="footer">
  {/* <div class="l-footer">
  <h1>
  <img id="footerLogo" src={logo} alt="logo" width="100%" height="100px"/></h1>
  <p>The most amazing pastry database, where you can search for pastries and look at the top rated pastries!</p>
  </div> */}
  <ul class="r-footer">
  <li>
    <h2>
  Alexia's Socials</h2>
    <ul class="box">
    <li><a href="https://www.linkedin.com/in/alexia-velador-67b76a235/">Linkedin</a></li>
    <li><a href="https://github.com/RainbowLex">GitHub</a></li>
    <li><a href="https://www.instagram.com/stwaters92/">Instagram</a></li>
    <li><a href="https://twitter.com/stwaters92/">Twitter</a></li>
  </ul>
  </li>
  <li class="features">
  <h2>
  Sam's Socials</h2>
    <ul class="box">
    <li><a href="https://www.linkedin.com/in/samuel-waters-7a85b590/">Linkedin</a></li>
    <li><a href="https://github.com/darkcohiba">GitHub</a></li>
    <li><a href="https://www.instagram.com/stwaters92/">Instagram</a></li>
    <li><a href="https://twitter.com/stwaters92/">Twitter</a></li>
  </ul>
  </li>
  </ul>
  </footer>
        </div> 
    )
}

export default Footer;