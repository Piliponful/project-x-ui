import React, { useContext, useState } from 'react'
import { useSwipeable } from 'react-swipeable'

import { MainScreenSwipeContext } from '../../'

import styles from './style.module.styl'

// eslint-disable-next-line no-extend-native
Number.prototype.mod = function (n) {
  return ((this % n) + n) % n
}

export default ({ children }) => {
  const value = useContext(MainScreenSwipeContext)
  const [swipeCount, setSwipeCount] = useState(0)

  const screenBySwipeCount = {
    0: 'groups',
    1: 'groupContent',
    2: 'questions'
  }

  const handlers = useSwipeable({
    onSwiped: eventData => {
      if (eventData.dir === 'Right' || eventData.dir === 'Left') {
        const plus = (eventData.dir === 'Left' ? 1 : (-1))
        const newSwipeCount = (swipeCount + plus).mod(3)
        setSwipeCount(newSwipeCount)
        value.toggleScreen(screenBySwipeCount[newSwipeCount])
      }
    },
    delta: 40,
    preventDefaultTouchmoveEvent: true
  })

  return <main {...handlers} className={styles.container}>{children}</main>
}

export const ContainerWithoutSwipes = ({ children }) => <main className={styles.container}>{children}</main>
