import React from 'react'
import cn from 'classnames'
import { capitalize } from 'lodash'

import Text from '../../../../shared/Text'

import styles from './style.module.styl'

export default ({ answer, his, style }) => (
  <Text style={style} className={styles.text}>
    {his ? 'His/Her' : 'Your'} answer:
    <span>{' '}</span>
    <span
      className={cn(styles.text, {
        [styles.yes]: answer.toLowerCase() === 'yes',
        [styles.no]: answer.toLowerCase() === 'no'
      })}
    >
      {capitalize(answer)}
    </span>
  </Text>
)
