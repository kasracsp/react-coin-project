import React,{useContext} from 'react'
import { Link } from 'react-router-dom'

import Coin from './Coin'
import CoinTitle from './CoinTitle'
import Loading from '../shared/Loading';
import styles from './Favorites.module.css'

//context
import { FavoritesContext } from '../context/FavoritesContextProvider'
import { CoinsContext } from '../context/CoinsContextProvider'

//helper
import { favCoins } from '../helper/function'

const Favorites = () => {
  const {state,dispatch}=useContext(FavoritesContext)
  const {coinsState}=useContext(CoinsContext)

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Link to="/" className={styles.backToHome}>
          <span className='material-icons'>home</span>
          <p>Back to home</p>
        </Link>
        <button className={styles.clear} onClick={()=>dispatch({type:'CLEAR'})}>
          Clear All
        </button>
      </div>
      {coinsState.loading ?
        <Loading />:
        state.fav.length ?
          <div className={styles.favorite}>
            <CoinTitle />
            {favCoins(coinsState.coins,state.fav).map(item=>
            <Coin key={item.id}
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
          />
          )}
          </div>:
          <div className={styles.attention}>
            <h3>Didn't you add your favorite coins yet?</h3>
            <h4>Go back to home and click on star</h4>
          </div>
      }
    </div>
  )
}

export default Favorites