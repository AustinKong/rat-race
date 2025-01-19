import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import ratDancing from './rat-dancing.gif';
import ratSpinning from './rat-spinning.gif';
import sadMouse from './sad-mouse.gif';

const BACKEND_URL = "http://localhost:3001/api/";

const Leaderboard = ({ score, text }) => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [username, setUsername] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    axios.get(`${BACKEND_URL}leaderboard`)
      .then(result => setLeaderboard(result.data))
      .catch(error => console.log(error));
  }, []);

  const submitForm = (event) => {
    event.preventDefault();
    axios.post(`${BACKEND_URL}leaderboard`, {
      username: username,
      score: score,
      time_taken: 0
    })
    .then(result => {
      setUsername("")
      setSubmitted(true);
      axios.get(`${BACKEND_URL}leaderboard`)
        .then(result => setLeaderboard(result.data))
        .catch(error => console.log(error));
      })
    .catch(error => console.log(error));
  }

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <div className="horizontal-line" />
      <ul className='leaderboard-list'>
        {leaderboard.map((user, index) => {
          return (
            <li className="leaderboard-entry" key={index}>
              <div className="rank">{index + 1}</div>
              <div className="user-info">
                <h4>{user.username}</h4>
                <p>{user.score} points</p>
              </div>
            </li>
          )
        })}
      </ul>
      <div className="horizontal-line" />
      <h2 className="score">You've lost the rat race, you scored: {score} points 🎊</h2>
      <h3>Your masterpiece:</h3>
      <div className="post">
        <p>
          "{text}"
        </p>
      </div>
      <div className="horizontal-line" />
      <div className="name-submission">
        <div className="brainrot-images">
          <img src={ratDancing} />
          <img src={ratSpinning} />
          <img src={sadMouse} />
        </div>
        {
          !submitted && (
            <>
              <p>Enter your username to submit your score to the leaderboard:</p>
              <form className="name-form" onSubmit={submitForm}>
                <input type="text" className="name-textbox" value={username} onChange={(event) => setUsername(event.target.value)}/>
                <button type="submit" className="button">
                  Submit
                </button>
              </form>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Leaderboard;