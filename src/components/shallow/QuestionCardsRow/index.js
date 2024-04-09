import React from 'react'

import Title from './components/Title'

import styles from './style.module.styl'

export default ({ title, children }) => {
  return (
    <div className={styles.cardsRow}>
      <Title>{title}</Title>
      <div className={styles.scrollContainer}>
        {children}
      </div>
    </div>
  )
}
