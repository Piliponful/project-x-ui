import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import cn from 'classnames'

import QuestionCardsRow from '../../shallow/QuestionCardsRow'

import QuestionCard from '../QuestionCard'

import styles from './style.module.styl'

export default ({ questions, questionsWithAnswers, back, respond, createNewGroup }) => {
  const [selectedTab, setSelectedTab] = useState('questions')

  return (
    <QuestionCardsRow className={styles.screenWithGroupContent}>
      <ArrowBackIcon className={styles.back} onClick={back} />
      <div className={styles.tabs}>
        <div className={cn({ [styles.selected]: selectedTab === 'questions' })} onClick={() => setSelectedTab('questions')}>Questions</div>
        <div className={cn({ [styles.selected]: selectedTab === 'answers' })} onClick={() => setSelectedTab('answers')}>Answered Questions</div>
      </div>
      {(selectedTab === 'questions' ? questions : questionsWithAnswers).map(i => (
        <QuestionCard
          his={selectedTab === 'answers'}
          key={i.name}
          respond={respond(selectedTab === 'answers')}
          createNewGroup={content => createNewGroup(i._id, content)}
          {...i}
        />
      ))}
    </QuestionCardsRow>
  )
}
