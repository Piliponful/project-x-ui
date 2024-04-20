import React from 'react'
import cn from 'classnames'

import Text from '../../../../../../shared/Text'

import styles from './style.module.styl'

export default ({ answer, respond, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={cn(styles.button, {
        [styles.yes]: answer.toLowerCase() === 'yes',
        [styles.no]: answer.toLowerCase() === 'no'
      })}
      onClick={respond}
    >
      <Text>
        {answer}
      </Text>
    </button>
  )
}
