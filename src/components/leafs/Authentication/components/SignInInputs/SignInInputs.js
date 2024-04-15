import React, { useState } from 'react'
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

export default ({ getUserToken: f, verifyUser: f2, resend, onError }) => {
  const [{
    username,
    password,
    verificationCode
  }, setFields] = useState({ username: '', password: '', verificationCode: '' })
  const [showVerification, setShowVerification] = useState(false)
  const [loading, setLoading] = useState(null)
  const [disabled, setDisabled] = useState(null)
  const [error, setError] = useState({})

  const onFieldChange = e => {
    e.preventDefault()
    setFields(state => ({ ...state, [e.target.name]: e.target.value }))
  }

  const getUserToken = async () => {
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

    setError()
    setLoading(true)

    const user = await f({ username, password })

    if (!user.verificationCompleted) {
      setShowVerification(true)
      setDisabled(true)
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
        disabled={disabled}
      />
      <input
        type='password'
        value={password}
        onChange={onFieldChange}
        placeholder='password'
        name='password'
        className={cn(styles.input, { [styles.withoutMargin]: !showVerification, [styles.inputError]: error === 'password' })}
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
        onClick={
          () => showVerification
            ? verifyUser({ verificationCode })
            : getUserToken()
        }
      >
        Sign In
      </Button>
      <div className={styles.or}><div /><span>OR</span><div /></div>
      <Button
        loading={loading}
        className={cn(styles.button, styles.twitterButton)}
      >
        <a href={twitterAuthUrl}>Sign In with</a>
        <a href={twitterAuthUrl}>
          <XIcon />
        </a>
      </Button>
    </>
  )
}
