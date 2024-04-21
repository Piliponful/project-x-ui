import React from 'react'
import cn from 'classnames'

import styles from './style.module.styl'

export default ({ disabled, onChange, value }) => (
  <textarea
    disabled={disabled}
    placeholder={`Type your question here ${disabled ? '(disabled if you\'re not signed in)' : ''}...`}
    className={cn(styles.textarea, styles.text)}
    onChange={onChange}
    value={value}
  />
)
