import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import CloseIcon from '@mui/icons-material/Close'

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
          >
            <div onClick={() => setIsModalOpen(false)} className={styles.close}><h2>Rewards</h2><CloseIcon /></div>
            <div className={styles.row}><b>your address: </b><span className={styles.address}>{address}</span></div>
            <div className={styles.row}><b>your payout: </b><span className={styles.amount}>{payout} </span><b>ASK</b></div>
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
