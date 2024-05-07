import React, { forwardRef, useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import cn from 'classnames'
import InfiniteScroll from 'react-infinite-scroll-component'
import FlipMove from 'react-flip-move'
import _ from 'lodash'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import QuestionCard from '../QuestionCard'

import styles from './style.module.styl'

export const UserHistoryTabs = forwardRef(({
  selectedTab, setSelectedTab, showDifference, setShowDifference, back, children, similarity
}, ref) => {
  useEffect(() => {
    if (showDifference && selectedTab !== 'answers') {
      setSelectedTab('answers')
    }
  }, [showDifference])

  useEffect(() => {
    if (showDifference && selectedTab !== 'answers') {
      setShowDifference(false)
    }
  }, [selectedTab])

  return (
    <div id='user-content-scroll-target' ref={ref} className={styles.screenWithGroupContent}>
      <div className={styles.backContainer}><CloseIcon className={styles.back} onClick={back} /></div>
      {!_.isNull(similarity) && (
        <>
          <p>Similarity to you: <b className={styles.similarityMeter}>{similarity}%</b></p>
          <button className={styles.button} onClick={() => setShowDifference(!showDifference)}>
            {
              showDifference
                ? <div style={{ display: 'flex', alignItems: 'center' }}><ArrowBackIcon sx={{ fontSize: 14, marginRight: '5px' }} /><span>Back</span></div>
                : 'Show Differences'
            }
          </button>
        </>
      )}
      {
        !showDifference && (
          <div className={styles.tabs}>
            <div className={cn({ [styles.selected]: selectedTab === 'questions' })} onClick={() => setSelectedTab('questions')}>Questions</div>
            <div className={cn({ [styles.selected]: selectedTab === 'answers' })} onClick={() => setSelectedTab('answers')}>Answers</div>
          </div>
        )
      }
      {children}
    </div>
  )
})

export const UserQuestionsHistory = forwardRef(({
  questions, hasMore, fetchQuestions, respond, createNewGroup, onUserClick
}, ref) => {
  return (
    <>
      <InfiniteScroll
        scrollableTarget='user-content-scroll-target'
        dataLength={questions.length}
        next={fetchQuestions}
        hasMore={hasMore}
        className={styles.usersItems}
      >
        <FlipMove
          appearAnimation='elevator'
          typeName={null}
          maintainContainerHeight
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
    </>
  )
})

export const UserAnswerDifferences = forwardRef(({
  // hasMore,
  // fetchAnswers,
  respond,
  createNewGroup,
  onUserClick,
  answers = {
    different: [],
    same: [],
    notAnswered: []
  }
}, ref) => {
  const [selectedTab, setSelectedTab] = useState('different')
  const [selectedNestedTab, setSelectedNestedTab] = useState('byMe')
  // const [answers, setAnswers] = useState({
  //   different: [],
  //   same: [],
  //   notAnswered: []
  // })

  // useEffect(() => {
  //   compareWithMe().then(answers => setAnswers(answers))
  // }, [])

  return (
    <>
      <div className={cn(styles.tabs, styles.differentTabs)}>
        <div className={cn({ [styles.selected]: selectedTab === 'different' })} onClick={() => setSelectedTab('different')}>Different Answer</div>
        <div className={cn({ [styles.selected]: selectedTab === 'same' })} onClick={() => setSelectedTab('same')}>Same Answer</div>
        <div className={cn({ [styles.selected]: selectedTab === 'notAnswered' })} onClick={() => setSelectedTab('notAnswered')}>Not Answered</div>
      </div>
      {
        selectedTab === 'notAnswered'
          ? (
            <div className={cn(styles.tabs, styles.differentTabs2)}>
              <div className={cn({ [styles.selected]: selectedNestedTab === 'byMe' })} onClick={() => setSelectedNestedTab('byMe')}>By Me</div>
              <div className={cn({ [styles.selected]: selectedNestedTab === 'byHim' })} onClick={() => setSelectedNestedTab('byHim')}>By Him/Her</div>
            </div>
            )
          : null
      }
      {/* <InfiniteScroll
        scrollableTarget='user-content-scroll-target'
        dataLength={answers[selectedTab].length}
        next={fetchAnswers}
        hasMore={hasMore}
        className={styles.usersItems}
      > */}
      <FlipMove
        appearAnimation='elevator'
        typeName={null}
        maintainContainerHeight
      >
        {(selectedTab === 'notAnswered'
          ? answers[selectedTab].filter(i => selectedNestedTab === 'byMe' ? i.byMe : !i.byMe)
          : answers[selectedTab]
        ).map(i => (
          <QuestionCard
            key={i.id || i._id}
            respond={respond && (content => respond(i._id, content))}
            createNewGroup={content => createNewGroup(i._id, content)}
            {...i}
            onUserClick={() => onUserClick(i.userId)}
          />
        ))}
      </FlipMove>
      {/* </InfiniteScroll> */}
    </>
  )
})
