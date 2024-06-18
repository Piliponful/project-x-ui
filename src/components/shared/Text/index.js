import React from 'react'
import cn from 'classnames'

import styles from './style.module.styl'

export default ({ children, className, style, id, onClick }) => (
  <div onClick={onClick} id={id} style={style} className={cn(className, styles.text)}>{children}</div>
)
