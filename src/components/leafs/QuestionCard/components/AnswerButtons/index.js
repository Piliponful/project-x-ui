import React from 'react'

import Button from './components/Button'

import styles from './style.module.styl'

export default ({ respond }) => {
  return (
    <div className={styles.answerButtons}>
      <Button disabled={!respond} answer='Yes' respond={() => respond('yes')} />
      <Button disabled={!respond} answer='No' respond={() => respond('no')} />
    </div>
  )
}
