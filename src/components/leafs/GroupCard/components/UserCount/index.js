import React from 'react'

import Text from '../../../../shared/Text'
import Number from '../../../../shared/Number'

import styles from './style.module.styl'

export default ({ userCount, style }) => (
  <Text style={style} className={styles.userCount}>
    {userCount === null ? <>select new group parts</> : (<><Number x={userCount} /> people</>)}
  </Text>
)
