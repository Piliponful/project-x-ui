import React from 'react'

import Text from '../../../../shared/Text'

import styles from './style.module.scss'

export default ({ onTitleInput, value }) => (
  <Text className={styles.text}>
    <input placeholder='Group name...' className={styles.input} onChange={e => onTitleInput(e.target.value)} value={value} />
  </Text>
)
