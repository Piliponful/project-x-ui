import React, { useState } from 'react'

import Input from './components/Input'

import styles from './style.styl'

export default ({ save, readyToSave, cancel }) => {
  const [newGroupTitle, setNewGroupTitle] = useState('')

  return (
    <div className={styles.container}>
      <Input onTitleInput={setNewGroupTitle} value={newGroupTitle} />
    </div>
  )
}
