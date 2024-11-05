import React, { useState, useContext, forwardRef } from 'react'
import { useDetectClickOutside } from 'react-detect-click-outside'
import SettingsIcon from '@mui/icons-material/Settings'
import XIcon from '@mui/icons-material/X'
import GoogleIcon from '@mui/icons-material/Google'
import { useGoogleLogin } from '@react-oauth/google'

import { MainScreenSwipeContext } from '../../shallow/Body'

import Text from '../../shared/Text'

import styles from './style.module.styl'

export default forwardRef(({ logout, username, showMyHistory, changeUser, testUsers = [], handleTwitterLogin, createUser }, ref2) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const ref = useDetectClickOutside({ onTriggered: () => setShowDropdown(false) })
  const { setIsModalOpen } = useContext(MainScreenSwipeContext)

  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      const accessToken = tokenResponse.access_token

      try {
        const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })

        if (!userInfoResponse.ok) {
          throw new Error('Failed to fetch user info')
        }

        const userInfo = await userInfoResponse.json() // Parse the JSON response
        await createUser(userInfo)
      } catch (error) {
        console.error('Error fetching user info:', error)
      }
    },
    onError: (error) => {
      window.mixpanel.track('Login Failed', {
        error
      })
    }
  })

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
              <GoogleIcon />
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
      <button
        ref={node => {
          if (ref2) {
            ref2(node)
          }
        }}
        className={styles.container}
        style={{ justifyContent: 'center', border: 'none', fontSize: 16 }}
        onClick={login}
      >
        {content}
      </button>
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
