import React, { useState } from 'react'
import cn from 'classnames'

import Number from '../../../../shared/Number'

import Text from './components/Text'
import Bars from './components/Bars'

import styles from './style.module.styl'

const calcPercent = (x, sum) => Math.round(x / sum * 100)

export default ({ yes, no, he, me, createNewGroup, className }) => {
  const [state, setState] = useState(null)

  const answers = { yes, no }

  const userReplyCount = state ? answers[state] : yes + no

  const yesPercentage = calcPercent(yes, yes + no)
  const noPercentage = calcPercent(no, yes + no)

  return (
    <div className={cn(styles.stats, className)}>
      <Text secondary><Number x={userReplyCount} /> people answered</Text>
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
                    // minWidth: 102
                  }}
                >
                  {me?.answer?.toLowerCase() === 'yes' && (
                    <p className={styles.imgWithArrow}>
                      <img className={styles.img} src={me.pictureUrl} alt='profile picture' />
                      <div className={styles.arrowDown} />
                    </p>
                  )}
                  {he?.answer?.toLowerCase() === 'yes' && (
                    <p className={styles.imgWithArrow} style={me?.answer ? { left: '50%' } : {}}>
                      <img className={styles.img} src={he.pictureUrl} alt='profile picture' />
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
                    // minWidth: 102
                  }}
                >
                  {me?.answer?.toLowerCase() === 'no' && (
                    <p className={styles.imgWithArrow} style={he?.answer ? { right: '50%' } : {}}>
                      <img className={styles.img} src={me.pictureUrl} alt='profile picture' />
                      <div className={styles.arrowDown} />
                    </p>
                  )}
                  {he?.answer?.toLowerCase() === 'no' && (
                    <p className={styles.imgWithArrow}>
                      <img className={styles.img} src={he.pictureUrl} alt='profile picture' />
                      <div className={styles.arrowDown} />
                    </p>
                  )}
                </Text>
              </div>
              <Bars yes={yesPercentage} no={noPercentage} onHover={setState} createNewGroup={createNewGroup} />
              <div className={styles.textContainer}>
                <Text className={styles.text} style={{ width: `${yesPercentage}%` }}>{yesPercentage}%</Text>
                <Text className={styles.text} style={{ width: `${noPercentage}%` }}>{noPercentage}%</Text>
              </div>
            </>
            )
          : null
      }
    </div>
  )
}
