import React,{useReducer,useEffect} from 'react'
import { getCoin } from '../services/api'

export const CoinsContext=React.createContext() 

const initialState={
  loading:true,
  coins:[],
  error:''
}

const reducer=(state,action)=>{
  switch (action.type) {
    case 'SUCCESS':
      return{
        ...state,
        loading:false,
        coins:action.payload,
      }
    case 'FAILURE':
      return{
        ...state,
        loading:false,
        error:action.payload,
      }
    default:
      return state
  }
}
const CoinsContextProvider = ({children}) => {
  const [coinsState,coinsDispatch]=useReducer(reducer,initialState)

  useEffect(()=>{
    const fetchCoins=async ()=>{
      const data=await getCoin()
      coinsDispatch({type:'SUCCESS',payload:data})
    }
    fetchCoins().catch(error=>coinsDispatch({type:'FAILURE',payload:error.message}))
  },[])

  return (
    <CoinsContext.Provider value={{coinsState,coinsDispatch}}>
      {children}
    </CoinsContext.Provider>
  )
}

export default CoinsContextProvider