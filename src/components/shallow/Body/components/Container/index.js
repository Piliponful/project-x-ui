import React, { useContext } from 'react'
import { useSwipeable } from 'react-swipeable'

import { MainScreenSwipeContext } from '../../'

import styles from './style.module.styl'

export default ({ children }) => {
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

  return <main {...handlers} className={styles.container}>{children}</main>
}

export const ContainerWithoutSwipes = ({ children }) => <main className={styles.container}>{children}</main>
