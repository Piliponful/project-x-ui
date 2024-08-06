import React, { useState } from 'react'
import classNames from 'classnames'

import styles from './style.module.styl'

export const ChatBlock = ({ messages, sendMessage }) => {
  const [value, setValue] = useState('')

  return (
    <div className={styles.chat}>
      <div className={styles.messageBoard}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={classNames(styles.message, {
              [styles.mine]: msg.mine,
              [styles.notMine]: !msg.mine
            })}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className={styles.inputGroup}>
        <textarea
          className={styles.input}
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
        />
        <button
          className={styles.btn}
          onClick={sendMessage}
        >
          Submit
        </button>
      </div>
    </div>
  )
}
