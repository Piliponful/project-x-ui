import React, { useState, forwardRef } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import cn from 'classnames'
import InfiniteScroll from 'react-infinite-scroll-component'
import FlipMove from 'react-flip-move'

import QuestionCard from '../QuestionCard'

import styles from './style.module.styl'

export default forwardRef(({ style, questions: userQuestions, questionsHasMore, answersHasMore, fetchQuestions, questionsWithAnswers, back, respond, createNewGroup, onUserClick }, ref) => {
  const [selectedTab, setSelectedTab] = useState('questions')

  return (
    <div style={style} id='user-content-scroll-target' ref={ref} className={styles.screenWithGroupContent}>
      <div className={styles.backContainer}><CloseIcon className={styles.back} onClick={back} /></div>
      <div className={styles.tabs}>
        <div className={cn({ [styles.selected]: selectedTab === 'questions' })} onClick={() => setSelectedTab('questions')}>Questions</div>
        <div className={cn({ [styles.selected]: selectedTab === 'answers' })} onClick={() => setSelectedTab('answers')}>Answered Questions</div>
      </div>
      <InfiniteScroll
        scrollableTarget='user-content-scroll-target'
        dataLength={selectedTab === 'questions' ? userQuestions.length : questionsWithAnswers.length}
        next={fetchQuestions(true)}
        hasMore={selectedTab === 'questions' ? questionsHasMore : answersHasMore}
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
              onUserClick={() => onUserClick(i.userId)}
            />
          ))}
        </FlipMove>
      </InfiniteScroll>
    </div>
  )
})
