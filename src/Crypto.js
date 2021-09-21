import React from 'react'
import './Crypto.css'

function Crypto({cryptos,index}) {
  return (
    <div className='cryptos'>
      {/* <h3>{cryptos.market_cap_rank}</h3> */}
      <img className='cryptos_img' src={cryptos.image} alt="" />
      <p className='cryptos_name'>{cryptos.name}</p>
      <p className='cryptos_symbol'>{cryptos.symbol}</p>
      <p className='cryptos_current_price'>${cryptos.current_price.toLocaleString()}</p>
      <p className='cryptos_market_cap'>${cryptos.market_cap.toLocaleString()}</p>
      <p className={(cryptos.price_change_24h < 0) ? 'price_red':'price_green'}>{cryptos.price_change_24h.toFixed(2)}</p>
      <p className={(cryptos.price_change_percentage_24h < 0) ? 'price_red':'price_green'}>{cryptos.price_change_percentage_24h.toFixed(2)}%</p>
    </div>
  )
}

export default Crypto
