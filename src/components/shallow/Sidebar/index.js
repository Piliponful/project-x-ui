import React from 'react'

import Title from '../../shared/Title'

import styles from './style.module.styl'

export default ({ children, title, style }) => (
  <div style={style} className={styles.sidebar}>
    <Title className={styles.title} color='#b1b8c7'>{title}</Title>
    {children}
  </div>
)
