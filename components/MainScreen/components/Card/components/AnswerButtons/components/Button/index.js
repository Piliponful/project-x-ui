import React from 'react'
import cn from 'classnames'

import styles from './style.styl'

export default ({ answer, respond }) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.yes]: answer.toLowerCase() === 'yes',
        [styles.no]: answer.toLowerCase() === 'no'
      })}
      onClick={respond}
    >
      {answer}
    </button>
  )
}
