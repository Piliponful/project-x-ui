import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import Text from '../../shared/Text'

import styles from './style.module.styl'

export default ({ logout, username }) => (
  <div className={styles.container}>
    <Text className={styles.username}>{username}</Text>
    <FontAwesomeIcon
      className={styles.icon}
      size='1x'
      color='#bebebe'
      icon={faSignOutAlt}
      onClick={logout}
    />
  </div>
)
