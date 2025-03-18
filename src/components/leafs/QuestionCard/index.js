import React, { forwardRef, useContext, useState } from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import ShareIcon from '@mui/icons-material/Share'
import cn from 'classnames'
import { formatDistanceToNow } from 'date-fns'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import { Tooltip } from '@heroui/tooltip'
import { useMediaQuery } from 'react-responsive'

import Title from './components/Title'
import Stats from './components/Stats'
import AnswerButtons from './components/AnswerButtons'
import AnswerButton from './components/AnswerButtons/components/Button'
import VennDiagram from './VennDiagram'
// import JoinFullOutlinedIcon from '@mui/icons-material/JoinFullOutlined'

import { MainScreenSwipeContext } from '../../shallow/Body'

import styles from './style.module.styl'

function timeSince (createdAt) {
  const createdAtDate = new Date(createdAt).getTime()
  const now = Date.now()
  const diffInMs = now - createdAtDate
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60))

  if (diffInMinutes < 60) {
    return `${diffInMinutes}m`
  }

  const diffInHours = Math.floor(diffInMinutes / 60)
  if (diffInHours < 24) {
    return `${diffInHours}h`
  }

  const diffInDays = Math.floor(diffInHours / 24)
  return `${diffInDays}d`
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
  fetchComments,
  saveComment,
  showCommentsForQuestion
}, ref) => {
  const [showComments, setShowComments] = useState(false)
  const [text, setText] = useState('')

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
  const [isHovered, setIsHovered] = useState(groupMode)

  const redirectToLogin = answer => {
    // eslint-disable-next-line no-undef
    setIsLoginModalOpen(true)
    setAnswer({ answer, parentMessageId, shortId })
    window.mixpanel.track('Anonymous Question Answer', {
      questionId: shortId,
      answer
    })
  }
  const isMobile = useMediaQuery({ query: '(max-width: 925px)' })

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
          <span style={{ color: '#00000063' }}>{isMobile ? timeSince(createdAt) : `${formatDistanceToNow((new Date(createdAt)))} ago`}</span>
          <div style={{ display: 'flex', gap: 0 }}>
            <button className={styles.iconButton} onClick={() => { fetchComments(); setShowComments(!showComments) }}><ChatBubbleIcon sx={{ fill: '#121212' }} className={styles.icon} /></button>
            {window.featureFlags?.groups && (
              <Tooltip content='Create new group'>
                <div
                  className={styles.iconButton}
                  style={{ position: 'relative', height: 37, width: 54, cursor: 'pointer' }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => !groupMode && setIsHovered(false)}
                >
                  <div style={{ height: 'auto', width: 42, position: 'absolute', left: 'calc(50% + 7px)', top: '50%', transform: 'translate(-50%, -50%)' }}>
                    <VennDiagram myHover={groupMode || isHovered} fill='#121212' groupMode={groupMode} onClick={toggleGroupMode} />
                  </div>
                </div>
              </Tooltip>
            )}
            <a className={styles.iconButton} style={{ marginTop: '-1.88px' }} href={`/questions/${shortId}`}><OpenInNewIcon sx={{ fill: '#121212' }} className={styles.icon} onClick={onClick} /></a>
            <button className={styles.iconButton}><ShareIcon sx={{ fill: '#121212' }} className={styles.icon} onClick={share} /></button>
          </div>
        </div>
        {(showComments && showCommentsForQuestion) && (
          <div
            className={styles.expand}
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              paddingTop: 15
            }}
          >
            {comments.map(i => (
              <div key={i.text} className={styles.comments} style={{ alignSelf: yourOwnQuestion ? 'center' : (i.answer === 'yes' ? 'flex-start' : 'flex-end') }}>
                <div
                  style={{
                    display: 'flex',
                    gap: 6,
                    flexDirection: (i.answer === 'no' && !yourOwnQuestion) ? 'row-reverse' : 'row',
                    alignItems: 'center',
                    justifyContent: yourOwnQuestion ? 'center' : 'unset',
                    marginBottom: 5
                  }}
                >
                  <img src={i.user?.pictureUrl} style={{ height: 32, width: 'auto', borderRadius: '50%', cursor: 'pointer' }} />
                  {yourOwnQuestion
                    ? <small className={styles.commentText} style={{ color: 'gray', cursor: 'pointer' }}>OP</small>
                    : (
                      <AnswerButton
                        style={{
                          height: 26,
                          width: 46,
                          fontSize: 14
                        }}
                        noHover
                        answer={i.answer}
                        respond={() => {}}
                      />
                      )}
                  <span style={{ color: 'gray' }}>•</span>
                  <small className={styles.commentText} style={{ color: 'gray', cursor: 'pointer' }}>{i.user.username}</small>
                  <span style={{ color: 'gray' }}>•</span>
                  <small className={styles.commentText} style={{ color: 'gray', cursor: 'pointer' }}>{timeSince(i.createdAt)}</small>
                  <span style={{ color: 'gray' }}>•</span>
                  <Tooltip content='Similarity to you'>
                    <small className={styles.commentText} style={{ color: 'gray', cursor: 'pointer', position: 'relative' }}>
                      {i.user?.difference !== undefined ? `${i.user?.difference}%` : 'it\'s you'}
                    </small>
                  </Tooltip>
                </div>
                <p
                  style={{
                    marginLeft: (i.answer === 'yes' && !yourOwnQuestion) ? 34 : 0,
                    marginRight: yourOwnQuestion ? 0 : (i.answer === 'no' ? 34 : 0),
                    background: 'rgb(43 43 43 / 9%)',
                    padding: 8,
                    borderTopRightRadius: i.answer === 'yes' ? 5 : 0,
                    borderTopLeftRadius: i.answer === 'no' ? 5 : 0,
                    borderBottomRightRadius: 5,
                    borderBottomLeftRadius: 5,
                    borderRadius: yourOwnQuestion ? 5 : 0,
                    fontSize: 15
                  }}
                >
                  {i.text}
                </p>
              </div>
            ))}
            <div className={styles.addComment} style={{ width: '100%', position: 'relative' }}>
              <textarea
                disabled={!(me?.answer || yourOwnQuestion)}
                placeholder={(me?.answer || yourOwnQuestion) ? 'Comment...' : 'Answer to comment...'}
                className={styles.textarea}
                value={text}
                onChange={e => setText(e.target.value)}
              />
              <button disabled={!text} className={styles.button} onClick={() => { saveComment(text); setText('') }}>send</button>
            </div>
          </div>
        )}
      </div>
    </article>
  )
})
