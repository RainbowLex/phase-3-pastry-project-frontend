import React from 'react';
import './PastryCard.css'; 

function PastryCard(){
    return(
        <div class="wrapper">
	<div className="header">Top Rated Pastries</div>
        <div className="cards_wrap">
            <div className="card_item">
                <div className="card_inner">
                    <img src="https://64.media.tumblr.com/avatar_810cd8c5a15e_128.pnj"/>
                    <div className="pastryName">Cannoli</div>
                    <div className="username">AlexiaRocks</div>
                    <div className="desc">Cannoli are Italian pastries consisting of tube-shaped shells of fried pastry dough, 
                    filled with a sweet, creamy filling usually containing ricotta.</div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PastryCard;