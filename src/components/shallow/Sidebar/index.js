import React from 'react'

import Title from '../../shared/Title'

import styles from './style.styl'

export default ({ children }) => (
  <aside className={styles.sidebar}>
    <Title color='#b1b8c7'>Groups</Title>
    {children}
  </aside>
)
