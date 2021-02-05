import React from 'react'

import Button from '../../../../../../shared/Button'

import styles from './style.styl'

export default ({ save }) => (
  <Button className={styles.saveButton} onClick={save}>Save</Button>
)
