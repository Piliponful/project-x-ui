import React, { useState, forwardRef } from 'react'

import Input from './components/Input'

import styles from './style.module.styl'

export default forwardRef(({ saveQuestion }, ref) => {
  const [question, setQuestion] = useState('')

  const onChange = (e) => {
    const newQuestion = e.target.value

    setQuestion(newQuestion)
  }

  const save = (e) => {
    e.target.blur()
    saveQuestion(question)
    setQuestion('')
  }

  const disabled = !saveQuestion

  return (
    <div ref={ref} className={styles.newQuestion}>
      <Input disabled={disabled} value={question} onChange={onChange} />
      <button disabled={!question || !saveQuestion} className={styles.button} onClick={save}>Ask</button>
    </div>
  )
})
