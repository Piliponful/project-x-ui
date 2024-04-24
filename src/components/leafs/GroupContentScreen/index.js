import React, { forwardRef } from 'react'
import XIcon from '@mui/icons-material/X'
import humanNumber from 'human-number'
import CloseIcon from '@mui/icons-material/Close'

import styles from './style.module.styl'

export default forwardRef(({ users, show, onUserClick, close, style }, ref) => {
  return (
    <div ref={ref} style={{ ...(show && ({ display: 'flex' })), ...style }} className={styles.screenWithGroupContent}>
      <div className={styles.close}><CloseIcon onClick={close} sx={{ fontSize: 30, color: '#c1c1c1' }} /></div>
      {users.map(user => (
        <div className={styles.userItem} key={user._id} onClick={() => onUserClick(user)}>
          <div className={styles.row}>
            {user.pictureUrl && <img src={user.pictureUrl} alt={`${user.name} profile picture`} />}
            {user.followerCount
              ? (
                <div className={styles.column}>
                  <span>{user.fullName}</span>
                  <span>{humanNumber(user.followerCount)} followers</span>
                </div>
                )
              : <span>{user.name}</span>}
          </div>
          <a href={`https://twitter.com/${user.username}`} target='_blank' rel='noreferrer'>
            <XIcon />
          </a>
        </div>
      ))}
    </div>
  )
})
