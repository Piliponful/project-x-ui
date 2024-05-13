import React, { forwardRef, useEffect, useState } from 'react'
import _ from 'lodash'

import Title from '../QuestionCard/components/Title'
import AnswerButtons from '../QuestionCard/components/AnswerButtons'
import Bars from '../QuestionCard/components/Stats/components/Bars'

import Number from '../../shared/Number'
import Text from '../../shared/Text'

import styles from './styles.module.styl'

const calcPercent = (x, sum) => Math.round(x / sum * 100)

export const Question = forwardRef(({
  yourOwnQuestion, onUserClick, userPictureUrl, username, name, answersCount, me: { answer } = {}, respond, createNewGroup
}, ref) => {
  const [state, setState] = useState(null)

  const totalAnswerCount = answersCount.yes + answersCount.no

  const userReplyCount = state ? answersCount[state] : totalAnswerCount

  const yesPercentage = calcPercent(answersCount.yes, totalAnswerCount)
  const noPercentage = calcPercent(answersCount.no, totalAnswerCount)

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      const a = document.querySelector('#question-card')
      const b = document.querySelector('#question-text')
      const c = document.querySelector('#question-text-size')

      const containerHeight = a.clientHeight
      const questionHeight = b.clientHeight

      const containerWidth = a.clientWidth
      const questionWidth = b.clientWidth

      console.log(questionWidth, containerWidth)

      if ((questionHeight + 110) < containerHeight && questionWidth <= containerWidth) {
        return resizeObserver.disconnect()
      }

      const currentFontSize = parseInt(window.getComputedStyle(c).fontSize.replace('px', ''))

      if (currentFontSize === 0) {
        c.style['font-size'] = '32px'
        b.style.overflow = 'auto'
        b.style.height = 'calc(100dvh - 126px)'
        return resizeObserver.disconnect()
      }
      c.style['font-size'] = `${currentFontSize - 1}px`
    })

    resizeObserver.observe(document.querySelector('#question-text'))

    window.addEventListener('resize', _.debounce(() => {
      document.querySelector('#question-text-size').style['font-size'] = '200px'
      resizeObserver.observe(document.querySelector('#question-text'))
    }, 1000))

    return () => resizeObserver.disconnect()
  }, [])

  return (
    <article id='question-card' ref={ref} className={styles.card}>
      <div id='question-text' style={{ padding: '0 26px' }}>
        <Title style={{ fontSize: 200, fontWeight: 200 }} id='question-text-size'>{name}</Title>
        <div className={styles.username}>
          {' '}by <span className={styles.usernameActual} onClick={onUserClick}>{username}</span>,
          {' '}<Text style={{ display: 'inline', textAlign: 'center' }} secondary>answered by <Number x={userReplyCount} /> people</Text>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: totalAnswerCount === 0 ? 16 : 0,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {!yourOwnQuestion && (!answer && <AnswerButtons style={{ maxWidth: 400, width: '90%' }} respond={respond} />)}
        <div className={styles.stats}>
          {
            Boolean(userReplyCount) && (
              <>
                <div className={styles.textContainer}>
                  <Text
                    className={styles.text}
                    style={{
                      width: `${yesPercentage}%`,
                      position: 'relative',
                      display: 'flex',
                      gap: 12,
                      bottom: 0,
                      minWidth: 102
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'end' }}>{yesPercentage}%</span>
                    {answer?.toLowerCase() === 'yes' && (
                      <div className={styles.imgWithArrow}>
                        <img className={styles.img} src={userPictureUrl} alt='profile picture' />
                        <div className={styles.arrowDown} />
                      </div>
                    )}
                  </Text>
                  <Text
                    className={styles.text}
                    style={{
                      width: `${noPercentage}%`,
                      position: 'relative',
                      display: 'flex',
                      gap: 12,
                      bottom: 0,
                      minWidth: 102
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'end' }}>{noPercentage}%</span>
                    {answer?.toLowerCase() === 'no' && (
                      <div className={styles.imgWithArrow}>
                        <img className={styles.img} src={userPictureUrl} alt='profile picture' />
                        <div className={styles.arrowDown} />
                      </div>
                    )}
                  </Text>
                </div>
                <Bars className={styles.bars} yes={yesPercentage} no={noPercentage} onHover={setState} createNewGroup={createNewGroup} />
              </>
            )
          }
        </div>
      </div>
    </article>
  )
})
