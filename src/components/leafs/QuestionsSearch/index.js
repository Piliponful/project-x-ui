import React, { forwardRef } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Handlebars from 'handlebars'
import InfiniteScroll from 'react-infinite-scroll-component'

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

export default forwardRef(({ questions, hasMore, fetchQuestions, total, respond, createNewGroup, back, search }, ref) => {
  const templateString = `{{bold text="${search}"}}`
  const template = Handlebars.compile(templateString)

  return (
    <QuestionCardsRow id='questions-search-scroll-target' ref={ref} className={styles.screenWithGroupContent}>
      <div className={styles.totalAndBack}>
        <ArrowBackIcon className={styles.back} onClick={back} />
        <div className={styles.total}>{total} questions found</div>
      </div>
      <InfiniteScroll
        scrollableTarget='questions-search-scroll-target'
        dataLength={questions.length}
        next={fetchQuestions}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {questions.map(i => {
          let htmlOutput
          if (search) {
            htmlOutput = template({ text: i.name })
          }

          return (
            <QuestionCard
              key={i.name}
              respond={respond && (content => respond(i._id, content))}
              createNewGroup={content => createNewGroup(i._id, content)}
              {...i}
              htmlName={htmlOutput}
            />
          )
        })}
      </InfiniteScroll>
    </QuestionCardsRow>
  )
})
