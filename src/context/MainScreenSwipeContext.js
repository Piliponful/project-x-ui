import React, { useState, useEffect } from 'react'

import { sidebarWidth, smallMainScreenWidth } from '../constants'

export const MainScreenSwipeContext = React.createContext({ mainScreen: true, toggleMainScreen: null })

export const MainScreenSwipeProvider = ({ children }) => {
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
      {children}
    </MainScreenSwipeContext.Provider>
  )
}
