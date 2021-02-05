import React from 'react'

import Container from './components/Container'

import styles from './style.styl'

export default ({ children }) => (
  <div className={styles.body}>
    <Container>
      {children}
    </Container>
  </div>
)
