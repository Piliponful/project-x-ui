import React, { useState } from 'react'

import Input from './components/Input'

import styles from './style.styl'

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

  return (
    <div className={styles.newQuestion}>
      <Input value={question} onChange={onChange} />
    </div>
  )
}
