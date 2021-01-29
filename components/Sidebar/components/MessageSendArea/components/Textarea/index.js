import React from 'react'

import styles from './style.styl'

export default ({ onChange }) => (
  <textarea className={styles.textarea} onChange={onChange} />
)
