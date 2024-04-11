import React from 'react'

import styles from './style.module.styl'

export default ({ users, show }) => {
  return (
    <div style={show && { display: 'flex' }} className={styles.screenWithGroupContent}>
      {users.map(user => (
        <p key={user._id}>{user.name}</p>
      ))}
    </div>
  )
}
