import React, { useState, forwardRef, useContext } from 'react'
import ImageIcon from '@mui/icons-material/Image'
import { Tooltip } from '@heroui/tooltip'

import Input from './components/Input'

import { MainScreenSwipeContext } from '../../shallow/Body'

import styles from './style.module.scss'

export default forwardRef(({ saveQuestion }, ref) => {
  const [question, setQuestion] = useState('')
  const { setAddImgModal, setSelectedMessage } = useContext(MainScreenSwipeContext)

  const onChange = (e) => {
    const newQuestion = e.target.value

    setQuestion(newQuestion)
  }

  const save = async (e) => {
    e.target.blur()
    const { _id } = await saveQuestion(question)
    setQuestion('')
    setSelectedMessage(_id)
  }

  const disabled = !saveQuestion

  return (
    <div ref={ref} className={styles.newQuestion}>
      <Input disabled={disabled} value={question} onChange={onChange} />
      {question && (
        <button style={{ position: 'absolute', right: 87, bottom: 5, transform: 'translateY(-50%)' }}>
          <Tooltip content='Add image to question'>
            <ImageIcon
              sx={{ fill: '#121212' }}
              className={styles.icon}
              onClick={() => {
                setAddImgModal(true)
              }}
            />
          </Tooltip>
        </button>
      )}
      <button disabled={!question || !saveQuestion} className={styles.button} onClick={save}>Ask</button>
    </div>
  )
})
