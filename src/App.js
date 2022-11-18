import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {


  const [jokes, setJokes] = useState("");

  const getData = () => {
    axios
      .get(
        `https://api.chucknorris.io/jokes/random`
      )
      .then((res) => {
        console.log(res.data);
        setJokes(res.data);
      });
  };
  
  useEffect(() => {
    getData();
  }, []);

  console.log("Jokes:", jokes)

  return (
    <div className="App">
      <header><h1>Chuck Norris Facts</h1></header>
      <img src="https://avatars.githubusercontent.com/u/17794049?s=280&v=4" alt="" />
      <h2><q>{jokes.value}</q></h2>
      <button onClick={getData}>Get Another Fact</button>
    </div>
  );
}

export default App;
