import React, { forwardRef, useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import cn from 'classnames'
import InfiniteScroll from 'react-infinite-scroll-component'
import FlipMove from 'react-flip-move'
import _ from 'lodash'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import { User } from '../GroupContentScreen'
import QuestionCard from '../QuestionCard'

import styles from './style.module.styl'

// const usert = {
//   _id: '6',
//   userId: '6623cfe7e1d83d0600c06a99',
//   username: 'piliponful',
//   fullName: 'Maxim Pilipenko',
//   pictureUrl: 'https://pbs.twimg.com/profile_images/1673460497402789888/dVWWnErn_400x400.jpg',
//   twitterVerified: false,
//   followerCount: '67',
//   address: '0xf8EB7B8C3ffd1d414Bee2205FeE1C99D64435e20'
// }

export const UserHistoryTabs = forwardRef(({
  selectedTab, setSelectedTab, showDifference, setShowDifference, back, children, similarity, user
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
      <User
        style={{
          cursor: 'auto',
          border: 'none'
        }}
        user={user}
        onUserClick={() => {}}
      >
        {!_.isNull(similarity) && (
          <p
            className={styles.similarity}
          >
            Similarity to you: <span className={styles.similarityMeter}>{similarity}%</span>
          </p>
        )}
      </User>
      {!_.isNull(similarity) && (
        <>
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
          <>
            <div
              style={{
                width: 'calc(100% - 30px)',
                height: 1,
                borderTop: '1px solid rgb(179, 179, 179)',
                boxSizing: 'border-box',
                margin: '15px auto'
              }}
            />
            <div className={styles.tabs}>
              <div className={cn({ [styles.selected]: selectedTab === 'questions' })} onClick={() => setSelectedTab('questions')}>His/Her Questions</div>
              <div className={cn({ [styles.selected]: selectedTab === 'answers' })} onClick={() => setSelectedTab('answers')}>His/Her Answers</div>
            </div>
          </>
        )
      }
      {/* <FlipMove typeName={null} appearAnimation='fade' enterAnimation='fade' leaveAnimation='fade'> */}
      {children}
      {/* </FlipMove> */}
    </div>
  )
})

export const Empty = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <span
      style={{
        color: '#3b3b3b',
        fontSize: 36,
        fontWeight: 300
      }}
    >
      empty
    </span>
  </div>
)

Empty.prototype = {}

export const UserQuestionsHistory = forwardRef(({
  questions, hasMore, fetchQuestions, respond, createNewGroup, onUserClick
}, ref) => {
  if (questions && questions.length === 0) {
    return <Empty />
  }
  return (
    <>
      <InfiniteScroll
        scrollableTarget='user-content-scroll-target'
        dataLength={questions?.length || 0}
        next={fetchQuestions}
        hasMore={hasMore}
        className={styles.usersItems}
      >
        <FlipMove
          appearAnimation='elevator'
          typeName={null}
          maintainContainerHeight
        >
          {questions && questions.map(i => (
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
  answers
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

  const questionsToShow = answers && ((selectedTab === 'notAnswered'
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
  )))

  return (
    <>
      <div
        style={{
          width: 'calc(100% - 30px)',
          height: 1,
          borderTop: '1px solid rgb(179, 179, 179)',
          boxSizing: 'border-box',
          margin: '15px auto'
          // marginBottom: 23
        }}
      />
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
      {questionsToShow && questionsToShow.length === 0 && <Empty />}
      <FlipMove
        appearAnimation='elevator'
        typeName={null}
        maintainContainerHeight
      >
        {questionsToShow}
      </FlipMove>
      {/* </InfiniteScroll> */}
    </>
  )
})
