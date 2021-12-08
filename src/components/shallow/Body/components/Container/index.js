import React, { useContext } from 'react'
import { useSwipeable } from 'react-swipeable'

import { MainScreenSwipeContext } from '../../'

import styles from './style.styl'

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

  return <ContainerWithoutSwipes {...handlers}>{children}</ContainerWithoutSwipes>
}

export const ContainerWithoutSwipes = ({ children, ...props }) => <main {...props} className={styles.container}>{children}</main>
