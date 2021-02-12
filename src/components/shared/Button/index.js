import React from 'react'
import cn from 'classnames'

import styles from './style.styl'

export default ({ children, className, onClick, disabled }) => {
  return (
    <button disabled={disabled} className={cn(className, styles.button)} onClick={onClick}>
      {children}
    </button>
  )
}
