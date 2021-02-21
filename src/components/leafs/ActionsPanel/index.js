import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import styles from './style.styl'

export default ({ logout }) => (
  <div className={styles.container}>
    <FontAwesomeIcon
      className={styles.icon}
      size='1x'
      color='#bebebe'
      icon={faSignOutAlt}
      onClick={logout}
    />
  </div>
)
