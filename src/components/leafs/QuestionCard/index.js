import React from 'react'

import Title from './components/Title'
import Stats from './components/Stats'
import Answer from './components/Answer'
import AnswerButtons from './components/AnswerButtons'

import Text from '../../shared/Text'

import styles from './style.module.styl'

export default ({ yourOwnQuestion, username, name, answersCount, currentUserAnswer: answer, his, respond, createNewGroup }) => {
  return (
    <article className={styles.card}>
      <Title><span style={{ color: '#00000063' }}>{username}:</span> {name}</Title>
      <Stats {...answersCount} createNewGroup={createNewGroup} />
      {
        yourOwnQuestion
          ? <Text className={styles.hint}>You cannot answer your own question</Text>
          : (
              answer
                ? (
                  <>
                    <Answer his={his} answer={answer} />
                    {his && <AnswerButtons respond={respond} />}
                  </>
                  )
                : <AnswerButtons respond={respond} />
            )
      }
    </article>
  )
}
