import React from 'react'

import Button from '../../shared/components/Button'

import styles from './style.styl'

export default ({ readyToSave, save, cancel }) => (
  <div className={styles.buttons}>
    <Button disabled={!readyToSave} primary onClick={save}>Save</Button>
    <Button secondary onClick={cancel}>Cancel</Button>
  </div>
)
