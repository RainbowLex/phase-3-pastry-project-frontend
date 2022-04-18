import React,{useState } from 'react';
import Footer from './Footer';
import Header from './Header';
// import './Submission.css';

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
        <p>Submission Form</p>
        <>
            <div className="Submission">
                <form >
                    <label for='name'>Full Name</label>
                    <input type="text" id="name" name='name' value = {name} placeholder="Your name.." onChange={(event)=>{setName(event.target.value)}}/>
                    <label for='user'>User</label>
                    <input type="text" id="user" name='user' value={user} placeholder="Your user.." onChange={(event)=>{setUser(event.target.value)}}/>
                    <label for ='description'>Description</label>
                    <textarea id="description" name='content' value ={description} onChange={(event)=>{setDescription(event.target.value)}}></textarea>
                    <label for='prepTime'>Prep Time</label>
                    <input type="text" id="prepTime" name='prepTime' value={prepTime} onChange={(event)=>{setPrepTime(event.target.value)}}/>
                    <label for='bakeTime'>bakeTime</label>
                    <input type="text" id="bakeTime" name='bakeTime' value={bakeTime} onChange={(event)=>{setBakeTime(event.target.value)}}/>
                    <label for='totalTime'>totalTime</label>
                    <input type="text" id="totalTime" name='totalTime' value={totalTime} onChange={(event)=>{setTotalTime(event.target.value)}}/>
                    <label for='ingredients'>ingredients</label>
                    <input type="text" id="ingredients" name='ingredients' value={ingredients} onChange={(event)=>{setIngredients(event.target.value)}}/> 
                    <label for='instructions'>instructions</label>
                    <input type="text" id="instructions" name='instructions' value={instructions} onChange={(event)=>{setInstructions(event.target.value)}}/>  
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