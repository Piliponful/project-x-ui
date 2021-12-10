import React, { useState } from 'react'

import Button from '../../../../shared/Button'

import styles from './style.module.styl'

export default ({ getUserToken: f, verifyUser }) => {
  const [{
    username,
    password,
    verificationCode
  }, setFields] = useState({ username: '', password: '', verificationCode: '' })
  const [showVerification, setShowVerification] = useState(false)

  const onFieldChange = e => {
    e.preventDefault()
    setFields(state => ({ ...state, [e.target.name]: e.target.value }))
  }

  const getUserToken = async () => {
    const user = await f({ username, password })
    if (!user.verificationCompleted) {
      setShowVerification(true)
    }
  }

  return (
    <>
      <input value={username} onChange={onFieldChange} placeholder='username' name='username' className={styles.input} />
      <input
        type='password'
        value={password}
        onChange={onFieldChange}
        placeholder='password'
        name='password'
        className={styles.input}
      />
      {
        showVerification
          ? (
            <input
              value={verificationCode}
              onChange={onFieldChange}
              placeholder='verification code'
              name='verificationCode'
              className={styles.input}
            />
            )
          : null
      }
      <Button
        className={styles.button}
        onClick={() => showVerification ? verifyUser({ verificationCode }) : getUserToken()}
      >
        Sign In
      </Button>
    </>
  )
}
