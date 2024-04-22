import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Handlebars from 'handlebars'
import humanNumber from 'human-number'
import XIcon from '@mui/icons-material/X'

import QuestionCardsRow from '../../shallow/QuestionCardsRow'

import styles from './style.module.styl'

Handlebars.registerHelper('bold', function (options) {
  const targetText = options.hash.text
  const replacement = `<strong>${targetText}</strong>`
  return new Handlebars.SafeString(
    this.text.replace(new RegExp(targetText, 'gi'), replacement)
  )
})

export default ({ users, total, back, search, onUserClick }) => {
  const templateString = `{{bold text="${search}"}}`
  const template = Handlebars.compile(templateString)

  return (
    <QuestionCardsRow className={styles.usersContainer}>
      <div className={styles.totalAndBack}>
        <ArrowBackIcon className={styles.back} onClick={back} />
        <div className={styles.total}>{total} users found</div>
      </div>
      {users.map(user => {
        let htmlOutput
        if (search) {
          htmlOutput = template({ text: user.username })
        }

        return (
          <div className={styles.userItem} key={user._id} onClick={() => onUserClick(user)}>
            <div className={styles.row}>
              {user.pictureUrl && <img src={user.pictureUrl} alt={`${user.name} profile picture`} />}
              <div className={styles.column}>
                {htmlOutput ? <span dangerouslySetInnerHTML={{ __html: htmlOutput }} /> : <span>{user.username}</span>}
                <span>{humanNumber(user.followerCount)} followers</span>
              </div>
            </div>
            <a href={`https://twitter.com/${user.username}`} target='_blank' rel='noreferrer'>
              <XIcon />
            </a>
          </div>
        )
      })}
    </QuestionCardsRow>
  )
}