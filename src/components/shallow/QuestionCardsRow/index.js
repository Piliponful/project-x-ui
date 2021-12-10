import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

import Title from './components/Title'

import styles from './style.module.styl'

export default ({ title, children }) => {
  return (
    <div className={styles.cardsRow}>
      <Title>{title}</Title>
      <Scrollbars
        autoHide
        className={styles.scrollContainer}
      >
        {children}
      </Scrollbars>
    </div>
  )
}
