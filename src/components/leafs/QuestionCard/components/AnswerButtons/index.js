import React from 'react'

import Button from './components/Button'

import styles from './style.styl'

export default ({ respond }) => {
  return (
    <div className={styles.answerButtons}>
      <Button answer='Yes' respond={respond('yes')} />
      <Button answer='No' respond={respond('no')} />
    </div>
  )
}
