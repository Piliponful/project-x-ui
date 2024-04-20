import React from 'react'
import XIcon from '@mui/icons-material/X'
import humanNumber from 'human-number'

import styles from './style.module.styl'

export default ({ users, show, onUserClick }) => {
  return (
    <div style={show && { display: 'flex' }} className={styles.screenWithGroupContent}>
      {users.map(user => (
        <div className={styles.userItem} key={user._id} onUserClick={() => onUserClick(user)}>
          <div className={styles.row}>
            {user.picture && <img src={user.picture} alt={`${user.name} profile picture`} />}
            {user.followers
              ? (
                <div className={styles.column}>
                  <span>{user.name}</span>
                  <span>{humanNumber(user.followers)} followers</span>
                </div>
                )
              : <span>{user.name}</span>}
          </div>
          {user.url && (
            <a href={user.url} target='_blank' rel='noreferrer'>
              <XIcon />
            </a>
          )}
        </div>
      ))}
    </div>
  )
}
