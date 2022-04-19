import React,{useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import './Submission.css';

function Submission() {
    const [name, setName] = useState('')
    const [user, setUser] = useState('')
    const [description, setDescription] = useState('')
    const [prepTime, setPrepTime] = useState('')
    const [bakeTime, setBakeTime] = useState('')
    const [totalTime, setTotalTime] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [instructions, setInstructions] = useState('')
    // const postSet = {
    //     method:'POST',
    //     headers: {'Content-Type':'application/json'},
    //     body: JSON.stringify({name, email, content})
    // }
    // function handleSubmit(event) {
    //     event.preventDefault();
    //     fetch('http://localhost:4000/contact', postSet) 
    //     console.log(name, email, content)
    //     window.location.replace("http://localhost:3000/Home")
    //     alert("Thank you for submitting your information!")
    // }
    
    
    return (
        <div>
        <>
        <Header />
        </>
        <p id="subTitle">Submission Form</p>
        <>
            <div className="Submission">
                <form id="container">
                    <label for='name'>Pastry Name: </label>
                    <input type="text" className="allInput" id="name" name='name' value = {name} placeholder="Your pastry name.." onChange={(event)=>{setName(event.target.value)}}/>
                    <br></br>
                    <label for='user'>User: </label>
                    <input type="text" className="allInput" id="user" name='user' value={user} placeholder="Your username.." onChange={(event)=>{setUser(event.target.value)}}/>
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
                    <input type="submit" value="Submit"/> 
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