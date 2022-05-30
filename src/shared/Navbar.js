import React,{useContext} from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../App'

const Navbar = () => {
  const {darkmode,changeDarkMode}=useContext(DarkModeContext)

  return (
    <div className={styles.navbar}>
      <Link to='/' className={styles.logo}>what the coin</Link>
      <div className={styles.darkSide}>
        <span className='material-icons' id={darkmode ? styles.active :''} onClick={changeDarkMode}>
          mode_night
        </span>
        <Link to='/converter' className={styles.converter}>Converter</Link>
      </div>
    </div>
  )
}

export default Navbar