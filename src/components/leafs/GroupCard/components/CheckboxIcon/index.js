import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle as check, faTimesCircle as uncheck } from '@fortawesome/free-solid-svg-icons'

import styles from './style.styl'

export default ({ color = '#bebebe', deselect }) => {
  const [icon, setIcon] = useState(check)

  return (
    <FontAwesomeIcon
      className={styles.icon}
      size='2x'
      color={color}
      icon={icon}
      onMouseEnter={() => setIcon(uncheck)}
      onMouseLeave={() => setIcon(check)}
      onClick={deselect}
    />
  )
}
