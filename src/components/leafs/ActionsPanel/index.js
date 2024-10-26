import React, { useState, useContext, forwardRef } from 'react'
import { useDetectClickOutside } from 'react-detect-click-outside'
import SettingsIcon from '@mui/icons-material/Settings'
import XIcon from '@mui/icons-material/X'
import { jwtDecode } from 'jwt-decode'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'

import { MainScreenSwipeContext } from '../../shallow/Body'

import Text from '../../shared/Text'

import styles from './style.module.styl'

const CustomLoginButton = () => {
  const handleLoginSuccess = (credentialResponse) => {
    const token = credentialResponse.credential // This is the JWT token
    const decodedToken = jwtDecode(token) // Decode the JWT token
    const userEmail = decodedToken.email // Get email from the decoded token
    console.log('User Info:', decodedToken)
    alert(`Welcome! Your email is: ${userEmail}`)
  }

  const handleLoginFailure = (error) => {
    console.error('Login Failed: ', error)
    alert('Login failed. Please try again.')
  }

  return (
    <GoogleLogin
      onSuccess={handleLoginSuccess}
      onFailure={handleLoginFailure}
      cookiePolicy='single_host_origin'
      style={{ display: 'none' }} // Hide the default button
    >
      <button
        onClick={handleLoginSuccess}
        style={{ padding: '10px', backgroundColor: '#4285F4', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Sign in with Google
      </button>
    </GoogleLogin>
  )
}

export default forwardRef(({ logout, username, showMyHistory, changeUser, testUsers = [], handleTwitterLogin }, ref2) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const ref = useDetectClickOutside({ onTriggered: () => setShowDropdown(false) })
  const { setIsModalOpen } = useContext(MainScreenSwipeContext)

  const content = (
    <>
      {
        username
          ? <Text className={styles.username}>Settings ({username})</Text>
          : (
            <div className={styles.twitterSignIn}>
              <CustomLoginButton />
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
        onClick={handleTwitterLogin}
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
