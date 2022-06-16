import React,{useState, useEffect, useRef} from 'react'
import styles from './CustomSelector.module.css'

const CustomSelector = ({currency,selectedCurrency,onChangeCurrency}) => {
  const [showList,setShowList]=useState(false)
  const [search,setSearch]=useState('')
  const searchRef=useRef()

  const filteredCoins=currency.filter(item=>item.toLowerCase().includes(search.toLowerCase().trim()))

  useEffect(()=>{
    const handler=(event)=>{
      if(searchRef.current && !searchRef.current.contains(event.target)){
        setShowList(false)
      }
    }

    document.addEventListener('mousedown',handler)

    return ()=>{
      document.removeEventListener('mousedown',handler)
    }
  })

  const clickHandler=(e)=>{
    setSearch('')
    setShowList(false)
    onChangeCurrency(e)
  }

  return (
    <div className={styles.container} ref={searchRef}>
      <div className={styles.title} onClick={()=>setShowList(!showList)}>
        <p>{selectedCurrency}</p>
        <span className="material-icons">
          expand_more
        </span>
      </div>
      <div className={styles.list} id={showList ? styles.active : ''}>
        <div className={styles.serachWrapper}>
          <input type="text" className={styles.search} placeholder='Search...' value={search} onChange={e=>setSearch(e.target.value)}/>
        </div>
        <ul className={styles.ul}>
          {filteredCoins.map(item=><li key={item} className={styles.li} onClick={clickHandler}id={item}>{item}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default CustomSelector