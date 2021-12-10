import React, { useState } from 'react'
import cn from 'classnames'

import Button from '../../../../shared/Button'

import styles from './style.module.styl'

export default ({ getUserToken }) => {
  const [{
    username,
    password
  }, setFields] = useState({ username: '', password: '', phoneNumber: '', country: '', verificationCode: '' })

  const onFieldChange = e => {
    e.preventDefault()
    setFields(state => ({ ...state, [e.target.name]: e.target.value }))
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
        className={cn(styles.input, styles.lastInput)}
      />
      <Button
        className={styles.button}
        onClick={() => getUserToken({ username, password })}
      >
        Sign In
      </Button>
    </>
  )
}
