import React, { forwardRef } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Handlebars from 'handlebars'

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

export default forwardRef(({ questions, total, respond, createNewGroup, back, search }, ref) => {
  const templateString = `{{bold text="${search}"}}`
  const template = Handlebars.compile(templateString)

  return (
    <QuestionCardsRow ref={ref} className={styles.screenWithGroupContent}>
      <div className={styles.totalAndBack}>
        <ArrowBackIcon className={styles.back} onClick={back} />
        <div className={styles.total}>{total} questions found</div>
      </div>
      {questions.map(i => {
        let htmlOutput
        if (search) {
          htmlOutput = template({ text: i.name })
        }

        return (
          <QuestionCard
            key={i.name}
            respond={content => respond(i._id, content)}
            createNewGroup={content => createNewGroup(i._id, content)}
            {...i}
            htmlName={htmlOutput}
          />
        )
      })}
    </QuestionCardsRow>
  )
})
