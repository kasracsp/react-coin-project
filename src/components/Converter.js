import React,{useState,useEffect} from 'react'
import { getCurrency } from '../services/api'
import Currency from '../shared/Currency'
import styles from './Converter.module.css'
import axios from 'axios'

const Converter = () => {
  const [currency,setCurrency]=useState([])
  const [fromcurrency,setFromCurrency]=useState()
  const [tocurrency,setToCurrency]=useState()
  const [amount,setAmount]=useState(1)
  const [amountInFromCurrency,setAmountInFromCurrency]=useState(true)
  const [exchangeRate,setExchangeRate]=useState()

  let toAmount,fromAmount
  if(amountInFromCurrency){
    fromAmount=amount
    toAmount=amount * exchangeRate
  }else{
    toAmount=amount
    fromAmount=amount / exchangeRate
  }

  useEffect(()=>{
    if(fromcurrency != null && tocurrency != null){
      axios.get(`https://api.currencyapi.com/v3/latest?apikey=VfGvJGonbxGSBbOaWNOb5GFF5CjV2O3FYNyeHmZU&currencies=${tocurrency}&base_currency=${fromcurrency}`)
      .then(response=>setExchangeRate(Object.values(response.data.data)[0].value))
    }
  },[fromcurrency,tocurrency])

  useEffect(()=>{
    const fetchCurrency=async ()=>{
      const response=await getCurrency()
      setCurrency(Object.keys(response))
      setFromCurrency('USD')
      setToCurrency(Object.keys(response)[0])
      setExchangeRate(Object.values(response)[0].value)
    }
    fetchCurrency()
  },[])

  const handleFromAmountChange=(e)=>{
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }
  const handleToAmountChange=(e)=>{
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }

  return (
    <div className={styles.wrapper}>
      {currency.length?
      <div className={styles.container}>
        <h1 className={styles.intro}>Convert</h1>
        <Currency
          currency={currency}
          selectedCurrency={fromcurrency}
          onChangeCurrency={e=>setFromCurrency(e.target.value)}
          amount={fromAmount}
          onChangeAmount={handleFromAmountChange}
        />
        <h1>=</h1>
        <Currency
          currency={currency}
          selectedCurrency={tocurrency}
          onChangeCurrency={e=>setToCurrency(e.target.value)}
          amount={toAmount}
          onChangeAmount={handleToAmountChange}
        />  
      </div>:
      <p>loading...</p>
      }
      
    </div>
  )
}

export default Converter
