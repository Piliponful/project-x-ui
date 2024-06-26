import React, { forwardRef } from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import ShareIcon from '@mui/icons-material/Share'
// import ImageIcon from '@mui/icons-material/Image'
import cn from 'classnames'
// import { formatDistanceToNow, format } from 'date-fns'

import Title from './components/Title'
import Stats from './components/Stats'
import AnswerButtons from './components/AnswerButtons'

import styles from './style.module.styl'

export default forwardRef(({ yourOwnQuestion, shortId, onUserClick, img, createdAt, addImage, username, name, answersCount, he, me, respond, createNewGroup, htmlName, onClick }, ref) => {
  const share = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Question',
        text: name,
        url: `https://poll.cc/questions/${shortId}`
      })
    }
  }

  return (
    <article ref={ref} className={styles.card}>
      {img && <img className={styles.previewImg} src={img} alt='preview image' />}
      <div className={cn(styles.innerCard, { [styles.innerCardWithImage]: img })}>
        <Title>
          <span className={styles.username} onClick={onUserClick}>{username}:</span> {htmlName ? <span dangerouslySetInnerHTML={{ __html: htmlName }} /> : name}
        </Title>
        {/* {createdAt && <p style={{ fontFamily: 'IBM Plex Sans' }}>{formatDistanceToNow(new Date(createdAt))} ago ({format(new Date(createdAt), 'PPPPp')})</p>} */}
        <Stats {...answersCount} he={he} me={me} createNewGroup={createNewGroup} />
        {!yourOwnQuestion && (!me?.answer && <AnswerButtons respond={respond} />)}
        <div className={styles.expand}>
          <OpenInNewIcon onClick={onClick} />
          <ShareIcon onClick={share} />
          {/* <ImageIcon onClick={addImage} /> */}
        </div>
      </div>
    </article>
  )
})
