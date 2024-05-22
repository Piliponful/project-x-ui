import React, { forwardRef } from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import ShareIcon from '@mui/icons-material/Share'
// import { formatDistanceToNow, format } from 'date-fns'

import Title from './components/Title'
import Stats from './components/Stats'
import AnswerButtons from './components/AnswerButtons'

import styles from './style.module.styl'

export default forwardRef(({ yourOwnQuestion, _id, onUserClick, createdAt, username, name, answersCount, he, me, respond, createNewGroup, htmlName, onClick }, ref) => {
  const share = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Question',
        text: name,
        url: `https://poll.cc/questions/${_id}`
      })
    }
  }

  return (
    <article ref={ref} className={styles.card}>
      <div className={styles.expand}>
        <OpenInNewIcon onClick={onClick} />
        <ShareIcon onClick={share} />
      </div>
      <Title>
        <span className={styles.username} onClick={onUserClick}>{username}:</span> {htmlName ? <span dangerouslySetInnerHTML={{ __html: htmlName }} /> : name}
      </Title>
      {/* {createdAt && <p style={{ fontFamily: 'IBM Plex Sans' }}>{formatDistanceToNow(new Date(createdAt))} ago ({format(new Date(createdAt), 'PPPPp')})</p>} */}
      <Stats {...answersCount} he={he} me={me} createNewGroup={createNewGroup} />
      {!yourOwnQuestion && (!me?.answer && <AnswerButtons respond={respond} />)}
    </article>
  )
})
