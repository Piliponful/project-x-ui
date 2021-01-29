import React from 'react'

import styles from './style.styl'

export default ({ children, style }) => {
  return (
    <article style={style} className={styles.card}>
      {children}
    </article>
  )
}
