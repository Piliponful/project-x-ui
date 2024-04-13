import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'

import Container, { ContainerWithoutSwipes } from './components/Container'

import styles from './style.module.styl'

import { smallMainScreenWidth } from '../../../constants'

export const MainScreenSwipeContext = React.createContext({ toggleScreen: null, setSkipScreen: null, setIsModalOpen: null })

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column'
  }
}

Modal.setAppElement('#app')

export default ({ children, includeSwipes, address, payout }) => {
  const [screenName, toggleScreen] = useState()
  const [skipScreen, setSkipScreen] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handler = () => {
      const { innerWidth: width } = window

      if (width > smallMainScreenWidth) {
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
      <MainScreenSwipeContext.Provider value={{ screenName, skipScreen, toggleScreen, setSkipScreen, setIsModalOpen: setIsModalOpen }}>
        <div style={{ height: screenName ? '100%' : 'auto' }} className={styles.body}>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            style={customStyles}
            contentLabel='Example Modal'
          >
            <h2>Rewards</h2>
            <div><b>your address: </b><span>{address}</span></div>
            <div><b>your payout: </b><span>{payout} </span><b>ASK</b></div>
            <button onClick={() => setIsModalOpen(false)}>close</button>
          </Modal>
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
