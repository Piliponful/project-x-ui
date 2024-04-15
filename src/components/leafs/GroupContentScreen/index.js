import React from 'react'
import XIcon from '@mui/icons-material/X'
import humanNumber from 'human-number'

import styles from './style.module.styl'

export default ({ users, show }) => {
  return (
    <div style={show && { display: 'flex' }} className={styles.screenWithGroupContent}>
      {users.map(user => (
        <div className={styles.userItem} key={user._id}>
          <div className={styles.row}>
            <img src={user.picture} alt={`${user.name} profile picture`} />
            <div className={styles.column}>
              <span>{user.name}</span>
              <span>{humanNumber(user.followers)}</span>
            </div>
          </div>
          <a href={user.url} target='_blank' rel='noreferrer'>
            <XIcon />
          </a>
        </div>
      ))}
    </div>
  )
}
