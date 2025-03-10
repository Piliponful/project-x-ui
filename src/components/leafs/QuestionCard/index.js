import React, { forwardRef, useContext, useState } from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import ShareIcon from '@mui/icons-material/Share'
import ImageIcon from '@mui/icons-material/Image'
import cn from 'classnames'
import { formatDistanceToNow } from 'date-fns'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import { Tooltip as ReactTooltip } from 'react-tooltip'

import Title from './components/Title'
import Stats from './components/Stats'
import AnswerButtons from './components/AnswerButtons'
import VennDiagram from './VennDiagram'
// import JoinFullOutlinedIcon from '@mui/icons-material/JoinFullOutlined'

import { MainScreenSwipeContext } from '../../shallow/Body'

import styles from './style.module.styl'

function daysSince (dateString) {
  const givenDate = new Date(dateString)
  const currentDate = new Date()

  // Calculate the difference in milliseconds
  const differenceInTime = currentDate - givenDate

  // Convert milliseconds to days
  const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24))

  return differenceInDays
}

export default forwardRef(({
  toggleGroupMode,
  yourOwnQuestion,
  shortId,
  onUserClick,
  img,
  createdAt,
  username,
  name,
  answersCount,
  he,
  me,
  respond,
  createNewGroup,
  htmlName,
  onClick,
  handleTwitterLogin,
  parentMessageId,
  createUser,
  trackConversion,
  addImageAvailable,
  loading,
  selected,
  groupMode,
  comments,
  fetchComments
}, ref) => {
  const [showComments, setShowComments] = useState(false)

  const share = () => {
    if (navigator.share) {
      window.mixpanel.track('Share', {
        questionId: shortId
      })
      navigator.share({
        title: 'Question',
        text: name,
        url: `https://poll.cc/questions/${shortId}`
      })
    }
  }

  const { setIsLoginModalOpen, setAddImgModal, setSelectedMessage, setAnswer } = useContext(MainScreenSwipeContext)

  const redirectToLogin = answer => {
    // eslint-disable-next-line no-undef
    setIsLoginModalOpen(true)
    setAnswer({ answer, parentMessageId, shortId })
    window.mixpanel.track('Anonymous Question Answer', {
      questionId: shortId,
      answer
    })
  }

  return (
    <article ref={ref} className={cn(styles.card, { [styles.selectedQuestion]: selected })}>
      {selected && <div className={styles.badge}><span>Selected</span></div>}
      {img && <img className={styles.previewImg} src={img} alt='preview image' />}
      <div className={cn(styles.innerCard, { [styles.innerCardWithImage]: img })}>
        <Title>
          {groupMode ? <b>Create group</b> : <div><span className={styles.username} onClick={onUserClick}>{username}:</span> {htmlName ? <span dangerouslySetInnerHTML={{ __html: htmlName }} /> : name}</div>}
        </Title>
        <Stats {...answersCount} he={he} me={me} createNewGroup={createNewGroup} />
        {!yourOwnQuestion && (!me?.answer && <AnswerButtons loading={loading} respond={respond || redirectToLogin} />)}
        <div className={styles.expand}>
          <span style={{ color: '#00000063' }}>{formatDistanceToNow((new Date(createdAt)))} ago</span>
          <div style={{ display: 'flex', gap: 12 }}>
            <ChatBubbleIcon className={styles.icon} onClick={() => { fetchComments(); setShowComments(!showComments) }} />
            {window.featureFlags?.groups && (
              <div style={{ position: 'relative', height: 24, width: 34 }}>
                <div style={{ marginTop: 2, height: 'auto', width: 34, position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                  <VennDiagram groupMode={groupMode} onClick={toggleGroupMode} />
                </div>
              </div>
            )}
            <a href={`/questions/${shortId}`}><OpenInNewIcon className={styles.icon} onClick={onClick} /></a>
            <ShareIcon className={styles.icon} onClick={share} />
            {addImageAvailable && (
              <ImageIcon
                className={styles.icon}
                onClick={() => {
                  setAddImgModal(true)
                  setSelectedMessage(parentMessageId)
                }}
              />
            )}
          </div>
        </div>
        {showComments && (
          <div
            className={styles.expand}
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
          >
            {comments.map(i => console.log('test: ', i.user?.difference) || (
              <div key={i.text} className={styles.comments}>
                <div style={{ display: 'flex', gap: 6 }}>
                  <img src={i.user?.pictureUrl} style={{ height: 32, width: 'auto', borderRadius: '50%', cursor: 'pointer' }} />
                  <small className={styles.commentText} style={{ color: 'gray', cursor: 'pointer' }}>{i.user.username}</small>
                  <span style={{ color: 'gray' }}>•</span>
                  <small className={styles.commentText} style={{ color: 'gray', cursor: 'pointer' }}>{daysSince(i.createdAt)}d</small>
                  <span style={{ color: 'gray' }}>•</span>
                  <small className={styles.commentText} data-tooltip-id='my-tooltip-2' style={{ color: 'gray', cursor: 'pointer' }}>{i.user?.difference}%</small>
                </div>
                <p
                  style={{
                    marginLeft: 34,
                    background: '#8080803b',
                    padding: 8,
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5,
                    borderBottomLeftRadius: 5
                    // borderTopLeftRadius: 1
                  }}
                >
                  {i.text}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      <ReactTooltip
        id='my-tooltip-2'
        place='bottom'
        variant='info'
        content='Similarity to you'
      />
    </article>
  )
})
