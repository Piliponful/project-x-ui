import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

import Title from './components/Title'

import styles from './style.styl'

export default ({ title, children }) => {
  return (
    <div className={styles.cardsRow}>
      <div className={styles.titleContainer}>
        <Title>{title}</Title>
      </div>
      <Scrollbars
        style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}
        autoHide
      >
        {children}
      </Scrollbars>
    </div>
  )
}
