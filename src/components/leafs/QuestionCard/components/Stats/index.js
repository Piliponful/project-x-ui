import React, { useState } from 'react'
import cn from 'classnames'

import Number from '../../../../shared/Number'

import Text from './components/Text'
import Bars from './components/Bars'

import styles from './style.module.styl'

const calcPercent = (x, sum) => Math.round(x / sum * 100)

export default ({ yes, no, createNewGroup, className }) => {
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
