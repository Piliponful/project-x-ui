import React, { useState } from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'

const defaultGroup = {
  name: 'You',
  peopleCount: 10,
  id: 1
}

export const ChatBlock = ({ messages, sendMessage, onUserClick, currentGroup = defaultGroup, changeGroup }) => {
  const [value, setValue] = useState('')

  return (
    <div className={styles.chat}>
      <div className={styles.top}>
        <div className={styles.currentGroup}>
          <b>{currentGroup.name}</b>
          <p><span>people count: </span>{currentGroup.peopleCount}</p>
        </div>
        <button className={styles.changeGroupBtn} onClick={changeGroup}>change group</button>
      </div>
      <div className={styles.messageBoard}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={classNames(styles.message, {
              [styles.mine]: msg.mine,
              [styles.notMine]: !msg.mine
            })}
          >
            <img onClick={() => onUserClick(msg.username)} className={styles.picture} src={msg.pictureUrl} />
            <span>{msg.text}</span>
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
          Send
        </button>
      </div>
    </div>
  )
}
