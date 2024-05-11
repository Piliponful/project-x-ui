import React, { forwardRef } from 'react'
import XIcon from '@mui/icons-material/X'
import humanNumber from 'human-number'
import CloseIcon from '@mui/icons-material/Close'
import InfiniteScroll from 'react-infinite-scroll-component'
import cn from 'classnames'
import FlipMove from 'react-flip-move'

import styles from './style.module.styl'

export const User = ({ user, onUserClick, children, style }) => {
  return (
    <div style={style} className={styles.userItem} key={user?._id} onClick={() => onUserClick(user)}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className={styles.row}>
          <FlipMove typeName={null} appearAnimation='fade' enterAnimation='fade' leaveAnimation='fade'>
            {user ? <img src={user.pictureUrl} alt={`${user.name} profile picture`} /> : <div className={styles.imgFallback} style={{ background: '#E7E4E2' }} />}
            <div className={styles.column}>
              <FlipMove typeName={null} appearAnimation='fade' enterAnimation='fade' leaveAnimation='fade'>
                <span>{user?.fullName || 'loading'}</span>
                <span>{humanNumber(user?.followerCount || 0)} followers</span>
              </FlipMove>
            </div>
          </FlipMove>
        </div>
        <a onClick={e => e.stopPropagation()} href={`https://twitter.com/${user?.username}`} target='_blank' rel='noreferrer'>
          <XIcon />
        </a>
      </div>

      {children}
    </div>
  )
}

export default forwardRef(({ users, fetchUsers, hasMore, show, onUserClick, close, style, className }, ref) => {
  return (
    <div id='group-content-search-scroll-target' ref={ref} style={{ ...(show && ({ display: 'flex' })), ...style }} className={cn(styles.screenWithGroupContent, className)}>
      <div className={styles.close}><CloseIcon className={styles.back} onClick={close} /></div>
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
        {users.map(user => <User key={user._id} user={user} onUserClick={onUserClick} />)}
      </InfiniteScroll>
    </div>
  )
})
