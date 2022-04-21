import React,{useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import './Submission.css';

function Submission() {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [userId, setUserId] = useState('')
    const [rating, setRating] = useState('')
    const [description, setDescription] = useState('')
    const [prepTime, setPrepTime] = useState('')
    const [bakeTime, setBakeTime] = useState('')
    const [totalTime, setTotalTime] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [instructions, setInstructions] = useState('')
    const data = {id:id, name:name, user_id:userId, rating:rating, description:description, prep_time:prepTime, bake_time:bakeTime, total_time:totalTime, ingredients:ingredients, instructions:instructions}
    const postSet = {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)}
    function handleSubmit(event) {
        fetch('http://localhost:9292/create-recipe', postSet)
    }
    
    
    return (
        <div>
        <>
        <Header />
        </>
        <>
            <div className="Submission">
                <form id="container">
                    <label for='id'>Pastry Id: </label>
                    <input type="integer" className="allInput" id="id" name='id' value = {id} placeholder="Your pastry id.." onChange={(event)=>{setId(event.target.value)}}/>
                    <br></br>
                    <label for='name'>Recipe Name: </label>
                    <input type="text" className="allInput" id="name" name='name' value = {name} placeholder="Your pastry name.." onChange={(event)=>{setName(event.target.value)}}/>
                    <br></br>
                    <label for='userId'>User Id(1-5): </label>
                    <input type="integer" className="allInput" id="userId" name='userId' value={userId} placeholder="Your username.." onChange={(event)=>{setUserId(event.target.value)}}/>
                    <br></br>
                    <label for='rating'>Rating(1-5): </label>
                    <input type="integer" className="allInput" id="rating" name='rating' value = {rating} placeholder="Pastry rating.." onChange={(event)=>{setRating(event.target.value)}}/>
                    <br></br>
                    <label for ='description'>Description: </label>
                    <textarea className="allInput" id="description" name='content' value ={description}  placeholder="Write a description.." rows="2" onChange={(event)=>{setDescription(event.target.value)}}/>
                    <br></br>
                    <label for='prepTime'>Prep Time: </label>
                    <input type="text" className="allInput" id="prepTime" name='prepTime' value={prepTime}  placeholder="Enter Prep time.." onChange={(event)=>{setPrepTime(event.target.value)}}/>
                    <br></br>
                    <label for='bakeTime'>Bake Time: </label>
                    <input type="text" className="allInput" id="bakeTime" name='bakeTime' value={bakeTime}  placeholder="Enter Bake time.." onChange={(event)=>{setBakeTime(event.target.value)}}/>
                    <br></br>
                    <label for='totalTime'>Total Time: </label>
                    <input type="text" className="allInput" id="totalTime" name='totalTime' value={totalTime}  placeholder="Enter Total time.." onChange={(event)=>{setTotalTime(event.target.value)}}/>
                    <br></br>
                    <label for='ingredients'>Ingredients: </label>
                    <textarea type="text" className="allInput" id="ingredients" name='ingredients' value={ingredients}  placeholder="Enter Ingredients.." rows="4" onChange={(event)=>{setIngredients(event.target.value)}}/> 
                    <br></br>
                    <label for='instructions'>Instructions: </label>
                    <textarea type="text" className="allInput" id="instructions" name='instructions' value={instructions}  placeholder="Enter Instructions.." rows="4" onChange={(event)=>{setInstructions(event.target.value)}} />  
                    <button id="subButton" type="submit"  onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </>
        <>
        <Footer />
        </>
        </div>
    );
}

export default Submission;