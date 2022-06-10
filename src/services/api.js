import axios from "axios"

const BASE_COIN_URL='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d'

const getCoin=async ()=>{
  const coinResponse=await axios.get(BASE_COIN_URL)
  return coinResponse.data
}

const BASE_CURRENCY_URL='https://api.currencyapi.com/'

const getCurrency=async ()=>{
  const currencyResponse=await axios.get(`${BASE_CURRENCY_URL}v3/latest?apikey=${
process.env.REACT_APP_CURRENCY_API_KEY}`) 
return currencyResponse.data.data
}

export {getCoin,getCurrency}