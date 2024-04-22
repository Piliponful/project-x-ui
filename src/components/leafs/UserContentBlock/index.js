import React, { useState, forwardRef } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import cn from 'classnames'

import QuestionCardsRow from '../../shallow/QuestionCardsRow'

import QuestionCard from '../QuestionCard'

import styles from './style.module.styl'

export default forwardRef(({ questions, questionsWithAnswers, back, respond, createNewGroup }, ref) => {
  const [selectedTab, setSelectedTab] = useState('questions')

  return (
    <QuestionCardsRow ref={ref} className={styles.screenWithGroupContent}>
      <ArrowBackIcon className={styles.back} onClick={back} />
      <div className={styles.tabs}>
        <div className={cn({ [styles.selected]: selectedTab === 'questions' })} onClick={() => setSelectedTab('questions')}>Questions</div>
        <div className={cn({ [styles.selected]: selectedTab === 'answers' })} onClick={() => setSelectedTab('answers')}>Answered Questions</div>
      </div>
      {(selectedTab === 'questions' ? questions : questionsWithAnswers).map(i => (
        <QuestionCard
          key={i.name}
          respond={content => respond(selectedTab === 'answers')(i._id, content)}
          createNewGroup={content => createNewGroup(i._id, content)}
          {...i}
        />
      ))}
    </QuestionCardsRow>
  )
})
