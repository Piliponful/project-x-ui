import React from 'react'

import Text from '../../../../../../shared/Text'

import styles from './style.styl'

export default ({ onTitleInput, value }) => (
  <Text className={styles.text}>
    <input className={styles.input} onChange={onTitleInput} value={value} />
  </Text>
)
