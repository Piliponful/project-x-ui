import React, { useState } from 'react'

import Input from './components/Input'

import styles from './style.module.styl'

export default ({ saveQuestion }) => {
  const [question, setQuestion] = useState('')

  const onChange = (e) => {
    const newQuestion = e.target.value

    if (newQuestion[newQuestion.length - 1] === '?') {
      saveQuestion(newQuestion)
      setQuestion('')
    } else {
      setQuestion(newQuestion)
    }
  }

  const disabled = !saveQuestion

  console.log('disabled NewQuestion: ', disabled)

  return (
    <div className={styles.newQuestion}>
      <Input disabled={disabled} value={question} onChange={onChange} />
    </div>
  )
}
