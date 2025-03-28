import React, { forwardRef } from 'react'
import cn from 'classnames'

import Container from './components/Container'

import styles from './style.module.scss'

export default forwardRef(({ children, className, style, id, scrollId }, ref) => (
  <section id={id} ref={ref} style={style} className={cn(styles.mainScreen, className)}>
    <Container scrollId={scrollId} className={styles.mainScreenContainer}>
      {children}
    </Container>
  </section>
))
