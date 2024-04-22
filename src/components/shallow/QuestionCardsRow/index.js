import React, { forwardRef } from 'react'

import styles from './style.module.styl'

export default forwardRef(({ children }, ref) => {
  return (
    <div ref={ref} className={styles.scrollContainer}>
      {children}
    </div>
  )
})
