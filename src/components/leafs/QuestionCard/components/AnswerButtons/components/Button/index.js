import React from 'react'
import cn from 'classnames'

import Text from '../../../../../../shared/Text'

import styles from './style.module.styl'

export default ({ answer, respond, disabled, style, noHover }) => {
  return (
    <button
      disabled={disabled}
      className={cn(styles.button, {
        [styles.yes]: answer.toLowerCase() === 'yes',
        [styles.no]: answer.toLowerCase() === 'no',
        [styles.noHover]: noHover
      })}
      onClick={respond}
      style={style}
    >
      <Text>
        {answer}
      </Text>
    </button>
  )
}
