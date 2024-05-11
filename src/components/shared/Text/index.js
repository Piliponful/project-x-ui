import React from 'react'
import cn from 'classnames'

import styles from './style.module.styl'

export default ({ children, className, style, id }) => (
  <div id={id} style={style} className={cn(className, styles.text)}>{children}</div>
)
