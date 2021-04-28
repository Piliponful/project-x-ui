import React, { useContext } from 'react'

import Container from './components/Container'

import { MainScreenSwipeContext } from '../../../context/MainScreenSwipeContext'

import styles from './style.styl'

export default ({ children }) => {
  const { mainScreen } = useContext(MainScreenSwipeContext)

  return (
    <div style={{ height: mainScreen ? '100%' : 'auto' }} className={styles.body}>
      <Container>
        {children}
      </Container>
    </div>
  )
}
