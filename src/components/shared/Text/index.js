import React from 'react'
import cn from 'classnames'

import styles from './style.module.styl'

export default ({ children, className, style, id, onClick, h1 = false }) => {
  if (h1) {
    return (
      <h1 onClick={onClick} id={id} style={style} className={cn(className, styles.text)}>{children}</h1>
    )
  }
  return (
    <div onClick={onClick} id={id} style={style} className={cn(className, styles.text)}>{children}</div>
  )
}
