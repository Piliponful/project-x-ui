import React from 'react'

import Container from './components/Container'

import styles from './style.module.styl'

export default ({ children, style }) => (
  <section style={style} className={styles.mainScreen}>
    <Container>
      {children.slice(0, 1)}
    </Container>
  </section>
)
