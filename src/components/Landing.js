import React,{useState} from 'react'

import Coin from './Coin'
import styles from './Landing.module.css'
import CoinTitle from './CoinTitle'

const Landing = ({coins}) => {
  const [search,setSearch]=useState('')

  const filteredCoins=coins.filter(item=>item.name.toLowerCase().includes(search.toLowerCase().trim()))
  
  return (
    <div className={styles.landing}>
      <input type="text" placeholder='Search...' className={styles.search} value={search} onChange={event=>setSearch(event.target.value)} />
      <div>
        {coins.length?
          <div className={styles.coins}>
            {filteredCoins.length>0 && <CoinTitle />}
            {filteredCoins.map(item=><Coin key={item.id}
              index={item.market_cap_rank}
              id={item.id}
              name={item.name}
              symbol={item.symbol}
              image={item.image}
              price={item.current_price}
              volume={item.total_volume}
              marketCap={item.market_cap}
              priceChangeOneHour={item.price_change_percentage_1h_in_currency}
              priceChangeOneDay={item.price_change_percentage_24h_in_currency}
              priceChangeOneWeek={item.price_change_percentage_7d_in_currency}
          />)}
          </div>:
          <p>loading</p>
        }
      </div>
    </div>
  )
}

export default Landing