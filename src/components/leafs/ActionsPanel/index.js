import React, { useState, useContext } from 'react'
import { useDetectClickOutside } from 'react-detect-click-outside'
import SettingsIcon from '@mui/icons-material/Settings'
import XIcon from '@mui/icons-material/X'

import { MainScreenSwipeContext } from '../../shallow/Body'
import { getTwitterOAuthUrl } from '../Authentication/components/SignInInputs/SignInInputs'

import Text from '../../shared/Text'

import styles from './style.module.styl'

export default ({ logout, username, redirectUri }) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const ref = useDetectClickOutside({ onTriggered: () => setShowDropdown(false) })
  const { setIsModalOpen } = useContext(MainScreenSwipeContext)

  const twitterAuthUrl = getTwitterOAuthUrl(redirectUri)

  const content = (
    <>
      {
        username
          ? <Text className={styles.username}>Settings ({username})</Text>
          : (
            <div className={styles.twitterSignIn}>
              <Text className={styles.username}>
                Sign in with
              </Text>
              <XIcon />
            </div>
            )
      }

      {username && (
        <div style={{ display: showDropdown ? 'flex' : 'none' }} className={styles.dropdown}>
          <div onClick={logout}>Log out</div>
          <div onClick={() => setIsModalOpen(true)}>Rewards</div>
        </div>
      )}

      {
        username && (
          <SettingsIcon
            className={styles.icon}
            sx={{ color: '#bebebe' }}
          />
        )
      }
    </>
  )

  if (!username) {
    return (
      <a className={styles.container} style={{ justifyContent: 'center' }} href={twitterAuthUrl}>
        {content}
      </a>
    )
  }

  return (
    <div ref={ref} className={styles.container} onClick={() => setShowDropdown(!showDropdown)}>
      {content}
    </div>
  )
}
