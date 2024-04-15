import React, { useState } from 'react'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import cn from 'classnames'
import XIcon from '@mui/icons-material/X'

import Button from '../../../../shared/Button'
import Verification from '../Verification'

import styles from './style.module.styl'

export const TWITTER_STATE = 'twitter-increaser-state'
const TWITTER_CODE_CHALLENGE = 'challenge'
const TWITTER_AUTH_URL = 'https://twitter.com/i/oauth2/authorize'
const TWITTER_SCOPE = ['tweet.read', 'users.read', 'offline.access'].join(' ')

export const getURLWithQueryParams = (
  baseUrl,
  params
) => {
  const query = Object.entries(params)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&')

  return `${baseUrl}?${query}`
}

export const getTwitterOAuthUrl = redirectUri =>
  getURLWithQueryParams(TWITTER_AUTH_URL, {
    response_type: 'code',
    client_id: 'a1RVRjBMTnhsNzVPNVdZQmRHMVY6MTpjaQ',
    redirect_uri: redirectUri,
    scope: TWITTER_SCOPE,
    state: TWITTER_STATE,

    code_challenge: TWITTER_CODE_CHALLENGE,
    code_challenge_method: 'plain'
  })

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
  const [disabled, setDisabled] = useState(null)

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

    if (!phoneNumber) {
      setError('phone')
      onError('Phone number cannot be empty')
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
      setDisabled(true)
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

  const redirectUri = 'https://9ee9-62-192-154-1.ngrok-free.app/api/oauth2_cb'
  // const redirect_uri = 'https://differencee.com/api/oauth2_cb'

  const twitterAuthUrl = getTwitterOAuthUrl(redirectUri)

  return (
    <>
      <input
        value={username}
        onChange={onFieldChange}
        placeholder='username'
        name='username'
        className={cn(styles.input, { [styles.inputError]: error === 'username' })}
        autoComplete='nope'
        disabled={disabled}
      />
      <input
        type='password'
        value={password}
        onChange={onFieldChange}
        placeholder='password'
        name='password'
        className={cn(styles.input, { [styles.inputError]: error === 'password' })}
        autoComplete='new-password'
        disabled={disabled}
      />
      <PhoneInput
        placeholder='phone number'
        name='phoneNumber'
        value={phoneNumber}
        onCountryChange={country => setFields(state => ({ ...state, country }))}
        onChange={value => setFields(state => ({ ...state, phoneNumber: value }))}
        className={cn(styles.input, { [styles.withoutMargin]: !showVerification, [styles.inputError]: error === 'phone', [styles.disabled]: disabled })}
        disabled={disabled}
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
      <div className={styles.or}><div /><span>OR</span><div /></div>
      <Button
        loading={loading}
        className={cn(styles.button, styles.twitterButton)}
      >
        <a href={twitterAuthUrl}>Sign Up with</a>
        <a href={twitterAuthUrl}>
          <XIcon />
        </a>
      </Button>
    </>
  )
}
