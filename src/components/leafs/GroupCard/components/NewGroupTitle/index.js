import React from 'react'

import Save from './components/SaveButton'
import Input from './components/Input'

import styles from './style.styl'

export default ({ onTitleInput, save, value }) => (
  <div className={styles.container}>
    <Input onTitleInput={onTitleInput} value={value} />
    <Save save={save} />
  </div>
)
