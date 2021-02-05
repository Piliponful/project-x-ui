import React from 'react'
import cn from 'classnames'

import styles from './style.styl'

export default ({ yes, no, onHover }) => {
  return (
    <div className={styles.bars}>
      <div
        style={{ width: `${yes}%` }}
        className={cn(styles.bar, styles.yesBar)}
        onMouseEnter={() => onHover('yes')}
        onMouseLeave={() => onHover()}
      />
      <div
        style={{ width: `${no}%` }}
        className={cn(styles.bar, styles.noBar)}
        onMouseEnter={() => onHover('no')}
        onMouseLeave={() => onHover()}
      />
    </div>
  )
}
