import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/example')
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>React + Express + SQLite</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>Name: {item.username}, Score: {item.score}, Time: {item.time_taken} seconds</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
