import React, { useState } from 'react'
import cn from 'classnames'

import Button from '../../../../shared/Button'
import Verification from '../Verification'

import styles from './style.module.styl'

export default ({ getUserToken: f, verifyUser: f2, resend }) => {
  const [{
    username,
    password,
    verificationCode
  }, setFields] = useState({ username: '', password: '', verificationCode: '' })
  const [showVerification, setShowVerification] = useState(false)
  const [loading, setLoading] = useState(null)

  const onFieldChange = e => {
    e.preventDefault()
    setFields(state => ({ ...state, [e.target.name]: e.target.value }))
  }

  const getUserToken = async () => {
    setLoading(true)

    const user = await f({ username, password })

    if (!user.verificationCompleted) {
      setShowVerification(true)
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
      <input value={username} onChange={onFieldChange} placeholder='username' name='username' className={styles.input} />
      <input
        type='password'
        value={password}
        onChange={onFieldChange}
        placeholder='password'
        name='password'
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
        onClick={
          () => showVerification
            ? verifyUser({ verificationCode })
            : getUserToken()
        }
      >
        Sign In
      </Button>
    </>
  )
}
