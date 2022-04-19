import React from "react";

function PastryCard({name, image}) {
  
     return (
        <div id="homeCards">
       <li className="card">
         <img src={image} alt={name} />
         <h4>{name}</h4>
      </li>
         </div> 
    );
  }

export default PastryCard;