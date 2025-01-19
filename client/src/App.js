import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { FiSearch } from 'react-icons/fi';
import { AiFillHome, AiOutlineClockCircle } from 'react-icons/ai'; // Home icon
import { GiArtificialIntelligence } from 'react-icons/gi';
import { IoPeopleOutline } from 'react-icons/io5'; // My Network icon
import { BsBriefcase } from 'react-icons/bs'; // Jobs icon
import { RiMessage2Line } from 'react-icons/ri'; // Messaging icon
import { IoNotificationsOutline } from 'react-icons/io5'; // Notifications icon

import imgMath204 from './gameImages/Math204.jpg';
import imgMath205 from './gameImages/Math205.jpg';
import imgCaptchaHustle from './gameImages/captcha-hustle.jpg';
import imgCaptchaInsights from './gameImages/captcha-insights.jpg';
import imgCaptchaReflect from './gameImages/captcha-reflect.jpg';
import imgCaptchaResilient from './gameImages/captcha-resilient.png';


import Leaderboard from './leaderboard/Leaderboard';
import rulesGif from './rules.gif';
import cook from './cook.gif';
import loadingGif from './loading.gif';

const BACKEND_URL = "http://localhost:3001/api/";

function App() {
  const [text, setText] = useState("");
  const [rules, setRules] = useState([
    {
      type: 'grammarCheck',
      valid: false,
      description: 'Checks whether grammar is valid.'
    },
    {
      type: 'contextCheck',
      valid: false,
      description: 'Checks whether your text fits in the context of LinkedIn post.'
    },
  ]);
  const [health, setHealth] = useState(8);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [scoreIsPopping, setScoreIsPopping] = useState(false);
  const [healthIsPopping, setHealthIsPopping] = useState(false);
  const [rulesIsShaking, setRulesIsShaking] = useState(false);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    axios.post(`${BACKEND_URL}evaluate`, {
      text: text,
      rules: rules.filter(r => r.id !== null).map(r => r.id)
    })
      .then(result => {
        setHealth(health - (result.data.rules.some(rule => !rule.valid) ? 1 : 0));
        setRules(result.data.rules);
        setScore(score + result.data.rules.filter(rule => rule.valid).length * 10);
        setLoading(false);

        if (result.data.rules.filter(rule => rule.valid).length > 0) {
          setScoreIsPopping(true);
          setTimeout(() => {
            setScoreIsPopping(false);
          }, 300);
        }
        if (result.data.rules.some(rule => !rule.valid)) {
          setHealthIsPopping(true);
          setTimeout(() => {
            setHealthIsPopping(false);
          }, 300);
          setRulesIsShaking(true);
          setTimeout(() => {
            setRulesIsShaking(false);
          }, 300);
        }
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getNewRule();
  }, []);

  useEffect(() => {
    if (!rules.some(rule => !rule.valid)) {
      getNewRule();
    }
  }, [rules]);

  const getNewRule = () => {
    setLoading(true);
    axios.post(`${BACKEND_URL}next`, {
      ruleCount: rules.length
    })
      .then(result => {
        setRules([...rules, result.data])
        setLoading(false);
      })
      .catch(error => console.log(error));
  }

  const getGameImage = (rule) => {
    if (rule) {
      switch (rule.id) {
        case 124:
          return imgCaptchaResilient;
        case 204:
          return imgMath204;
        case 205:
          return imgMath205;
        case 213:
          return imgCaptchaHustle;
        case 214:
          return imgCaptchaInsights;
        case 215:
          return imgCaptchaReflect;                        
        default:
          return null;
      }
    }
  }

  if (health <= 0) {
    return (
      <Leaderboard score={score} text={text} />
    )
  }

  return (
    <div className="all">
      {loading && (
        <div className="loading">
          <img src={loadingGif}/>
        </div>
      )}
      <div className="navbar">
        <div className="navbar-left">
          <h2 className="title">
            🐭 RatRace
          </h2>
          <div className="searchbar">
            <input type="text" className="search-input" placeholder="Search" />
            <button type="submit" className="search-button">
              <FiSearch className="search-icon" />
            </button>
          </div>
        </div>
        <div className="navbar-right">
          <div className="nav-item">
            <AiFillHome className="nav-icon" />
            <span>Home</span>
          </div>
          <div className="nav-item">
            <IoPeopleOutline className="nav-icon" />
            <span>My Network</span>
            <span className="notification-badge">1</span>
          </div>
          <div className="nav-item">
            <BsBriefcase className="nav-icon" />
            <span>Jobs</span>
          </div>
          <div className="nav-item">
            <RiMessage2Line className="nav-icon" />
            <span>Messaging</span>
          </div>
          <div className="nav-item">
            <IoNotificationsOutline className="nav-icon" />
            <span>Notifications</span>
            <span className="notification-badge">2</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="leftContainer">
          <div className={`left`}>
            {rules.map((rule, index) => (
              <div className={`ruleBox vibrate-text ${(rulesIsShaking && !rule.valid) ? "vibrate" : ""}`} key={index}
                style={{
                  border: rule.valid ? '1px solid #4CAF50' : '1px solid #AF4A50'
                }}>
                <div className="ruleBoxHeader" style={{
                  backgroundColor: rule.valid ? '#dfffd6' : '#ffd6df',
                  color: rule.valid ? '#4CAF50' : '#AF4A50'
                }}>
                  Rule {index + 1}
                </div>
                <div className="ruleBoxDescription" style={{
                  backgroundColor: rule.valid ? '#a8e6a8' : '#e6a8a8'
                }}>
                  {rule.description}
                  {<img src={getGameImage(rule)} style={{ width: "100%", marginTop: "4px"}} />}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="center">
          <h1 className="center-content-text">Hustling for the cheese🪤</h1>
          <div className="gameInfo">
            <div className={`gameScore pop-text ${scoreIsPopping ? "pop" : ""}`}>
              <p>Score: {score}🧀</p>
            </div>

            <div className={`gameHealth pop-text ${healthIsPopping ? "pop" : ""}`}>
              Health:
              <span style={{ marginLeft: "10px" }}>
                {Array.from({ length: health }, (_, index) => (
                  <span key={index} style={{ fontSize: "20px", marginRight: "2px" }}>
                    ❤️
                  </span>
                ))}
              </span>
            </div>
          </div>


          <form onSubmit={handleSubmit}>
            <textarea className="text-area" placeholder="Enter your text here..." value={text} onChange={handleChange} />
            <div className="action-buttons">
              <GiArtificialIntelligence />
              <AiOutlineClockCircle />
              <button className="button" type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="right">
          <img src={rulesGif} />
          <img src={cook} />
        </div>
      </div>
    </div>
  );
}

export default App;
