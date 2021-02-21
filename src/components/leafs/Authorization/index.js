import React, { useState } from 'react'
import cn from 'classnames'

import Button from '../../shared/Button'

import styles from './style.styl'

export default ({ signIn, signUp, showVerification }) => {
  const [{
    username,
    password,
    phoneNumber,
    verificationCode
  }, setFields] = useState({ username: '', password: '', phoneNumber: '', verificationCode: '' })
  const [selectedTab, setSelectedTab] = useState('signIn')

  const onFieldChange = e => setFields({ [e.target.name]: e.target.value })

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
          value={password}
          onChange={onFieldChange}
          placeholder='password'
          name='password'
          className={cn(styles.input, { [styles.lastInput]: selectedTab === 'signIn' })}
        />
        {selectedTab === 'signUp'
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
        {(selectedTab === 'signUp' && showVerification)
          ? (
              <>
                <input value={verificationCode} onChange={onFieldChange} placeholder='verification code' name='verificationCode' className={styles.input} />
                <span className={styles.hint}>*you'll get verificaiton code on this phone number</span>
              </>
          )
          : null
        }
        <Button
          className={styles.button}
          onClick={() => selectedTab === 'signUp' ? signUp({ username, password, phoneNumber }) : signIn({ username, password })}
        >
          {selectedTab === 'signUp' ? (showVerification ? 'Sign Up' : 'Get Code') : 'Sign In'}
        </Button>
      </div>
    </div>
  )
}
