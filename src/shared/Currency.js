import React from 'react'
import styles from './Currency.module.css'
import CustomSelector from './CustomSelector'

const Currency = ({currency,selectedCurrency,onChangeCurrency,amount,onChangeAmount}) => {

  return (
    <div className={styles.container}>
      <input type="number" min={1} className={styles.input} value={amount} onChange={onChangeAmount}/>
      <CustomSelector currency={currency} selectedCurrency={selectedCurrency}
      onChangeCurrency={onChangeCurrency}/>
    </div>
  )
}

export default Currency