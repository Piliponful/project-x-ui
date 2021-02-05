import React from 'react'
import cn from 'classnames'

import styles from './style.styl'

export default ({ children, className, onClick }) => {
  return (
    <button className={cn(className, styles.button)} onClick={onClick}>
      {children}
    </button>
  )
}
