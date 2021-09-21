import './App.css';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { div } from 'prelude-ls';
import Crypto from './Crypto';

function App() {

  const [crypto,setCrypto] = useState([]);
  const [search,setSearch] = useState('')

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        
        console.log(response.data);
        setCrypto(response.data)
      }catch(error){
        console.error(error)
      }
        
    }
  
    fetchData();
  },[])

  const handleChange = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  const filteredSearch = crypto.filter(crypt => crypt.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="app">
    <div className="header">
      <h1>Crypto Tracker</h1>
      <form >
        <input className='crypto_search' type="text" placeholder='Search Crypto' onChange={handleChange}/>
      </form>
    </div>
      
      {filteredSearch.map((cryptos,index)=>{
        return <Crypto key={cryptos.id} cryptos={cryptos} index={index}/>
        })}
    </div>
  );
}

export default App;
