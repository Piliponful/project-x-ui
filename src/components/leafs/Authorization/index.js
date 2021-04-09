import React, { useState } from 'react'
import cn from 'classnames'

import Button from '../../shared/Button'

import styles from './style.styl'

export default ({ createUser: a, verifyUser, getUserToken }) => {
  const [{
    username,
    password,
    phoneNumber,
    verificationCode
  }, setFields] = useState({ username: '', password: '', phoneNumber: '', verificationCode: '' })
  const [selectedTab, setSelectedTab] = useState('signIn')
  const [showVerification, setShowVerification] = useState(false)

  const onFieldChange = e => {
    e.preventDefault()
    setFields(state => ({ ...state, [e.target.name]: e.target.value }))
  }

  const createUser = async () => {
    await a({ username, password, phoneNumber })
    setShowVerification(true)
  }

  return (
    <div className={styles.containersContainer}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span
            className={cn(styles.signUp, { [styles.active]: selectedTab === 'signUp' })}
            onClick={() => setSelectedTab('signUp')}
          >
            Sign Up
          </span>
          <span
            className={cn(styles.signIn, { [styles.active]: selectedTab === 'signIn' })}
            onClick={() => setSelectedTab('signIn')}
          >
            Sign In
          </span>
        </div>

        <input value={username} onChange={onFieldChange} placeholder='username' name='username' className={styles.input} />
        <input
          type='password'
          value={password}
          onChange={onFieldChange}
          placeholder='password'
          name='password'
          className={cn(styles.input, { [styles.lastInput]: selectedTab === 'signIn' })}
        />
        {
          selectedTab === 'signUp'
            ? (
              <input
                value={phoneNumber}
                onChange={onFieldChange}
                placeholder='phone number'
                name='phoneNumber'
                className={cn(styles.input, { [styles.lastInput]: !showVerification })}
              />
              )
            : null
        }
        {
          (selectedTab === 'signUp' && showVerification)
            ? (
              <>
                <input
                  value={verificationCode}
                  onChange={onFieldChange}
                  placeholder='verification code'
                  name='verificationCode'
                  className={styles.input}
                />
                <span className={styles.hint}>*you'll get verificaiton code on this phone number</span>
              </>
              )
            : null
        }
        <Button
          className={styles.button}
          onClick={() => selectedTab === 'signUp'
            ? (showVerification ? verifyUser({ verificationCode }) : createUser({ username, password, phoneNumber }))
            : getUserToken({ username, password })}
        >
          {selectedTab === 'signUp' ? (showVerification ? 'Sign Up' : 'Get Code') : 'Sign In'}
        </Button>
      </div>
    </div>
  )
}
