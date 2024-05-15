import React, { forwardRef } from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { formatDistanceToNow, format } from 'date-fns'

import Title from './components/Title'
import Stats from './components/Stats'
import AnswerButtons from './components/AnswerButtons'

import styles from './style.module.styl'

export default forwardRef(({ yourOwnQuestion, onUserClick, createdAt, username, name, answersCount, he, me, respond, createNewGroup, htmlName, onClick }, ref) => {
  return (
    <article ref={ref} className={styles.card}>
      <OpenInNewIcon className={styles.expand} onClick={onClick} />
      <Title>
        <span className={styles.username} onClick={onUserClick}>{username}:</span> {htmlName ? <span dangerouslySetInnerHTML={{ __html: htmlName }} /> : name}
      </Title>
      {createdAt && <p style={{ fontFamily: 'IBM Plex Sans' }}>{formatDistanceToNow(new Date(createdAt))} ago ({format(new Date(createdAt), 'PPPPp')})</p>}
      <Stats {...answersCount} he={he} me={me} createNewGroup={createNewGroup} />
      {!yourOwnQuestion && (!me?.answer && <AnswerButtons respond={respond} />)}
    </article>
  )
})
