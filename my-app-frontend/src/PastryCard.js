import React from 'react';
import './PastryCard.css'; 

function PastryCard({pastry, setPastry}){
    
    function handleDelete(pastry){
        const name = pastry.name
        const url = `http://localhost:9292/recipe/${name}`
        fetch(url,{
            method:'DELETE',
            headers:{'Content-Type':'application/json'}
        })
          .then(res => res.json())
          .then(data => setPastry(data))
      }

    return(
        <div>
            {pastry.map(pastry =>
                <div className="wrapper">
                    <div className="cards_wrap">
                        <div className="card_item">
                            <div className="card_inner">
                                <div className="pastryName">{pastry.name}</div>
                                <div className="pastryRating">Rating: {pastry.rating}</div>
                                <div className="pastryprep">{pastry.prep_time}</div>
                                <div className="pastrybake">{pastry.bake_time}</div>
                                <div className="pastrytotal">{pastry.total_time}</div>
                                <div className="desc">{pastry.description}</div>
                                <button className="delete" onClick={handleDelete}>Delete</button>
                            </div>
                         </div>
                    </div>
                </div>
            )},
        </div>
    )
}

export default PastryCard;