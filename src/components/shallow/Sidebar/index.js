import React, { forwardRef } from 'react'

import styles from './style.module.scss'

export default forwardRef(({ children, style }, ref) => (
  <div ref={ref} style={style} className={styles.sidebar}>
    {children}
  </div>
))
