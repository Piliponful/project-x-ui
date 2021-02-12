import React from 'react'

import Button from '../../../../../../shared/Button'
import Text from '../../../../../../shared/Text'

import styles from './style.styl'

export default ({ save, readyToSave }) => (
  <Button disabled={!readyToSave} className={styles.saveButton} onClick={save}><Text>Save</Text></Button>
)
