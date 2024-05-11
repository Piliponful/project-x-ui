import React from 'react'

import Button from './components/Button'

import styles from './style.module.styl'

export default ({ respond, style }) => {
  return (
    <div style={style} className={styles.answerButtons}>
      <Button disabled={!respond} answer='Yes' respond={() => respond('yes')} />
      <Button disabled={!respond} answer='No' respond={() => respond('no')} />
    </div>
  )
}
