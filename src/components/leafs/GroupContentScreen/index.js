import React from 'react'
import XIcon from '@mui/icons-material/X'
import humanNumber from 'human-number'

import styles from './style.module.styl'

export default ({ users, show, onUserClick }) => {
  return (
    <div style={show && { display: 'flex' }} className={styles.screenWithGroupContent}>
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
}
