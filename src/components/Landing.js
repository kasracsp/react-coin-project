import React,{useState, useEffect} from 'react'

import Coin from './Coin'
import styles from './Landing.module.css'
import CoinTitle from './CoinTitle'
import Navbar from '../shared/Navbar'
import ReactPaginate from 'react-paginate';

const Landing = ({coins}) => {
  const [search,setSearch]=useState('')

  const filteredCoins=coins.filter(item=>item.name.toLowerCase().includes(search.toLowerCase().trim()))

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage=10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredCoins.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredCoins.length / itemsPerPage));
  },[itemOffset, itemsPerPage,coins,search]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredCoins.length;
    setItemOffset(newOffset);
  };

  const changeHandler=event=>{
    setSearch(event.target.value)
    setItemOffset(0)
  }
  
  return (
    <div className={styles.landing}>
      <Navbar />
      <input type="text" placeholder='Search...' className={styles.search} value={search} onChange={changeHandler} />
      <div className={styles.coinsWrapper}>
        {coins.length?
          <div className={styles.coins}>
            {currentItems.length>0 && <CoinTitle />}
            {currentItems.map(item=><Coin key={item.id}
              index={item.market_cap_rank}
              id={item.id}
              name={item.name}
              symbol={item.symbol}
              image={item.image}
              price={item.current_price}
              volume={item.total_volume}
              marketCap={item.market_cap}
              priceChangeOneHour={item.price_change_percentage_1h_in_currency}
              priceChangeOneDay={item.price_change_percentage_24h_in_currency}
              priceChangeOneWeek={item.price_change_percentage_7d_in_currency}
          />)}
          {
            filteredCoins.length>itemsPerPage &&
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
              containerClassName={styles.pagination}
              pageLinkClassName={styles.pagLink}
              previousLinkClassName={styles.pagBtn}
              nextLinkClassName={styles.pagBtn}
              activeLinkClassName={styles.pagActive}
            />
          }
          </div>:
          <p>loading</p>
        }
      </div>
    </div>
  )
}

export default Landing