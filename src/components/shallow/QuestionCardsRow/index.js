import React, { forwardRef } from 'react'
import cn from 'classnames'

import styles from './style.module.styl'

export default forwardRef(({ children, id, className }, ref) => {
  return (
    <div ref={ref} id={id} className={cn(styles.scrollContainer, className)}>
      {children}
    </div>
  )
})
