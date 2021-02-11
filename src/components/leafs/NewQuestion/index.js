import React, { useState } from 'react'

import Input from './components/Input'

import styles from './style.styl'

export default ({ saveQuestion }) => {
  const [state, setState] = useState('')

  const onChange = ({ e }) => {
    const question = e.target.value

    if (question[question.length - 1]) {
      saveQuestion()
      setState('')
    }

    setState(e.target.value)
  }

  return (
    <div className={styles.newQuestion}>
      <Input value={state} onChange={onChange} />
    </div>
  )
}
