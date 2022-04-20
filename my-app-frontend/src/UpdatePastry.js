import React,{ useState, useEffect } from 'react';
import PastryUpdateCard from './PastryUpdateCard';
import Footer from './Footer';
import Header from './Header';

function UpdatePastry() {
    const [photo, setPhoto] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [pastry, setPastry] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:9292/pastries`)
            .then((resp) => resp.json())
            .then((data) => setPastry(data))
    },[handleChange]) 

    function handleChange(){
        

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
                    <input type="text" className="allInput" id="photo" name='photo' value={photo}  placeholder="Enter Photo Link.." onChange={(event)=>{setPhoto(event.target.value)}}/> 
                    <label for='name'>Pastry Name: </label>
                    <input type="text" className="allInput" id="name" name='name' value = {name} placeholder="Your pastry name.." onChange={(event)=>{setName(event.target.value)}}/>
                    <br></br>
                    <label for ='description'>Description: </label>
                    <textarea className="allInput" id="description" name='content' value ={description}  placeholder="Write a description.." rows="2" onChange={(event)=>{setDescription(event.target.value)}}/>
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