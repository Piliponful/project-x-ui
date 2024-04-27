import React, { useState, forwardRef } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import cn from 'classnames'
import InfiniteScroll from 'react-infinite-scroll-component'
import FlipMove from 'react-flip-move'

import QuestionCardsRow from '../../shallow/QuestionCardsRow'

import QuestionCard from '../QuestionCard'

import styles from './style.module.styl'

export default forwardRef(({ questions: userQuestions, questionsHasMore, answersHasMore, fetchQuestions, questionsWithAnswers, back, respond, createNewGroup }, ref) => {
  const [selectedTab, setSelectedTab] = useState('questions')

  return (
    <QuestionCardsRow id='user-content-scroll-target' ref={ref} className={styles.screenWithGroupContent}>
      <ArrowBackIcon className={styles.back} onClick={back} />
      <div className={styles.tabs}>
        <div className={cn({ [styles.selected]: selectedTab === 'questions' })} onClick={() => setSelectedTab('questions')}>Questions</div>
        <div className={cn({ [styles.selected]: selectedTab === 'answers' })} onClick={() => setSelectedTab('answers')}>Answered Questions</div>
      </div>
      <InfiniteScroll
        scrollableTarget='user-content-scroll-target'
        dataLength={selectedTab === 'questions' ? userQuestions.length : questionsWithAnswers.length}
        next={fetchQuestions(true)}
        hasMore={selectedTab === 'questions' ? questionsHasMore : answersHasMore}
          // loader={<h4>Loading...</h4>}
          // endMessage={
          //   <p style={{ textAlign: 'center' }}>
          //     <b>Yay! You have seen it all</b>
          //   </p>
          // }
        className={styles.usersItems}
      >
        <FlipMove
          appearAnimation='elevator'
          typeName={null}
        >
          {(selectedTab === 'questions' ? userQuestions : questionsWithAnswers).map(i => (
            <QuestionCard
              key={i.id || i._id}
              respond={respond && (content => respond(selectedTab === 'answers')(i._id, content))}
              createNewGroup={content => createNewGroup(i._id, content)}
              {...i}
            />
          ))}
        </FlipMove>
      </InfiniteScroll>
    </QuestionCardsRow>
  )
})
