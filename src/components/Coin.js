import React, { useContext } from 'react'
import styles from './Coin.module.css'

//context
import { FavoritesContext } from '../context/FavoritesContextProvider';

//helper
import { isInFav } from '../helper/function';

const Coin = (props) => {
  const {index,id,name,symbol,image,price,volume,marketCap,priceChangeOneHour,priceChangeOneDay,priceChangeOneWeek}=props

  const {state,dispatch}=useContext(FavoritesContext)
  return (
    <div className={styles.container}>
      <div className={styles.numberSection}>
        <div className={styles.favSection}>
          <input type="checkbox" id={id} checked={isInFav(state.fav,id)? true : false} onChange={()=>dispatch({type:'ADD_FAV',payload:id})} />
          <label htmlFor={id} className='material-icons'>star</label>
        </div>
        <p className={styles.index}>{index}</p>
      </div>
      <div className={styles.title}>
        <img src={image} alt={name} className={styles.thumb}/>
        <p className={styles.name}>{name.toUpperCase()}</p>
        <p className={styles.abbreviation}>{symbol.toUpperCase()}</p>
      </div>
      <p className={styles.price}>$ {price.toLocaleString()}</p>
      <p className={priceChangeOneHour>0?styles.green:styles.red}>{priceChangeOneHour.toFixed(2)}</p>
      <p className={priceChangeOneDay>0?styles.green:styles.red} id={styles.oneDayChange}>{priceChangeOneDay.toFixed(2)}</p>
      <p className={priceChangeOneWeek>0?styles.green:styles.red} id={styles.oneWeekChange} >{priceChangeOneWeek.toFixed(2)}</p>
      <p className={styles.volume}>$ {volume.toLocaleString()}</p>
      <p className={styles.marketCap}>$ {marketCap.toLocaleString()}</p>
    </div>
  )
}

export default Coin