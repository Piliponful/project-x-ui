import React, { forwardRef, useEffect, useState } from 'react'
import _ from 'lodash'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import Title from '../QuestionCard/components/Title'
import Answer from '../QuestionCard/components/Answer'
import AnswerButtons from '../QuestionCard/components/AnswerButtons'
import Bars from '../QuestionCard/components/Stats/components/Bars'

import Number from '../../shared/Number'
import Text from '../../shared/Text'

import styles from './styles.module.styl'

const calcPercent = (x, sum) => Math.round(x / sum * 100)

export const Question = forwardRef(({ yourOwnQuestion, onUserClick, userPictureUrl, username, name, answersCount, currentUserAnswer: answer, hisAnswer, respond, createNewGroup }, ref) => {
  const [state, setState] = useState(null)

  const userReplyCount = state ? answersCount[state] : answersCount.yes + answersCount.no

  console.log(userReplyCount)

  const yesPercentage = calcPercent(answersCount.yes, answersCount.yes + answersCount.no)
  const noPercentage = calcPercent(answersCount.no, answersCount.yes + answersCount.no)

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      const a = document.querySelector('#question-card')
      const b = document.querySelector('#question-text')

      const containerHeight = a.clientHeight
      const containerWidth = a.clientWidth

      const questionHeight = b.clientHeight
      const questionWidth = b.clientWidth

      console.log('container height: ', containerHeight)
      console.log('question height: ', questionHeight)

      if ((questionHeight + 110) < containerHeight) {
        console.log('done')
        return resizeObserver.disconnect()
      }

      const currentFontSize = parseInt(window.getComputedStyle(b).fontSize.replace('px', ''))
      console.log('currentFontSize: ', currentFontSize)
      b.style['font-size'] = `${currentFontSize - 1}px`
    })

    resizeObserver.observe(document.querySelector('#question-text'))

    window.addEventListener('resize', _.debounce(() => {
      document.querySelector('#question-text').style['font-size'] = '200px'
      resizeObserver.observe(document.querySelector('#question-text'))
    }, 1000))

    return () => resizeObserver.disconnect()
  }, [])

  return (
    <article id='question-card' ref={ref} className={styles.card}>
      <Title id='question-text' style={{ padding: '0 26px' }}>
        <div className={styles.questionText}>{name}</div>
        <p className={styles.username} onClick={onUserClick}>
          {' '}by {username},
          {' '}<Text style={{ display: 'inline', textAlign: 'center', marginBottom: 70 }} secondary>answered by <Number x={userReplyCount} /> people</Text>
        </p>
      </Title>
      <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        {/* {hisAnswer && (<Answer his answer={hisAnswer} />)} */}
        {/* {answer && (<Answer style={{ marginBottom: 12 }} answer={answer} />)} */}
        {!yourOwnQuestion && (!answer && <AnswerButtons style={{ width: 400 }} respond={respond} />)}
        <div className={styles.stats}>
          {
          userReplyCount
            ? (
              <>
                <div className={styles.textContainer}>
                  <Text
                    className={styles.text}
                    style={{
                      width: `${yesPercentage}%`,
                      position: 'relative',
                      display: 'flex',
                      gap: 12,
                      bottom: 0
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'end' }}>{yesPercentage}%</span>
                    {answer === 'Yes' && (
                      <p className={styles.imgWithArrow}>
                        <img className={styles.img} src={userPictureUrl} alt='profile picture' />
                        <div className={styles.arrowDown} />
                      </p>
                    )}
                  </Text>
                  <Text
                    className={styles.text}
                    style={{
                      width: `${noPercentage}%`,
                      position: 'relative',
                      display: 'flex',
                      gap: 12,
                      bottom: 0
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'end' }}>{noPercentage}%</span>
                    {answer === 'No' && (
                      <p className={styles.imgWithArrow}>
                        <img className={styles.img} src={userPictureUrl} alt='profile picture' />
                        <div className={styles.arrowDown} />
                      </p>
                    )}
                  </Text>
                </div>
                <Bars yes={yesPercentage} no={noPercentage} onHover={setState} createNewGroup={createNewGroup} />
              </>
              )
            : null
        }
        </div>
      </div>
      {/* <button className={styles.respondButton}>
        respond
        <KeyboardArrowDownIcon />
      </button> */}
    </article>
  )
})
