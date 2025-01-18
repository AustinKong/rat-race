import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/example')
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="all">
      <h1 className="title">RatRace🐭</h1>
  
      <div className="container">
        <div className="left">
          <div className="ruleBox">
            box1
          </div>
        </div>
  
        <div className="center">
          <div className="center-content">
            <h2 className="center-content-text">Hustling for the cheese 🪤</h2>
            <textarea className="text-area" placeholder="Enter your text here..."></textarea>
            <div className="action-buttons">
              <button className="post-button">Submit</button>
            </div>
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
