import React from 'react'

import Text from '../../../../shared/Text'

import styles from './style.module.styl'

export default ({ disabled, onChange, value }) => (
  <Text className={styles.text}>
    <textarea disabled={disabled} placeholder={`Type your question here ${disabled ? '(disabled if you\'re not signed in)' : ''}...`} className={styles.textarea} onChange={onChange} value={value} />
  </Text>
)
