import React from 'react';
import './PastryCard.css'; 

function PastryUpdateCard({pastry}){
    
    // function handleDelete(pastry){
    //     const name = pastry.name
    //     const url = `http://localhost:9292/recipe/${name}`
    //     fetch(url,{
    //         method:'DELETE',
    //         headers:{'Content-Type':'application/json'}
    //     })
    //       .then(res => res.json())
    //       .then(data => setPastry(data))
    //   }

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
                                <button className="delete">Delete</button>
                            </div>
                         </div>
                    </div>
                </div>
            )},
        </div>
    )
}

export default PastryUpdateCard;