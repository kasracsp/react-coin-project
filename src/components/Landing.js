import React,{useState, useEffect} from 'react'

import Coin from './Coin'
import { getCoin } from '../services/api'
import styles from './Landing.module.css'

const Landing = () => {
  const [coins,setCoins]=useState([])

  useEffect(()=>{
    const fetchCoins=async ()=>{
      const data=await getCoin()
      setCoins(data)
    }
    fetchCoins()
  },[])
  return (
    <div className={styles.landing}>
      <input type="text" />
      <div>
        {/* <Coin 
          index='#'
          id='Name'
          name='Name'
          symbol='Symbol'
          image=''
          price='price'
          volume='24h Volume'
          marketCap='Mkt Cap'
          priceChangeOneHour='1h'
          priceChangeOneDay='24h'
          priceChangeOneWeek='7d'/>         */}
        {coins.length?
          coins.map(item=><Coin key={item.id}
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
          />):
          <p>loading</p>
        }
      </div>
    </div>
  )
}

export default Landing