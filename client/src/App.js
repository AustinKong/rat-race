import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const BACKEND_URL = "http://localhost:3000/api/";

function App() {
  const [text, setText] = useState("");
  const [rules, setRules] = useState([]); // Some dummy rules for now
  const [health, setHealth] = useState(5);
  const [score, setScore] = useState(0);

  useEffect(() => {
    getNewRule();
  }, []);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${BACKEND_URL}evaluate`, {
      text: text,
      rules: rules.map(r => r.id)
    })
    .then(result => {
      setHealth(health - result.data.rules.filter(rule => !rule.valid).length);
      setRules(result.data.rules);
      setScore(result.data.rules.filter(rule => rule.valid).length * 10);
      if (!result.data.rules.some(rule => !rule.valid)) {
        getNewRule();
      }
    })
    .catch(error => console.log(error))
  }

  const getNewRule = () => {
    axios.post(`${BACKEND_URL}next`, {
      ruleCount: rules.length
    })
    .then(result => { 
      setRules([...rules, result.data])
    })
    .catch(error => console.log(error));
  }

  return (
    <div className="all">
      <h1 className="title">RatRace🐁🐭🪤</h1>
  
      <div className="container">
        <div className="left">
          {rules.map((rule, index) => (
            <div className="ruleBox" key={index}>
              Difficulty: {rule.difficulty} <br/>
              Description: {rule.description}
            </div>
          ))}
        </div>
  
        <div className="center">
          <div className="center-content">
            <h2 className="center-content-text">Hustling for the cheese🪤</h2>
            <form onSubmit={handleSubmit}>
              <textarea className="text-area" placeholder="Enter your text here..." value={text} onChange={handleChange}></textarea>
              <div className="action-buttons">
                <button className="post-button" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
  
        <div className="right">
          Score: {score} <br/>
          health: {health} <br/>
        </div>
      </div>
    </div>
  );
  
  
}

export default App;
