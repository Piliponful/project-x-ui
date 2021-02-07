import React from 'react'

import Title from './components/Title'
import Stats from './components/Stats'
import Answer from './components/Answer'
import AnswerButtons from './components/AnswerButtons'

import styles from './style.styl'

export default ({ name, answersCount, currentUserAnswer: answer, respond, createNewGroup }) => {
  return (
    <article className={styles.card}>
      <Title>{name}</Title>
      <Stats {...answersCount} createNewGroup={createNewGroup} />
      {answer ? <Answer answer={answer} /> : <AnswerButtons respond={respond} />}
    </article>
  )
}
