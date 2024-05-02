import React, { forwardRef } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import cn from 'classnames'
import InfiniteScroll from 'react-infinite-scroll-component'
import FlipMove from 'react-flip-move'

import QuestionCard from '../QuestionCard'

import styles from './style.module.styl'

export const UserHistoryTabs = forwardRef(({
  selectedTab, setSelectedTab, back, children
}, ref) => {
  return (
    <div id='user-content-scroll-target' ref={ref} className={styles.screenWithGroupContent}>
      <div className={styles.backContainer}><CloseIcon className={styles.back} onClick={back} /></div>
      <div className={styles.tabs}>
        <div className={cn({ [styles.selected]: selectedTab === 'questions' })} onClick={() => setSelectedTab('questions')}>Questions</div>
        <div className={cn({ [styles.selected]: selectedTab === 'answers' })} onClick={() => setSelectedTab('answers')}>Answered Questions</div>
      </div>
      {children}
    </div>
  )
})

export const UserQuestionsHistory = forwardRef(({
  questions, hasMore, fetchQuestions, respond, createNewGroup, onUserClick, selectedTab
}, ref) => {
  return (
    <InfiniteScroll
      ref={ref}
      scrollableTarget='user-content-scroll-target'
      dataLength={questions.length}
      next={fetchQuestions(true)}
      hasMore={hasMore}
      className={styles.usersItems}
    >
      <FlipMove
        appearAnimation='elevator'
        typeName={null}
      >
        {questions.map(i => (
          <QuestionCard
            key={i.id || i._id}
            respond={respond && (content => respond(i._id, content))}
            createNewGroup={content => createNewGroup(i._id, content)}
            {...i}
            onUserClick={() => onUserClick(i.userId)}
          />
        ))}
      </FlipMove>
    </InfiniteScroll>
  )
})
