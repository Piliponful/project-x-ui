import React, { useState } from 'react'

import Text from '../Text'
import Bars from './components/Bars'

import styles from './style.styl'

const calcPercent = (x, sum) => Math.floor(x / sum * 100)

export default ({ yes, no }) => {
  const [state, setState] = useState(null)

  const answers = { yes, no }

  const peopleAnswered = state ? answers[state] : yes + no

  const yesPercentage = calcPercent(yes, yes + no)
  const noPercentage = calcPercent(no, yes + no)

  return (
    <div className={styles.stats}>
      <p className={styles.text}>
        <Text secondary>{(peopleAnswered).toLocaleString()} people answered</Text>
      </p>
      <Bars yes={yesPercentage} no={noPercentage} onHover={setState} />
      <div style={{ display: 'flex', width: '149px', marginTop: '5px' }}>
        <div style={{ width: `${yesPercentage}%`, display: 'flex', justifyContent: 'center' }}>
          <Text secondary>{yesPercentage}%</Text>
        </div>
        <div style={{ width: `${noPercentage}%`, display: 'flex', justifyContent: 'center' }}>
          <Text secondary>{noPercentage}%</Text>
        </div>
      </div>
    </div>
  )
}
