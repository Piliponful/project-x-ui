import React, { useState } from 'react'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import cn from 'classnames'

import Button from '../../../../shared/Button'
import Verification from '../Verification'

import styles from './style.module.styl'

export default ({ createUser: f, verifyUser: f2, onError, resend }) => {
  const [loading, setLoading] = useState(null)
  const [{
    username,
    password,
    phoneNumber,
    country,
    verificationCode
  }, setFields] = useState({ username: '', password: '', phoneNumber: '', country: '', verificationCode: '' })
  const [error, setError] = useState({})
  const [showVerification, setShowVerification] = useState(false)

  const onFieldChange = e => {
    if (e.target.name === error) {
      setError()
    }
    e.preventDefault()
    setFields(state => ({ ...state, [e.target.name]: e.target.value }))
  }

  const createUser = async () => {
    if (!username) {
      setError('username')
      onError('Username cannot be empty')
      return
    }

    if (!password) {
      setError('password')
      onError('Password cannot be empty')
      return
    }

    if (!country) {
      setError('phone')
      onError('Country is not selected')
      return
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      setError('phone')
      onError('Phone number is invalid')
      return
    }

    setError()
    setLoading(true)

    try {
      await f({ username, password, phoneNumber, country })
      setShowVerification(true)
    } catch (e) {
      onError(e.message)
    }
    setLoading(false)
  }

  const verifyUser = async () => {
    if (!verificationCode) {
      setError('verificationCode')
      onError('Verification code cannot be empty')
      return
    }

    setError()

    setLoading(true)

    await f2({ verificationCode })

    setLoading(false)
  }

  return (
    <>
      <input
        value={username}
        onChange={onFieldChange}
        placeholder='username'
        name='username'
        className={cn(styles.input, { [styles.inputError]: error === 'username' })}
        autoComplete='nope'
      />
      <input
        type='password'
        value={password}
        onChange={onFieldChange}
        placeholder='password'
        name='password'
        className={cn(styles.input, { [styles.inputError]: error === 'password' })}
        autoComplete='new-password'
      />
      <PhoneInput
        placeholder='phone number'
        name='phoneNumber'
        value={phoneNumber}
        onCountryChange={country => setFields(state => ({ ...state, country }))}
        onChange={value => setFields(state => ({ ...state, phoneNumber: value }))}
        className={cn(styles.input, { [styles.withoutMargin]: !showVerification, [styles.inputError]: error === 'phone' })}
      />
      {
        showVerification
          ? (
            <Verification
              verificationCode={verificationCode}
              onFieldChange={onFieldChange}
              resend={resend}
              className={cn({ [styles.inputError]: error === 'verificationCode' })}
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
