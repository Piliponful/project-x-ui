import React, { useState, useContext } from 'react'
import { useDetectClickOutside } from 'react-detect-click-outside'
import SettingsIcon from '@mui/icons-material/Settings'

import { MainScreenSwipeContext } from '../../shallow/Body'

import Text from '../../shared/Text'

import styles from './style.module.styl'

export default ({ logout, username }) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const ref = useDetectClickOutside({ onTriggered: () => setShowDropdown(false) })
  const { setIsModalOpen } = useContext(MainScreenSwipeContext)

  return (
    <div ref={ref} className={styles.container} onClick={() => setShowDropdown(!showDropdown)}>
      <Text className={styles.username}>Settings ({username})</Text>
      <div style={{ display: showDropdown ? 'flex' : 'none' }} className={styles.dropdown}>
        <div onClick={logout}>Log out</div>
        <div onClick={() => setIsModalOpen(true)}>Rewards</div>
      </div>
      <SettingsIcon
        className={styles.icon}
        sx={{ color: '#bebebe' }}
      />
    </div>
  )
}
