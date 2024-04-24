import React, { forwardRef } from 'react'

import styles from './style.module.styl'

export default forwardRef(({ children, id }, ref) => {
  return (
    <div ref={ref} id={id} className={styles.scrollContainer}>
      {children}
    </div>
  )
})
