import React,{useState, useEffect} from 'react'
import Landing from './components/Landing'
import './App.css'
import { getCoin } from './services/api'

const App = () => {
  const [coins,setCoins]=useState([])

  useEffect(()=>{
    const fetchCoins=async ()=>{
      const data=await getCoin()
      setCoins(data)
    }
    fetchCoins()
  },[])
  return (
    <div className='app'>
      <Landing coins={coins}/>
    </div>
  )
}

export default App