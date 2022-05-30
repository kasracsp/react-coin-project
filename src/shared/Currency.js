import React from 'react'
import styles from './Currency.module.css'

const Currency = ({currency,selectedCurrency,onChangeCurrency,amount,onChangeAmount}) => {

  return (
    <div className={styles.container}>
      <input type="number" min={1} className={styles.input} value={amount} onChange={onChangeAmount}/>
      <select className={styles.select} value={selectedCurrency} onChange={onChangeCurrency} >
        {currency.map(item=><option key={item} value={item} >{item}</option>)}
      </select>
    </div>
  )
}

export default Currency