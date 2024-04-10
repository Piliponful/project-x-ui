import React from 'react'

import styles from './style.module.styl'

export default ({ children, style }) => (
  <div style={style} className={styles.sidebar}>
    {children}
  </div>
)
