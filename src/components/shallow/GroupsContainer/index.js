import React from 'react'
import cn from 'classnames'

import styles from './style.module.styl'

export default ({ children, style, className }) => (
  <div style={style} className={cn(styles.groupContainer, className)}>
    <div style={{ width: '100%', height: '100%' }}>
      {children}
    </div>
  </div>
)
