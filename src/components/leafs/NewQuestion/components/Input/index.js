import React from 'react'

import Text from '../../../../shared/Text'

import styles from './style.module.styl'

export default ({ onChange, value }) => (
  <Text className={styles.text}>
    <textarea placeholder='Type your question here...' className={styles.textarea} onChange={onChange} value={value} />
  </Text>
)
