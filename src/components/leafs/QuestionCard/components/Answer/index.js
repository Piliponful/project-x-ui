import React from 'react'
import cn from 'classnames'

import Text from '../../../../shared/Text'

import styles from './style.styl'

export default ({ answer }) => (
  <Text className={styles.text}>
    Your answer:
    <span>{' '}</span>
    <span
      className={cn(styles.text, {
        [styles.yes]: answer.toLowerCase() === 'yes',
        [styles.no]: answer.toLowerCase() === 'no'
      })}
    >
      {answer.toUpperCase()}
    </span>
  </Text>
)
