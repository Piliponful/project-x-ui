import React, { forwardRef, useContext } from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import ShareIcon from '@mui/icons-material/Share'
import ImageIcon from '@mui/icons-material/Image'
import cn from 'classnames'
import { formatDistanceToNow } from 'date-fns'

import Title from './components/Title'
import Stats from './components/Stats'
import AnswerButtons from './components/AnswerButtons'
import VennDiagram from './VennDiagram'
// import JoinFullOutlinedIcon from '@mui/icons-material/JoinFullOutlined'

import { MainScreenSwipeContext } from '../../shallow/Body'

import styles from './style.module.styl'

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
  selected
}, ref) => {
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

  console.log('selected: ', selected)

  return (
    <>
      <article ref={ref} className={cn(styles.card, { [styles.selectedQuestion]: selected })}>
        {selected && <div className={styles.badge}><span>Selected</span></div>}
        {img && <img className={styles.previewImg} src={img} alt='preview image' />}
        <div className={cn(styles.innerCard, { [styles.innerCardWithImage]: img })}>
          <Title>
            <span className={styles.username} onClick={onUserClick}>{username}:</span> {htmlName ? <span dangerouslySetInnerHTML={{ __html: htmlName }} /> : name}
          </Title>
          <Stats {...answersCount} he={he} me={me} createNewGroup={createNewGroup} />
          {!yourOwnQuestion && (!me?.answer && <AnswerButtons loading={loading} respond={respond || redirectToLogin} />)}
          <div className={styles.expand}>
            <span style={{ color: '#00000063' }}>{formatDistanceToNow((new Date(createdAt)))} ago</span>
            <div style={{ display: 'flex', gap: 12 }}>
              <div style={{ position: 'relative', height: 24, width: 36 }}>
                <div style={{ marginTop: 2, height: 'auto', width: 36, position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                  <VennDiagram onClick={toggleGroupMode} />
                </div>
              </div>
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
        </div>
      </article>
    </>
  )
})
