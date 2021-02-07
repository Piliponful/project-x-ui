import React from 'react'
import cn from 'classnames'

import styles from './style.styl'

export default ({ yes, no, onHover, createNewGroup }) => {
  return (
    <div className={styles.bars}>
      <div
        style={{ width: `${yes}%` }}
        className={cn(styles.bar, styles.yesBar)}
        onMouseEnter={() => onHover('yes')}
        onMouseLeave={() => onHover()}
        onClick={createNewGroup('yes')}
      />
      <div
        style={{ width: `${no}%` }}
        className={cn(styles.bar, styles.noBar)}
        onMouseEnter={() => onHover('no')}
        onMouseLeave={() => onHover()}
        onClick={createNewGroup('no')}
      />
    </div>
  )
}
