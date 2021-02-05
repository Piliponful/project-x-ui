import React from 'react'
import cn from 'classnames'

import styles from './style.styl'

export default ({ children, className, style }) => (
  <span style={style} className={cn(className, styles.text)}>{children}</span>
)
