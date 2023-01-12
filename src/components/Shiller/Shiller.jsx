import React from 'react'
import shiller from '../.././img/shiller.png'
import styles from './Shiller.module.css'


export const Shiller = ({ShillerActive,setShillerActive}) => {
  return (
    <div  className={styles.shillerBook}>
        <img className={styles.shiller} src={shiller} alt="Skecspir" onClick={()=> setShillerActive(true)} />
    </div>
  )
}
