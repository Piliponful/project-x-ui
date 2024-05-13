import React, { forwardRef } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import Handlebars from 'handlebars'
import InfiniteScroll from 'react-infinite-scroll-component'
import cn from 'classnames'

import QuestionCardsRow from '../../shallow/QuestionCardsRow'

import QuestionCard from '../QuestionCard'

import styles from './style.module.styl'

Handlebars.registerHelper('bold', function (options) {
  const targetText = options.hash.text
  const replacement = `<strong>${targetText}</strong>`
  return new Handlebars.SafeString(
    this.text.replace(new RegExp(targetText, 'gi'), replacement)
  )
})

export default forwardRef(({
  questions, hasMore, fetchQuestions, total, respond, createNewGroup, back, search, style, className, onUserClick, onQuestionClick
}, ref) => {
  const templateString = `{{bold text="${search}"}}`
  const template = Handlebars.compile(templateString)

  return (
    <QuestionCardsRow id='questions-search-scroll-target' ref={ref} className={cn(className, styles.screenWithGroupContent)} style={style}>
      <div className={styles.totalAndBack}>
        <div className={styles.total}>{total} questions found</div>
        <CloseIcon className={styles.back} onClick={back} />
      </div>
      <InfiniteScroll
        scrollableTarget='questions-search-scroll-target'
        dataLength={questions.length}
        next={fetchQuestions}
        hasMore={hasMore}
        // loader={<h4>Loading...</h4>}
        // endMessage={
        //   <p style={{ textAlign: 'center' }}>
        //     <b>Yay! You have seen it all</b>
        //   </p>
        // }
      >
        {questions.map(i => {
          let htmlOutput
          if (search) {
            htmlOutput = template({ text: i.name })
          }

          return (
            <QuestionCard
              key={i.id || i._id}
              respond={respond && (content => respond(i._id, content))}
              createNewGroup={content => createNewGroup(i._id, content)}
              {...i}
              htmlName={htmlOutput}
              onUserClick={() => onUserClick(i.userId)}
              onClick={() => onQuestionClick(i._id)}
            />
          )
        })}
      </InfiniteScroll>
    </QuestionCardsRow>
  )
})
