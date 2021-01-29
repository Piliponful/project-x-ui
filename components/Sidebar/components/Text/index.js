import React from 'react'
import cn from 'classnames'

import styles from './style.styl'

export default ({ style, children, primary, secondary, button, hint }) => (
  <span style={style} className={cn(styles.text, {
    [styles.primary]: (!button && !hint) && primary,
    [styles.secondary]: (!button && !hint) && secondary,
    [styles.buttonPrimary]: !hint && (button && primary),
    [styles.buttonSecondary]: !hint && (button && secondary),
    [styles.hint]: hint
  })}>{children}</span>
)
