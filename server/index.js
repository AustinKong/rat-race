require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const { evaluateInput } = require('./evaluation');
const { rules } = require('./rules');

const app = express();

app.use(cors());
app.use(express.json());

// Database connection
const db = new sqlite3.Database(`../database/${process.env.DB_NAME}`, (err) => {
  if (err) console.error('Database connection error:', err);
  else console.log('Connected to SQLite database');
});

// Expecting request to have body
/*
  {
    text: "bla bla",
    rules: [1, 2, 3, 4, 5]
  }
*/
app.post('/api/evaluate', (req, res) => {
  try {
    const data = req.body;
    evaluateInput(data.text, data.rules.map(rule => rules.find(r.id === rule)))
      .then(result => res.status(200).json({ rules: result }));
  } catch (error) {
    console.error('Error parsing request body: ', error);
    res.status(400).json({ error: 'Invalid JSON data '});
  }
})

// Will return a rule of the appropriate difficulty level
// So need a currLevel int
app.get('/api/nextlevel', (req, res) => {
  try {
    const data = req.body;
    res.status(200).json({ 
      level: data.level + 1, 
      rule: rules[0]
    })
  } catch (error) {
    console.error('Error parsing request body: ', error);
    res.status(400).json({ error: 'Invalid JSON data '});
  }
})

app.get('/api/leaderboard', (req, res) => {
  db.all('SELECT * FROM player_records SORT_BY score LIMIT 10', [], (err, rows) => {
    if (err) res.status(500).json({ error: err.message });
    else res.status(200).json(rows);
  })
})

app.post('/api/leaderboard', (req, res) => {
  try {
    const data = req.body;
    db.run('INSERT INTO player_records (username, score, time_taken) VALUES (?, ?)', [data.username, data.score, data.time_taken], (err) => {
      res.status(500);
    });
    res.status(200).json({ username: data.username, score: data.score, time_taken: data.time_taken });
  } catch (error) {
    console.error('Error parsing request body: ', error);
    res.status(400).json({ error: 'Invalid JSON data '});
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
