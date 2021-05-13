import React, { useContext } from 'react'
import { useSwipeable } from 'react-swipeable'

import { MainScreenSwipeContext } from '../../'

import styles from './style.styl'

export default ({ children }) => {
  const value = useContext(MainScreenSwipeContext)

  const handlers = useSwipeable({
    onSwiped: eventData => value.toggleMainScreen()
  })

  return <aside {...handlers} className={styles.container}>{children}</aside>
}
