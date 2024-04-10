import React, { useState } from 'react'
import { useDetectClickOutside } from 'react-detect-click-outside'
import SettingsIcon from '@mui/icons-material/Settings'

import Text from '../../shared/Text'

import styles from './style.module.styl'

export default ({ logout, username }) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const ref = useDetectClickOutside({ onTriggered: () => setShowDropdown(false) })

  return (
    <div ref={ref} className={styles.container} onClick={() => setShowDropdown(!showDropdown)}>
      <Text className={styles.username}>Settings</Text>
      <div style={{ display: showDropdown ? 'flex' : 'none' }} className={styles.dropdown}>
        <div onClick={logout}>Log out</div>
        <div>Rewards</div>
      </div>
      <SettingsIcon
        className={styles.icon}
        sx={{ color: '#bebebe' }}
      />
    </div>
  )
}
