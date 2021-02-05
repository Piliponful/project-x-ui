import React from 'react'

import Title from '../../shared/Title'

import Container from './components/Container'

import styles from './style.styl'

export default ({ children, style }) => (
  <section style={style} className={styles.mainScreen}>
    <Title color='#3d465e'>Questions</Title>
    <Container>
      {children}
    </Container>
  </section>
)
