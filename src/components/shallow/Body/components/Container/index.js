import React, { useContext, useState } from 'react'
import { useSwipeable } from 'react-swipeable'

import { MainScreenSwipeContext } from '../../'

import styles from './style.module.styl'

// eslint-disable-next-line no-extend-native
Number.prototype.mod = function (n) {
  return ((this % n) + n) % n
}

const screens = [{ name: 'groups', index: 0 }, { name: 'groupContent', index: 1 }, { name: 'questions', index: 2 }]

export default ({ children }) => {
  const value = useContext(MainScreenSwipeContext)
  const [swipeCount, setSwipeCount] = useState(2)

  const screenBySwipeCount = Object.fromEntries(
    Object.entries(screens.filter(i => value.skipScreen ? !value.skipScreen.includes(i.name) : true))
  )
  const handlers = useSwipeable({
    onSwiped: eventData => {
      if (Object.keys(screenBySwipeCount).length === 0) {
        return
      }

      if (eventData.dir === 'Right' || eventData.dir === 'Left') {
        const plus = (eventData.dir === 'Left' ? 1 : (-1))
        const newSwipeCount = (swipeCount + plus).mod(Object.values(screenBySwipeCount).length)
        setSwipeCount(newSwipeCount)
        value.toggleScreen(screenBySwipeCount[newSwipeCount].name)
      }
    },
    delta: 40,
    preventDefaultTouchmoveEvent: true
  })

  return <main {...handlers} className={styles.container}>{children}</main>
}

export const ContainerWithoutSwipes = ({ children }) => <main className={styles.container}>{children}</main>
