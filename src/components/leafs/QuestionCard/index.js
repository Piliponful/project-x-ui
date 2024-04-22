import React, { forwardRef } from 'react'

import Title from './components/Title'
import Stats from './components/Stats'
import Answer from './components/Answer'
import AnswerButtons from './components/AnswerButtons'

import Text from '../../shared/Text'

import styles from './style.module.styl'

export default forwardRef(({ yourOwnQuestion, username, name, answersCount, currentUserAnswer: answer, hisAnswer, respond, createNewGroup, htmlName }, ref) => {
  return (
    <article ref={ref} className={styles.card}>
      <Title><span style={{ color: '#00000063' }}>{username}:</span> {htmlName ? <span dangerouslySetInnerHTML={{ __html: htmlName }} /> : name}</Title>
      <Stats {...answersCount} createNewGroup={createNewGroup} />
      {hisAnswer && (<Answer his answer={hisAnswer} />)}
      {answer && (<Answer answer={answer} />)}
      {yourOwnQuestion ? <Text className={styles.hint}>You cannot answer your own question</Text> : (!answer && <AnswerButtons respond={respond} />)}
    </article>
  )
})
