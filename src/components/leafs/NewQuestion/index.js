import React from 'react'

import Input from './components/Input'
import HintAndSend from './components/HintAndSend'

import styles from './style.styl'

export default ({ children }) => (
  <div className={styles.newQuestion}>
    <Input />
    <HintAndSend />
  </div>
)
