import React from 'react'

import Title from './components/Title'
import Stats from './components/Stats'
import Answer from './components/Answer'
import AnswerButtons from './components/AnswerButtons'

import Text from '../../shared/Text'

import styles from './style.styl'

export default ({ yourOwnQuestion, name, answersCount, currentUserAnswer: answer, respond, createNewGroup }) => {
  return (
    <article className={styles.card}>
      <Title>{name}</Title>
      <Stats {...answersCount} createNewGroup={createNewGroup} />
      {
        yourOwnQuestion
          ? <Text className={styles.hint}>You cannot answer your own question</Text>
          : (answer ? <Answer answer={answer} /> : <AnswerButtons respond={respond} />)
      }
    </article>
  )
}
