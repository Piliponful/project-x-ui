import React, { forwardRef } from 'react'
import cn from 'classnames'

import Container from './components/Container'

import styles from './style.module.styl'

export default forwardRef(({ children, className, style }, ref) => (
  <section ref={ref} style={style} className={cn(styles.mainScreen, className)}>
    <Container className={styles.mainScreenContainer}>
      {children}
    </Container>
  </section>
))
