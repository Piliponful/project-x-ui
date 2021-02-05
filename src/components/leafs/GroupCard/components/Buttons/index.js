import React from 'react'

import Button from './components/Button'

import styles from './style.styl'

export default ({ select, combine }) => (
  <div className={styles.buttons}>
    <Button primary onClick={select}>Select</Button>
    <Button secondary onClick={combine}>Combine</Button>
  </div>
)
