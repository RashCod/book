import React from 'react'
import fon from '../.././img/fon.png'
import styles from './Wrapper.module.css'

export const Wrapper = () => {
  return (
    <div className={styles.wrapper}>
        <img className={styles.fon} src={fon}  alt="fon" />
  
    </div>
  )
}
