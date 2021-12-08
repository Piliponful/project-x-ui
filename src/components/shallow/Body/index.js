import React, { useEffect, useState } from 'react'

import Container from './components/Container'

import styles from './style.styl'

import { sidebarWidth, smallMainScreenWidth } from '../../../constants'

export const MainScreenSwipeContext = React.createContext({ mainScreen: true, toggleMainScreen: null })

export default ({ children, includeSwipes }) => {
  const [mainScreen, toggleMainScreen] = useState(true)

  useEffect(() => {
    const handler = () => {
      const { innerWidth: width } = window

      if (mainScreen && width > sidebarWidth + smallMainScreenWidth) {
        toggleMainScreen(width)
      }
    }

    window.addEventListener('resize', handler)

    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <MainScreenSwipeContext.Provider value={{ mainScreen, toggleMainScreen: () => toggleMainScreen(!mainScreen) }}>
      <div style={{ height: mainScreen ? '100%' : 'auto' }} className={styles.body}>
        <Container includeSwipes={includeSwipes}>
          {children}
        </Container>
      </div>
    </MainScreenSwipeContext.Provider>
  )
}
