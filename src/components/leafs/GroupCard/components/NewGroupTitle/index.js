import React from 'react'

import Save from './components/SaveButton'
import Input from './components/Input'

import styles from './style.styl'

export default ({ onTitleInput, save }) => (
  <div className={styles.container}>
    <Input onTitleInput={onTitleInput} />
    <Save save={save} />
  </div>
)
