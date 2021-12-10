import React, { useState } from 'react'
import cn from 'classnames'

import SignInInputs from './components/SignInInputs'
import SignUpInputs from './components/SignUpInputs'

import styles from './style.module.styl'
import 'react-phone-number-input/style.css'
import './style.css'

export default ({ createUser, verifyUser, getUserToken, onError }) => {
  const [selectedTab, setSelectedTab] = useState('signIn')

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
        {
          selectedTab === 'signIn'
            ? <SignInInputs getUserToken={getUserToken} verifyUser={verifyUser} />
            : <SignUpInputs createUser={createUser} verifyUser={verifyUser} onError={onError} />
        }
      </div>
    </div>
  )
}
