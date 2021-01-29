import React from 'react'

import Hint from './components/Hint'
import Send from './components/Send'

import styles from './style.styl'

export default ({ onSend }) => (
  <div className={styles.hintAndSend}>
    <Hint /><Send onClick={onSend} />
  </div>
)
