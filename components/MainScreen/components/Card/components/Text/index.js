import React from 'react'
import cn from 'classnames'

import styles from './style.styl'

export default ({ children, secondary, yes, no }) => (
  <span
    className={cn(styles.text, {
      [styles.secondary]: secondary,
      [styles.yes]: yes,
      [styles.no]: no
    })}>
    {children}
  </span>
)
