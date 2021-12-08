import React, { useContext } from 'react'
import { useSwipeable } from 'react-swipeable'

import { MainScreenSwipeContext } from '../../'

import styles from './style.styl'

export default ({ children, includeSwipes }) => {
  const value = useContext(MainScreenSwipeContext)

  const handlers = useSwipeable({
    onSwiped: eventData => {
      if (eventData.dir === 'Right' || eventData.dir === 'Left') {
        value.toggleMainScreen()
      }
    },
    delta: 40,
    preventDefaultTouchmoveEvent: true
  })

  return <main {...(includeSwipes ? handlers : {})} className={styles.container}>{children}</main>
}
