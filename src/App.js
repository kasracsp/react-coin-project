import React,{useState, useEffect} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './components/Landing'
import './App.css'
import { getCoin } from './services/api'

export const DarkModeContext=React.createContext()

const App = () => {
  const [coins,setCoins]=useState([])

  const [darkmode,setDarkmode]=useState(false)
  const changeDarkMode=()=>{
    setDarkmode(!darkmode)
  }

  useEffect(()=>{
    const fetchCoins=async ()=>{
      const data=await getCoin()
      setCoins(data)
    }
    fetchCoins()
  },[])

  return (
      <div className='app' id={darkmode ? 'darkMode' : ''}>
        <DarkModeContext.Provider value={{darkmode,changeDarkMode}}>
          <Landing coins={coins}/>
        </DarkModeContext.Provider>
      </div>
  )
}

export default App