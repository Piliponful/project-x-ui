import React, { forwardRef } from 'react'
import cn from 'classnames'

import styles from './style.module.styl'

export default forwardRef(({ style, children, id, className }, ref) => {
  return (
    <div style={style} ref={ref} id={id} className={cn(styles.scrollContainer, className)}>
      {children}
    </div>
  )
})
