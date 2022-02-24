import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function App() {
  const [currentCategory, changeCategory] = useState('animal');
  const [anotherOne, addAnotherOne] = useState(0)
  const [joke, changeJoke] = useState('Loading...')
  const handleClick = (e)=>{
    changeCategory(e.target.id);
  }
  useEffect( ()=>{
    axios.get(`https://api.chucknorris.io/jokes/random?category=${currentCategory}`)
    .then((res)=>{
      changeJoke(res.data.value)
    })
    .catch((e)=>{
      alert(e);
    })
  }, [currentCategory, anotherOne])
  return (
    <div className="App">
      <h1 className="App-header">Chuck Norries</h1>
      <div className="joketypes">
        <ul className= "joke-sublist">
        <li className={`joke-category ${(currentCategory==="animal"?"blueBackground":"whiteBackground")}`} id="animal" onClick={handleClick}>Animal</li>
        <li className={`joke-category ${(currentCategory==="career"?"blueBackground":"whiteBackground")}`} id="career" onClick={handleClick}>Career</li>
        <li className={`joke-category ${(currentCategory==="celebrity"?"blueBackground":"whiteBackground")}`} id="celebrity" onClick={handleClick}>Celebrity</li>
        <li className={`joke-category ${(currentCategory==="dev"?"blueBackground":"whiteBackground")}`} id="dev" onClick={handleClick}>Dev</li>
        </ul>
        <ul className= "joke-sublist">
        <li className={`joke-category ${(currentCategory==="explicit"?"blueBackground":"whiteBackground")}`} id="explicit" onClick={handleClick}>Explicit</li>
        <li className={`joke-category ${(currentCategory==="fashion"?"blueBackground":"whiteBackground")}`} id="fashion" onClick={handleClick}>Fashion</li>
        <li className={`joke-category ${(currentCategory==="food"?"blueBackground":"whiteBackground")}`} id="food" onClick={handleClick}>Food</li>
        <li className={`joke-category ${(currentCategory==="history"?"blueBackground":"whiteBackground")}`} id="history" onClick={handleClick}>History</li>
        </ul>
        <ul className= "joke-sublist">
        <li className={`joke-category ${(currentCategory==="money"?"blueBackground":"whiteBackground")}`} id="money" onClick={handleClick}>Money</li>
        <li className={`joke-category ${(currentCategory==="movie"?"blueBackground":"whiteBackground")}`} id="movie" onClick={handleClick}>Movie</li>
        <li className={`joke-category ${(currentCategory==="music"?"blueBackground":"whiteBackground")}`} id="music" onClick={handleClick}>Music</li>
        <li className={`joke-category ${(currentCategory==="political"?"blueBackground":"whiteBackground")}`} id="political" onClick={handleClick}>Political</li>
        </ul>
        <ul className= "joke-sublist">
        <li className={`joke-category ${(currentCategory==="religion"?"blueBackground":"whiteBackground")}`} id="religion" onClick={handleClick}>Religion</li>
        <li className={`joke-category ${(currentCategory==="science"?"blueBackground":"whiteBackground")}`} id="science" onClick={handleClick}>Science</li>
        <li className={`joke-category ${(currentCategory==="sport"?"blueBackground":"whiteBackground")}`} id="sport" onClick={handleClick}>Sport</li>
        <li className={`joke-category ${(currentCategory==="travel"?"blueBackground":"whiteBackground")}`} id="travel" onClick={handleClick}>Travel</li>
        </ul>
      </div>    
      <div>
        Joke Selected: {capitalizeFirstLetter(currentCategory)}
      </div>
      <div id="joke">
        {joke}
      </div>
      <div id="another-one" onClick={()=>{addAnotherOne(anotherOne+1);}}>
        New Joke
      </div>
    </div>
  );
}

export default App;
