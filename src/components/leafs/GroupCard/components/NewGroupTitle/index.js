import React, { useState } from 'react'

import Save from './components/SaveButton'
import Input from './components/Input'

import styles from './style.styl'

export default ({ save, readyToSave }) => {
  const [newGroupTitle, setNewGroupTitle] = useState('')

  return (
    <div className={styles.container}>
      <Input onTitleInput={setNewGroupTitle} value={newGroupTitle} />
      <Save save={() => save(newGroupTitle)} readyToSave={newGroupTitle && readyToSave} />
    </div>
  )
}
