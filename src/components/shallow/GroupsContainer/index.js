import React from 'react'

import styles from './style.module.styl'

export default ({ children, style }) => (
  <div style={style} className={styles.groupContainer}>
    <div style={{ width: '100%', height: '100%' }}>
      {children}
    </div>
  </div>
)
