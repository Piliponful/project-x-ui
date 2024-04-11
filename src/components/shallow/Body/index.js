import React, { useEffect, useState } from 'react'

import Container, { ContainerWithoutSwipes } from './components/Container'

import styles from './style.module.styl'

import { smallMainScreenWidth } from '../../../constants'

export const MainScreenSwipeContext = React.createContext({ toggleScreen: null })

export default ({ children, includeSwipes }) => {
  const [screenName, toggleScreen] = useState()

  useEffect(() => {
    const handler = () => {
      const { innerWidth: width } = window
      console.log('resize handler', screenName && width > smallMainScreenWidth)

      if (width > smallMainScreenWidth) {
        console.log('inside screen name reset to undefined')
        toggleScreen()
      }
      if (!screenName && width < smallMainScreenWidth) {
        toggleScreen('groups')
      }
    }
    handler()

    window.addEventListener('resize', handler)

    return () => window.removeEventListener('resize', handler)
  }, [])

  if (includeSwipes) {
    return (
      <MainScreenSwipeContext.Provider value={{ screenName, toggleScreen }}>
        <div style={{ height: screenName ? '100%' : 'auto' }} className={styles.body}>
          <Container>
            {children}
          </Container>
        </div>
      </MainScreenSwipeContext.Provider>
    )
  }

  return (
    <div style={{ height: screenName ? '100%' : 'auto' }} className={styles.body}>
      <ContainerWithoutSwipes>
        {children}
      </ContainerWithoutSwipes>
    </div>
  )
}
