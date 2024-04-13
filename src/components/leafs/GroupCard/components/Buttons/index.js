import React from 'react'

import Button from '../../shared/components/Button'

import styles from './style.module.styl'

export default ({ select, combine }) => (
  <div className={styles.buttons}>
    <Button nobold secondary onClick={select}>Select</Button>
    {/* <Button nobold secondary onClick={select}>Apply To Answers</Button> */}
    <Button nobold secondary onClick={combine}>Combine</Button>
  </div>
)
