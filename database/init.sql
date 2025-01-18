DROP TABLE IF EXISTS example_table;

CREATE TABLE IF NOT EXISTS player_records (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    score INTEGER NOT NULL,
    time_taken INTEGER NOT NULL
);

INSERT INTO player_records (username, score, time_taken) VALUES ('Quackers', 1000, 800);