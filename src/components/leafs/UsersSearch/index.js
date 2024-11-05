import React, { forwardRef } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import Handlebars from 'handlebars'
import humanNumber from 'human-number'
import XIcon from '@mui/icons-material/X'
import InfiniteScroll from 'react-infinite-scroll-component'

import QuestionCardsRow from '../../shallow/QuestionCardsRow'

import styles from './style.module.styl'

Handlebars.registerHelper('bold', function (options) {
  const targetText = options.hash.text
  const replacement = `<strong>${targetText}</strong>`
  return new Handlebars.SafeString(
    this.text.replace(new RegExp(targetText, 'gi'), replacement)
  )
})

export default forwardRef(({ style, users, fetchUsers, hasMore, total, back, search, onUserClick }, ref) => {
  const templateString = `{{bold text="${search}"}}`
  const template = Handlebars.compile(templateString)

  return (
    <QuestionCardsRow style={style} id='users-search-scroll-target' ref={ref} className={styles.usersContainer}>
      <div className={styles.totalAndBack}>
        <div className={styles.total}>{total} users found</div>
        <CloseIcon className={styles.back} onClick={back} />
      </div>
      <InfiniteScroll
        scrollableTarget='users-search-scroll-target'
        dataLength={users.length}
        next={fetchUsers}
        hasMore={hasMore}
        // loader={<h4>Loading...</h4>}
        // endMessage={
        //   <p style={{ textAlign: 'center' }}>
        //     <b>Yay! You have seen it all</b>
        //   </p>
        // }
        className={styles.usersItems}
      >
        {users.map(user => {
          let htmlOutput
          if (search) {
            htmlOutput = template({ text: user.username })
          }

          return (
            <div className={styles.userItem} key={user._id} onClick={() => onUserClick(user)}>
              <div className={styles.row}>
                {user.pictureUrl && <img src={user.pictureUrl} alt={`${user.name} profile picture`} />}
                <div className={styles.column}>
                  {htmlOutput ? <span dangerouslySetInnerHTML={{ __html: htmlOutput }} /> : <span>{user.username}</span>}
                  <span>{humanNumber(user.followerCount)} followers</span>
                </div>
              </div>
              {user.followerCount && (
                <a
                  onClick={e => {
                    e.stopPropagation()
                    window.mixpanel.track('X Profile Click', { url: `https://twitter.com/${user?.username}` })
                  }}
                  href={`https://twitter.com/${user?.username}`}
                  target='_blank'
                  rel='noreferrer'
                >
                  <XIcon />
                </a>
              )}
            </div>
          )
        })}
      </InfiniteScroll>
    </QuestionCardsRow>
  )
})
