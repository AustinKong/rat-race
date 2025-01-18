import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [rules, setRules] = useState([
    {
      type: "wordInclusion",
      difficult: 1,
      description: "Word inclusion test 1",
      valid: false
    },
    {
      type: "wordInclusion",
      difficult: 2,
      description: "Word inclusion test 2",
    },
    {
      type: "wordInclusion",
      difficult: 2,
      description: "Word inclusion test 2",
    },
    {
      type: "wordInclusion",
      difficult: 3,
      description: "Word inclusion test 3",
    }
  ]); // Some dummy rules for now

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3000/api/evaluate", {
      text: text,
      rules: [1] // Use rule 1 for now
    }).then(result => console.log(result.data))
    .catch(error => console.log(error))
  }

  return (
    <div className="all">
      <h1 className="title">RatRace🐭</h1>
  
      <div className="container">
        <div className="left">
          {rules.map((rule, index) => (
            <div className="ruleBox" key={index}>
              Difficulty: {rule.difficult} <br/>
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
          Right
        </div>
      </div>
    </div>
  );
  
  
}

export default App;
