import React from 'react'
import cn from 'classnames'

import styles from './style.module.scss'

export default ({ yes, no, onHover, createNewGroup, style, className }) => {
  return (
    <div style={style} className={cn(styles.bars, className)}>
      <div
        style={{ width: `${yes}%` }}
        className={cn(styles.bar, styles.yesBar)}
        onMouseEnter={() => onHover('yes')}
        onMouseLeave={() => onHover()}
        onClick={() => createNewGroup('yes')}
      />
      <div
        style={{ width: `${no}%` }}
        className={cn(styles.bar, styles.noBar)}
        onMouseEnter={() => onHover('no')}
        onMouseLeave={() => onHover()}
        onClick={() => createNewGroup('no')}
      />
    </div>
  )
}
