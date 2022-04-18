import React,{useState } from 'react';
import Footer from './Footer';
import Header from './Header';
// import './Contact.css';

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [content, setContent] =useState('')
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
        <p>Contact Form</p>
        <>
            <div className="Contact">
                <form >
                    <label for='name'>Full Name</label>
                    <input type="text" id="name" name='name' value = {name} placeholder="Your name.." onChange={(event)=>{setName(event.target.value)}}/>
                    <label for='email'>Email Address</label>
                    <input type="text" id="email" name='email' value={email} placeholder="Your email.." onChange={(event)=>{setEmail(event.target.value)}}/>
                    <label for ='comments'>Comments/Complaints</label>
                    <textarea id="Comments" name='content' value ={content} onChange={(event)=>{setContent(event.target.value)}} placeholder="Comments/Complaints"rows ="4"></textarea> 
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

export default Contact;