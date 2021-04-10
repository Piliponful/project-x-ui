import React from 'react'

import Text from '../../../../shared/Text'
import Number from '../../../../shared/Number'

import styles from './style.styl'

export default ({ userCount }) => (
  <Text className={styles.userCount}>
    {userCount ? (<><Number x={userCount} /> people</>) : <>select new group parts</>}
  </Text>
)
