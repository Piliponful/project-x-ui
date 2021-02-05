import React from 'react'

import Text from '../../../../../../shared/Text'

import styles from './style.styl'

export default ({ onTitleInput }) => (
  <Text className={styles.text}>
    <input className={styles.input} onChange={onTitleInput} />
  </Text>
)
