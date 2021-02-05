import React from 'react'

import Title from './components/Title'
import Stats from './components/Stats'
import Answer from './components/Answer'
import AnswerButtons from './components/AnswerButtons'

import styles from './style.styl'

export default ({ title, statistics, answer, respond, createNewGroup }) => {
  return (
    <article className={styles.card}>
      <Title>{title}</Title>
      <Stats {...statistics} createNewGroup={createNewGroup} />
      {answer ? <Answer answer={answer} /> : <AnswerButtons respond={respond} />}
    </article>
  )
}
