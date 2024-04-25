import React, { forwardRef } from 'react'
import XIcon from '@mui/icons-material/X'
import humanNumber from 'human-number'
import CloseIcon from '@mui/icons-material/Close'
import InfiniteScroll from 'react-infinite-scroll-component'
import cn from 'classnames'

import styles from './style.module.styl'

export default forwardRef(({ users, fetchUsers, hasMore, show, onUserClick, close, style, className }, ref) => {
  return (
    <div id='group-content-search-scroll-target' ref={ref} style={{ ...(show && ({ display: 'flex' })), ...style }} className={cn(styles.screenWithGroupContent, className)}>
      <div className={styles.close}><CloseIcon onClick={close} sx={{ fontSize: 30, color: '#c1c1c1' }} /></div>
      <InfiniteScroll
        scrollableTarget='group-content-search-scroll-target'
        dataLength={users.length}
        next={fetchUsers}
        hasMore={hasMore}
        // loader={<h4>Loading...</h4>}
        // endMessage={
        //   <p style={{ textAlign: 'center' }}>
        //     <b>Yay! You have seen it all</b>
        //   </p>
        // }
        className={styles.usersContainer}
      >
        {users.map(user => (
          <div className={styles.userItem} key={user._id} onClick={() => onUserClick(user)}>
            <div className={styles.row}>
              {user.pictureUrl && <img src={user.pictureUrl} alt={`${user.name} profile picture`} />}
              <div className={styles.column}>
                <span>{user.fullName}</span>
                <span>{humanNumber(user.followerCount)} followers</span>
              </div>
            </div>
            <a href={`https://twitter.com/${user.username}`} target='_blank' rel='noreferrer'>
              <XIcon />
            </a>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  )
})
