import React, { useState } from 'react'
import cn from 'classnames'

import SignInInputs from './components/SignInInputs'
import SignUpInputs from './components/SignUpInputs'

import styles from './style.module.styl'
import './style.css'

export const TWITTER_STATE = 'twitter-increaser-state'
const TWITTER_CODE_CHALLENGE = 'challenge'
const TWITTER_AUTH_URL = 'https://twitter.com/i/oauth2/authorize'
const TWITTER_SCOPE = ['tweet.read', 'users.read', 'offline.access'].join(' ')

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

export const getURLWithQueryParams = (
  baseUrl,
  params
) => {
  const query = Object.entries(params)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&')

  return `${baseUrl}?${query}`
}

export default ({ createUser, verifyUser, getUserToken, resend, onError }) => {
  const [selectedTab, setSelectedTab] = useState('signIn')
  const redirect_uri = 'https://9ee9-62-192-154-1.ngrok-free.app/api/oauth2_cb'
  // const redirect_uri = 'https://differencee.com/api/oauth2_cb'

  const twitterAuthUrl = getTwitterOAuthUrl(redirect_uri)
  console.log('twitter auth url: ', twitterAuthUrl)

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
            ? <SignInInputs getUserToken={getUserToken} verifyUser={verifyUser} resend={resend} onError={onError} />
            : <SignUpInputs createUser={createUser} verifyUser={verifyUser} onError={onError} resend={resend} />
        }
        <a href={twitterAuthUrl}>login via twitter</a>
      </div>
    </div>
  )
}
