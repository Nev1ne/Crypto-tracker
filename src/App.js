import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';



function App() {
  const []

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=kshs&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
    .then(res => {
      setCoins
    })
  })


  return (
    <div className="App">
      <h1>APIII</h1>
    </div>
  );
}

export default App;
