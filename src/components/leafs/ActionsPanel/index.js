import React, { useState, useContext, forwardRef } from 'react'
import { useDetectClickOutside } from 'react-detect-click-outside'
import SettingsIcon from '@mui/icons-material/Settings'
import XIcon from '@mui/icons-material/X'

import { MainScreenSwipeContext } from '../../shallow/Body'
import { getTwitterOAuthUrl } from '../Authentication/components/SignInInputs/SignInInputs'

import Text from '../../shared/Text'

import styles from './style.module.styl'

export default forwardRef(({ logout, username, redirectUri, showMyHistory, changeUser, testUsers = [] }, ref2) => {
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
          <div onClick={showMyHistory}>My Questions/Answers</div>
          {Boolean(testUsers.length) && (
            <div className={styles.divider}>
              Test Users
            </div>
          )}
          {testUsers.map(i => (
            <div key={i.fullName} onClick={() => changeUser(i.fullName)}>{i.fullName}</div>
          ))}
          {Boolean(testUsers.length) && (
            <div onClick={() => changeUser()}>me</div>
          )}
        </div>
      )}

      {
        username && (
          <SettingsIcon
            className={styles.icon}
            sx={{ color: '#2b2b2b' }}
          />
        )
      }
    </>
  )

  if (!username) {
    return (
      <a
        ref={node => {
          if (ref2) {
            ref2(node)
          }
        }}
        className={styles.container}
        style={{ justifyContent: 'center' }}
        href={twitterAuthUrl}
      >
        {content}
      </a>
    )
  }

  return (
    <div
      ref={node => {
        ref.current = node
        if (ref2) {
          ref2(node)
        }
      }}
      className={styles.container}
      onClick={() => setShowDropdown(!showDropdown)}
    >
      {content}
    </div>
  )
})
