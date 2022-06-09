const isInFav=(state,id)=>{
  const result=!!state.find(item => item === id)
  return result
}

const favCoins=(coins,state)=>{
  const fav=[]
  state.forEach(item=>{
    const found=coins.find(coin=>coin.id === item)
    fav.push(found)
  })
  return fav
}

export {isInFav, favCoins}