import React,{useContext} from 'react'
import { Link } from 'react-router-dom'

import Coin from './Coin'

//context
import { FavoritesContext } from '../context/FavoritesContextProvider'

//helper
import { favCoins } from '../helper/function'


const Favorites = ({coins}) => {
  const {state,dispatch}=useContext(FavoritesContext)
  
  const fiv=favCoins(coins,state.fav)

  return (
    <div>
      <Link to="/">
        <span className='material-icons'>home</span>
        <p>Back to home</p>
      </Link>
      <div>
        {state && favCoins(coins,state.fav).map(item=>
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
      </div>
    </div>
  )
}

export default Favorites