import React,{useState, useEffect} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { getCoin } from './services/api'

//context
import FavoritesContextProvider from './context/FavoritesContextProvider'

//components
import Navbar from './shared/Navbar'
import Landing from './components/Landing'
import Converter from './components/Converter'
import './App.css'
import Favorites from './components/Favorites'

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
    fetchCoins().catch(error=>console.log(error))
  },[])

  return (
      <div className='app' id={darkmode ? 'darkMode' : ''}>
        <FavoritesContextProvider>
          <DarkModeContext.Provider value={{darkmode,changeDarkMode}}>
            <Navbar />
            <Routes>
              <Route path='/Converter' element={<Converter />} />
              <Route path='/favorites' element={<Favorites coins={coins}/>} />
              <Route path='/' element={<Landing coins={coins}/>} />
              <Route path='/*' element={<Navigate to='/' />} />
            </Routes>
          </DarkModeContext.Provider>
        </FavoritesContextProvider>
      </div>
  )
}

export default App