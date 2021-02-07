import React from 'react'

import Text from '../../../../shared/Text'

import styles from './style.styl'

export default ({ onChange, value }) => (
  <Text className={styles.text}>
    <textarea className={styles.textarea} onChange={onChange}>{value}</textarea>
  </Text>
)
