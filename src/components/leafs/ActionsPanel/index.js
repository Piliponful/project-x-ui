import React, { useState, useContext, forwardRef, useEffect } from 'react'
import { useDetectClickOutside } from 'react-detect-click-outside'
import SettingsIcon from '@mui/icons-material/Settings'
import SumsubWebSdk from '@sumsub/websdk-react'
import axios from 'axios'
import XIcon from '@mui/icons-material/X'
import cn from 'classnames'

import { MainScreenSwipeContext } from '../../shallow/Body'

import KYCIcon from './kyc.svg'

import Text from '../../shared/Text'

import styles from './style.module.styl'

export const KYCComponent = ({ userId, updateJwt, closeModal }) => {
  const [accessToken, setAccessToken] = useState('')

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const response = await axios.post('/api/kyc/access-token', {
          userId,
          levelName: 'all-data' // Replace with your level name
        })
        setAccessToken(response.data.token)
      } catch (error) {
        console.error('Error fetching access token:', error.response?.data || error.message)
      }
    }

    fetchAccessToken()
  }, [userId])

  const handleMessage = (type, payload) => {
    console.log('Sumsub message:', type, payload)
    if (type === 'idCheck.onApplicantStatusChanged' && payload.reviewStatus === 'completed' && updateJwt) {
      console.log('success KYC')
      updateJwt()
      // Handle post-verification logic here
      // closeModal()
    }
  }

  const handleError = (error) => {
    console.error('Sumsub error:', error)
  }

  return (
    <div>
      {accessToken && userId && (
        <SumsubWebSdk
          accessToken={accessToken}
          expirationHandler={() => axios.post('/api/kyc/access-token', { userId, levelName: 'basic-kyc-level' }).then(res => res.data.token)}
          config={{ lang: 'en' }}
          options={{ addViewportTag: false, adaptIframeHeight: true }}
          onMessage={handleMessage}
          onError={handleError}
        />
      )}
    </div>
  )
}

export default forwardRef(({ logout, username, showXLogin, showKYCLogin, showMyHistory, changeUser, testUsers = [], handleTwitterLogin, createUser }, ref2) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const ref = useDetectClickOutside({ onTriggered: () => console.log('on trigger') || setShowDropdown(false) })
  const { setIsModalOpen, setShowKYCModal, setIsLoginModalOpen } = useContext(MainScreenSwipeContext)

  const content = (
    <>
      {
        username
          ? (
            <>
              <Text className={styles.username}>Settings ({username})</Text>
            </>
            )
          : (
            <div className={styles.twitterSignIn}>
              <Text className={styles.username}>
                Sign in
              </Text>
            </div>
            )
      }

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
      <>
        <button
          ref={node => {
            if (ref2) {
              ref2(node)
            }
          }}
          className={styles.container}
          style={{ justifyContent: 'center', border: 'none', fontSize: 16 }}
          onClick={() => {
            setIsLoginModalOpen(true)
          }}
        >
          {content}
        </button>
      </>
    )
  }

  return (
    <div style={{ display: 'flex', gap: 12, position: 'relative' }}>
      <div
        // ref={node => {
        //   ref.current = node
        //   if (ref2) {
        //     ref2(node)
        //   }
        // }}
        className={styles.container}
        onClick={(e) => { console.log('test dropdown true'); e.stopPropagation(); setShowDropdown(!showDropdown) }}
        style={{ width: (showKYCLogin || showXLogin) ? '40%' : '100%', textAlign: 'center' }}
        // ref={node => {
        //   ref.current = node
        //   if (ref2) {
        //     ref2(node)
        //   }
        // }}
      >
        {content}
      </div>

      {showXLogin && (
        <div className={cn(styles.twitterSignIn, styles.container)} style={{ width: 'calc(60% - 12px)' }} onClick={handleTwitterLogin}>
          <Text className={styles.username}>
            Verify yourself with
          </Text>
          <XIcon />
        </div>
      )}

      {showKYCLogin && (
        <div className={cn(styles.twitterSignIn, styles.container)} style={{ width: 'calc(60% - 12px)' }} onClick={() => { window.mixpanel.track('Verify Identity'); setShowKYCModal(true) }}>
          <Text className={styles.username}>
            Verify yourself with
          </Text>
          <img src={KYCIcon} style={{ height: 27, marginBottom: 3 }} />
        </div>
      )}

      {username && (
        <div
          style={{ display: showDropdown ? 'flex' : 'none' }}
          className={styles.dropdown}
          ref={node => {
            ref.current = node
            if (ref2) {
              ref2(node)
            }
          }}
        >
          <div onClick={logout}>Log out</div>
          <div
            onClick={() => {
              window.mixpanel.track('Rewards')
              setIsModalOpen(true)
            }}
          >
            Rewards
          </div>
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
    </div>
  )
})
