const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const { evaluateInput } = require('./evaluation');
const { rules } = require('./rules');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Database connection
const db = new sqlite3.Database('../database/database.db', (err) => {
  if (err) console.error('Database connection error:', err);
  else console.log('Connected to SQLite database');
});

// Example API endpoint
app.get('/api/example', (req, res) => {
  db.all('SELECT * FROM player_records', [], (err, rows) => {
    console.log(evaluateInput("I is happy today to be in Hack n Roll", [rules[0]]))
    if (err) res.status(500).json({ error: err.message });
    else res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
