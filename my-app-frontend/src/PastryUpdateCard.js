import React from 'react';
import './PastryCard.css'; 

function PastryUpdateCard({pastry}){


    return(
        <div>
            {pastry.map(pastry =>
                <div className="wrapper">
                    <div className="cards_wrap">
                        <div className="card_item">
                            <div className="card_inner">
                                <img className="pastryPhoto" src={pastry.photo}/>
                                <div className="pastryName">{pastry.name}</div>
                                <div className="desc">{pastry.description}</div>
                            </div>
                         </div>
                    </div>
                </div>
            )},
        </div>
    )
}

export default PastryUpdateCard;