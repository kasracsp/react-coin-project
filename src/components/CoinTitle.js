import React from 'react'
import styles from './CoinTitle.module.css'

const CoinTitle = () => {
  return (
    <div className={styles.container}>
      <p className={styles.index}>#</p>
      <div className={styles.title}>
        <span className={styles.thumb}></span>
        <p className={styles.name}>Coin</p>
        <p className={styles.abbreviation}></p>
      </div>
      <p className={styles.price}>Current Price</p>
      <p className={styles.oneHourchanges}>1h</p>
      <p className={styles.changes}>24h</p>
      <p className={styles.changes} >7d</p>
      <p className={styles.volume}>Volume</p>
      <p className={styles.marketCap}>Mkt Cap</p>
    </div>
  )
}

export default CoinTitle