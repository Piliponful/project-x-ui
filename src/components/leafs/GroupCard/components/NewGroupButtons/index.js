import React from 'react'

import Button from '../../shared/components/Button'

import styles from './style.module.styl'

export default ({ readyToSave, save, cancel }) => (
  <div className={styles.buttons}>
    <Button nobold secondary disabled={!readyToSave} primary onClick={save}>Save</Button>
    <Button nobold secondary onClick={cancel}>Cancel</Button>
  </div>
)
