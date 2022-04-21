import React, {useState} from 'react';
import './PastryCard.css'; 

function PastryCard({pastry, setPastry}){

    function handleDelete(pastry){
        const url = `http://localhost:9292/delete/${pastry.id}`
        fetch(url,{
            method:'DELETE',
            headers:{'Content-Type':'application/json'}
        })
          .then(res => res.json())
          .then(data => setPastry(data));
        document.location.reload();
    }

    return(
        <div>
            {pastry.map(pastry =>
                <div className="wrapper">
                    <div className="cards_wrap">
                        <div className="card_item">
                            <div className="card_inner">
                                <div className="pastryName" id="inCard">{pastry.name}</div>
                                <div className="pastryRating" id="inCard">Rating: {pastry.rating}</div>
                                <div className="pastryprep" id="inCard">Prep Time: {pastry.prep_time}</div>
                                <div className="pastrybake" id="inCard">Bake Time: {pastry.bake_time}</div>
                                <div className="pastrytotal" id="inCard">Total Time: {pastry.total_time}</div>
                                <div className="desc" id="inCard">{pastry.description}</div>
                                <button className="delete" onClick={() =>handleDelete(pastry)}>Delete</button>
                            </div>
                         </div>
                    </div>
                </div>
            )},
        </div>
    )
}

export default PastryCard;