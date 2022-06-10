import React,{useReducer,useEffect} from 'react'

export const FavoritesContext=React.createContext() 

const initialState={
  fav:[]
}

const reducer=(state,action)=>{
  switch (action.type) {
    case 'SET_INIT':
      return{
        ...state,
        fav:action.payload
      }
    case 'ADD_FAV':
      const indexF=state.fav.indexOf(action.payload)
      if(indexF === -1){
        state.fav.push(action.payload)
      }else{
        state.fav.splice(indexF,1)
      }
      window.localStorage.setItem('savedFav',JSON.stringify(state.fav))
      return{
        ...state,
        fav:[...state.fav]
      }
    case 'CLEAR':
      window.localStorage.clear()
      return{
        ...state,
        fav:[]
      }
    default:
      return state
  }
}
const FavoritesContextProvider = ({children}) => {
  const [state,dispatch]=useReducer(reducer,initialState)

  const favState=window.localStorage.getItem('savedFav')

  useEffect(()=>{
    if(favState){
      dispatch({type:'SET_INIT',payload:JSON.parse(favState)})
    }
  },[favState])

  return (
    <FavoritesContext.Provider value={{state,dispatch}}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesContextProvider