import React from 'react'
import cn from 'classnames'

import Button from '../../../../shared/Button'

import styles from './styles.module.styl'

export const Verification = ({ resend, verificationCode, onFieldChange }) => (
  <div className={styles.verificationCodeContainer}>
    <input
      value={verificationCode}
      onChange={onFieldChange}
      placeholder='verification code'
      name='verificationCode'
      className={cn(styles.input)}
    />

    <Button
      className={cn(styles.button)}
      onClick={resend}
    >
      Resend
    </Button>
  </div>
)
