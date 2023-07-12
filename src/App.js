import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';



function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=kshs&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
    .then(res => {
      setCoins(res.data);
      console.log(res.data);
    }).catch(error => console.log(error));
  }, []);



   const handleChange = e => {
    setSearch(e.target.value)
   }

const filteredCoins = coins.filter(coin =>
  coin.name.toLowerCase().includes(search.toLowerCase(0))
  )

  return (
    <div className='coin-app'>
      <div className='coin-search'>
          <h1 className='coin-text'>Search a currency</h1>
            <form>
              <input type='text' placeholder='Search' className='coin-input' onChange={handleChange}/>
            </form>
      </div>

     {filteredCoins.map(coin => {
      return (
        <Coin key={coin.id}
      )
     })} 

    </div>
    
  );
}

export default App;
