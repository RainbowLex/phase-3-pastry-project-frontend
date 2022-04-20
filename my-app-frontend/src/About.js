import React from 'react';
import Footer from './Footer';
import Header from './Header';
import './About.css';

function About() {
  return (
    <div className="About">
      <Header />
      <h1>About Sam</h1>
      <img src="https://scontent-den4-1.xx.fbcdn.net/v/t31.18172-8/22136909_10155097896712773_8239575531291997730_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=oQBVqSGuQdsAX-JCzOR&_nc_ht=scontent-den4-1.xx&oh=00_AT9gEx6GBGt9TAzXvzcS-IYOUX0wvKzOcN9GIKSXuh6-MA&oe=626B2AF7" alt="baby hippo" width="250" height="250" />
      <p id="bio">My name is Sam Waters. I have spent the past 10 years planning events, from a small conference to a large Phish concert. After the pandemic hit I spent time working on ways to run events safely and without gathering large groups of people. One of the biggest events we ran at the Denver Botanic Gardens was a plant sale. We sold over 1600 unique products with over 30,000 plants in our inventory. While also figuring out the logistics of getting plants to people, we also had to build a website to sell our plants. I set out on a new journey of website customizing. We created a BigCommerce site and I set out on writing scripts, updating colors through basic css and adding things to our website with code. It was a great first dive into coding and websites.<br></br><br></br>
      Needless to say, this led me into exploring a new career in tech and front end developing. I have already learned so much through my 6 weeks at flatiron and look forward to the next 6 weeks of different work to learn more. Coding is challenging and fun everyday. I am always challenge to go outside the box and figure out new problems. I look forward to every bug and error I get since it is a chance to learn something new.<br></br><br></br>
      I hope to make it into cyber security in my career but am excited to start my tech career in front end development.</p>
      <h1>About Alexia</h1>
      <img  className ="alexiaPhoto"src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e1fd06bf-1b37-489b-ab57-a89c20fc3560/d6izkkq-85155b1e-3f09-494f-9ac5-a36c73d25197.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UxZmQwNmJmLTFiMzctNDg5Yi1hYjU3LWE4OWMyMGZjMzU2MFwvZDZpemtrcS04NTE1NWIxZS0zZjA5LTQ5NGYtOWFjNS1hMzZjNzNkMjUxOTcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Y6a3UkCckCu5KBxb9x9euKAgNPcvEbUHfclCq55IhT4" alt="nicole" width="400" height="250"/>
      <p id="bio">Sup its me </p>


      <Footer />
    </div>
  );
}

export default About;