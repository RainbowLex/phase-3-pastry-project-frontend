import React,{ useState, useEffect } from 'react';
import PastryUpdateCard from './PastryUpdateCard';
import Footer from './Footer';
import Header from './Header';

function UpdatePastry() {
    const [updatedPhoto, setUpdatedPhoto] = useState('')
    const [updatedName, setUpdatedName] = useState('')
    const [updatedDescription, setUpdatedDescription] = useState('')
    const [pastry, setPastry] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:9292/pastries`)
            .then((resp) => resp.json())
            .then((data) => setPastry(data))
    },[handleChange]) 

    function handleChange(e){
        e.preventDefault();
        const name = pastry.name
        const updatedPastry = {
            photo: updatedPhoto,
            name: updatedName,
            description: updatedDescription,
        }
        fetch(`http://localhost:9292/recipe/${name}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedPastry),
        })
        console.log(updatedPastry);
    }
    

    return (
        <div>
        <>
        <Header />
        </>
        <>
            <div>
                <form id="container">
                    <h1>Update a Pre-existing Pastry:</h1>
                    <label for='photo'>Photo Link: </label>
                    <input type="text" className="allInput" id="photo" name='photo' value={updatedPhoto}  placeholder="Enter Photo Link.." onChange={(event)=>{setUpdatedPhoto(event.target.value)}}/> 
                    <label for='name'>Pastry Name: </label>
                    <input type="text" className="allInput" id="name" name='name' value = {updatedName} placeholder="Your pastry name.." onChange={(event)=>{setUpdatedName(event.target.value)}}/>
                    <br></br>
                    <label for ='description'>Description: </label>
                    <textarea className="allInput" id="description" name='content' value ={updatedDescription}  placeholder="Write a description.." rows="2" onChange={(event)=>{setUpdatedDescription(event.target.value)}}/>
                    <br></br>
                    <input type="submit" value="Submit" onClick={handleChange} /> 
                </form>
            </div>
            <PastryUpdateCard pastry={pastry} />
        </>
        <>
        <Footer />
        </>
        </div>
    );
}

export default UpdatePastry;