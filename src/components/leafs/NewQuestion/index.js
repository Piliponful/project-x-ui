import React from 'react'

import Input from './components/Input'
import HintAndSend from './components/HintAndSend'

import styles from './style.styl'

export default ({ value, onChange, send }) => (
  <div className={styles.newQuestion}>
    <Input value={value} onChange={onChange} />
    <HintAndSend send={send} />
  </div>
)
