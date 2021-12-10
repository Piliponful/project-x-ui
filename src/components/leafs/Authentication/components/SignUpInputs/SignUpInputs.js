import React, { useState } from 'react'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import cn from 'classnames'

import Button from '../../../../shared/Button'

import styles from './style.module.styl'

export default ({ createUser: a, verifyUser, onError }) => {
  const [loading, setLoading] = useState(null)
  const [{
    username,
    password,
    phoneNumber,
    country,
    verificationCode
  }, setFields] = useState({ username: '', password: '', phoneNumber: '', country: '', verificationCode: '' })
  const [showVerification, setShowVerification] = useState(false)

  const onFieldChange = e => {
    e.preventDefault()
    setFields(state => ({ ...state, [e.target.name]: e.target.value }))
  }

  const createUser = async () => {
    if (!isValidPhoneNumber(phoneNumber)) {
      onError('Phone number is invalid')
      return
    }
    setLoading(true)
    try {
      await a({ username, password, phoneNumber, country })
      setShowVerification(true)
    } catch (e) {
      onError(e.message)
    }
    setLoading(false)
  }

  return (
    <>
      <input value={username} onChange={onFieldChange} placeholder='username' name='username' className={styles.input} autoComplete='nope' />
      <input
        type='password'
        value={password}
        onChange={onFieldChange}
        placeholder='password'
        name='password'
        className={styles.input}
        autoComplete='new-password'
      />
      <PhoneInput
        placeholder='phone number'
        name='phoneNumber'
        value={phoneNumber}
        onCountryChange={country => setFields(state => ({ ...state, country }))}
        onChange={value => setFields(state => ({ ...state, phoneNumber: value }))}
        className={cn(styles.input, { [styles.withoutMargin]: !showVerification })}
      />
      {
        showVerification
          ? (
            <input
              value={verificationCode}
              onChange={onFieldChange}
              placeholder='verification code'
              name='verificationCode'
              className={cn(styles.input, styles.withoutMargin)}
            />
            )
          : null
      }
      <Button
        loading={loading}
        className={styles.button}
        onClick={() => showVerification ? verifyUser({ verificationCode }) : createUser({ username, password, phoneNumber })}
      >
        {showVerification ? 'Sign Up' : 'Get Code'}
      </Button>
    </>
  )
}
