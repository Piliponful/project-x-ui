import React from 'react'
import cn from 'classnames'

import Container from './components/Container'

import styles from './style.module.styl'

export default ({ children, className, style }) => (
  <section style={style} className={cn(styles.mainScreen, className)}>
    <Container className={styles.mainScreenContainer}>
      {children}
    </Container>
  </section>
)
