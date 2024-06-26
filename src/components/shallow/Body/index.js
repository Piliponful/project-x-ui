import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import CloseIcon from '@mui/icons-material/Close'

import { ContainerWithoutSwipes } from './components/Container'

import styles from './style.module.styl'

import { smallMainScreenWidth } from '../../../constants'

export const MainScreenSwipeContext = React.createContext({ toggleScreen: null, setSkipScreen: null, setIsModalOpen: null, setShowSearch: null, showSearch: false })

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

export default ({ children, includeSwipes, address, payout, connectToWallet: connectToWalletR, hide: hideR, connected, isWalletModalOpenInitial = true }) => {
  const [screenName, toggleScreen] = useState('uninitialized')
  const [skipScreen, setSkipScreen] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(isWalletModalOpenInitial)
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    const handler = () => {
      const { innerWidth: width } = window

      if (width > smallMainScreenWidth) {
        toggleScreen()
      }

      if (screenName === 'uninitialized' && width < smallMainScreenWidth) {
        toggleScreen('questions')
      }
    }
    handler()

    window.addEventListener('resize', handler)

    return () => window.removeEventListener('resize', handler)
  }, [])

  useEffect(() => {
    if (skipScreen && skipScreen.includes(screenName)) {
      toggleScreen('questions')
    }
  }, [skipScreen])

  const connectToWallet = () => {
    connectToWalletR()
    setIsWalletModalOpen(false)
    setIsModalOpen(false)
  }

  const hide = () => {
    hideR()
    setIsWalletModalOpen(false)
  }

  if (includeSwipes) {
    return (
      <MainScreenSwipeContext.Provider value={{ screenName, skipScreen, showSearch, toggleScreen, setShowSearch, setSkipScreen, setIsModalOpen: setIsModalOpen, setIsWalletModalOpen }}>
        <div style={{ height: screenName ? '100%' : 'auto' }} className={styles.body}>
          <Modal
            isOpen={isWalletModalOpen}
            onRequestClose={() => setIsWalletModalOpen(false)}
            style={customStyles}
          >
            <div onClick={() => setIsWalletModalOpen(false)} className={styles.close}><h2>Connect Wallet</h2><CloseIcon /></div>
            <div className={styles.modalContent}>
              <b>Do you have a wallet(metamask, trust, etc)?</b>
              <p>
                In this app you can get crypto rewards for asking and answering questions.
                But to get them you need crypto wallet.
              </p>
              <p>
                If you don't have one, click <span className={styles.hide} onClick={hide}>hide to stop seeing this popup</span>.
                Later you can always find it in <b>settings &gt; rewards</b>
              </p>
              <button className={styles.connectButton} onClick={connectToWallet}>Connect</button>
            </div>
          </Modal>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            style={customStyles}
          >
            {
              connected
                ? (
                  <>
                    <div onClick={() => setIsModalOpen(false)} className={styles.close}><h2>Rewards</h2><CloseIcon /></div>
                    <div className={styles.row}><b>your address: </b><span className={styles.address}>{address}</span></div>
                    <div className={styles.row}><b>your payout: </b><span className={styles.amount}>{payout} </span><b>ASK</b></div>
                  </>
                  )
                : (
                  <div>
                    <div onClick={() => setIsModalOpen(false)} className={styles.close}><h2>Rewards</h2><CloseIcon /></div>
                    <p>To get rewards for asking questions and answering them you need to connect crypto wallet</p>
                    <button style={{ width: '100%', marginTop: 20 }} className={styles.connectButton} onClick={connectToWallet}>Connect</button>
                  </div>
                  )
            }
          </Modal>
          <ContainerWithoutSwipes>
            {children}
          </ContainerWithoutSwipes>
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
