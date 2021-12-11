import React, { useState } from 'react'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import cn from 'classnames'

import Button from '../../../../shared/Button'
import Verification from '../Verification'

import styles from './style.module.styl'

export default ({ createUser: f, verifyUser: f2, onError }) => {
  const [loading, setLoading] = useState(null)
  const [{
    username,
    password,
    phoneNumber,
    country,
    verificationCode,
    resend
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
      await f({ username, password, phoneNumber, country })
      setShowVerification(true)
    } catch (e) {
      onError(e.message)
    }
    setLoading(false)
  }

  const verifyUser = async () => {
    setLoading(true)

    await f2({ verificationCode })

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
            <Verification
              verificationCode={verificationCode}
              onFieldChange={onFieldChange}
              resend={resend}
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
