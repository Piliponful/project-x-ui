import React from 'react'

import styles from './style.module.styl'

export default ({ children }) => {
  return (
    <div className={styles.scrollContainer}>
      {children}
    </div>
  )
}
