import React, { forwardRef } from 'react'

import Title from './components/Title'
import Stats from './components/Stats'
import AnswerButtons from './components/AnswerButtons'

import styles from './style.module.styl'

export default forwardRef(({ yourOwnQuestion, onUserClick, username, name, answersCount, he, me, respond, createNewGroup, htmlName }, ref) => {
  return (
    <article ref={ref} className={styles.card}>
      <Title>
        <span className={styles.username} onClick={onUserClick}>{username}:</span> {htmlName ? <span dangerouslySetInnerHTML={{ __html: htmlName }} /> : name}
      </Title>
      <Stats {...answersCount} he={he} me={me} createNewGroup={createNewGroup} />
      {!yourOwnQuestion && (!me?.answer && <AnswerButtons style={{ width: 400 }} respond={respond} />)}
    </article>
  )
})
