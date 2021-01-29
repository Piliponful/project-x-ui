import React from 'react'
import cn from 'classnames'

import Text from './components/Text'
import Stats from './components/Stats'
import Answer from './components/Answer'
import AnswerButtons from './components/AnswerButtons'

import styles from './style.styl'

export default ({ title, statistics, answer, withoutBottomMargin = false, respond, createNewGroup }) => {
  return (
    <article
      className={cn(styles.card, { [styles.cardWithoutBottomMargin]: withoutBottomMargin })}
    >
      <Text>{title}</Text>
      <Stats {...statistics} />
      {answer ? <Answer answer={answer} /> : <AnswerButtons respond={respond} createNewGroup={createNewGroup} />}
    </article>
  )
}
