import React,{useState} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

//context
import FavoritesContextProvider from './context/FavoritesContextProvider'
import CoinsContextProvider from './context/CoinsContextProvider'

//components
import Navbar from './shared/Navbar'
import Landing from './components/Landing'
import Converter from './components/Converter'
import './App.css'
import Favorites from './components/Favorites'

export const DarkModeContext=React.createContext()

const App = () => {
  const [darkmode,setDarkmode]=useState(false)
  const changeDarkMode=()=>{
    setDarkmode(!darkmode)
  }

  return (
    <div className='app' id={darkmode ? 'darkMode' : ''}>
      <DarkModeContext.Provider value={{darkmode,changeDarkMode}}> 
        <CoinsContextProvider>
          <FavoritesContextProvider>
            <Navbar />
            <Routes>
              <Route path='/Converter' element={<Converter />} />
              <Route path='/favorites' element={<Favorites/>} />
              <Route path='/' element={<Landing/>} />
              <Route path='/*' element={<Navigate to='/' />} />
            </Routes>
          </FavoritesContextProvider>
        </CoinsContextProvider>
      </DarkModeContext.Provider>
    </div>
  )
}

export default App