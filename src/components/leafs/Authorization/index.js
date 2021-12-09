import React, { useState } from 'react'
import cn from 'classnames'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'

import Button from '../../shared/Button'

import styles from './style.styl'
import 'react-phone-number-input/style.css'
import './style.css'

export default ({ createUser: a, verifyUser, getUserToken, onError }) => {
  const [loading, setLoading] = useState(null)
  const [{
    username,
    password,
    phoneNumber,
    country,
    verificationCode
  }, setFields] = useState({ username: '', password: '', phoneNumber: '', country: '', verificationCode: '' })
  const [selectedTab, setSelectedTab] = useState('signIn')
  const [showVerification, setShowVerification] = useState(false)

  const onFieldChange = e => {
    e.preventDefault()
    setFields(state => ({ ...state, [e.target.name]: e.target.value }))
  }

  const createUser = async () => {
    try {
      if (!isValidPhoneNumber(phoneNumber)) {
        onError('Phone number is invalid')
        return
      }
      setLoading(true)
      await a({ username, password, phoneNumber, country })
      setShowVerification(true)
    } catch (e) {
      onError(e.message)
    }
    setLoading(false)
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
              <PhoneInput
                placeholder='phone number'
                name='phoneNumber'
                value={phoneNumber}
                onCountryChange={country => setFields(state => ({ ...state, country }))}
                onChange={value => setFields(state => ({ ...state, phoneNumber: value }))}
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
          loading={loading}
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
