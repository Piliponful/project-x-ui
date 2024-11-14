import React, { useEffect, useRef, useState } from 'react'
import Modal from 'react-modal'
import CloseIcon from '@mui/icons-material/Close'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'

import { ContainerWithoutSwipes } from './components/Container'

import styles from './style.module.styl'

import { smallMainScreenWidth } from '../../../constants'

export const MainScreenSwipeContext = React.createContext({
  setIsLoginModalOpen: () => {},
  toggleScreen: null,
  setSkipScreen: null,
  setIsModalOpen: null,
  setShowSearch: null,
  showSearch: false,
  setAnswer: () => {}
})

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

window.gtag_report_conversion = () => {}
window.mixpanel = {
  track: (...rest) => {
    console.log(rest)
  }
}

const clientId = '693824624560-f3596tslik0htj03c2p4cqnevievv8ej.apps.googleusercontent.com' // Replace with your actual Client ID

Modal.setAppElement('#app')

export default ({ children, includeSwipes, address, payout, connectToWallet: connectToWalletR, hide: hideR, connected, isWalletModalOpenInitial = true, createUser }) => {
  const [screenName, toggleScreen] = useState('uninitialized')
  const [skipScreen, setSkipScreen] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(isWalletModalOpenInitial)
  const [showSearch, setShowSearch] = useState(false)
  const [showLoginModal, setIsLoginModalOpen] = useState(false)
  const [answer, setAnswer] = useState(null)
  const modalContent = useRef(null)
  const modalContentIframe = useRef(null)
  const init = useRef(false)
  const init2 = useRef(false)
  const [modalDoneOpening, setModalDoneOpening] = useState(false)

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

  useEffect(() => {
    // console.log('modal-content in useEffect', init.current)
    // console.log('modal done opening: ', modalDoneOpening)

    if (init.current || !modalDoneOpening) {
      return
    }
    // console.log('after modal-content in useEffect', init.current)
    // console.log('modal button: ', modalContent.current)

    const onClick = () => {
      window.mixpanel.track('Sign Up(google not logged in) Button Clicked')
    }

    // Define the observer to watch for style changes on the iframe itself
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        // console.log('attributeName: ', mutation.attributeName)
        if (mutation.attributeName === 'style') {
          const styles = window.getComputedStyle(modalContentIframe.current)
          // console.log('Iframe bis_size changed:', styles.getPropertyValue('height'), bisSize, modalContentIframe.current.style.cssText)
          const iframeHeight = parseInt(styles.getPropertyValue('height').replace('px', ''))
          if (iframeHeight > 0) {
            if (init2.current) {
              return
            }

            console.log('height of iframe is bigger then 0')

            modalContent.current.removeEventListener('onClick', onClick)
            modalContentIframe.current.addEventListener('click', () => {
              window.mixpanel.track('Sign Up(google logged in) Button Clicked')
            })
            init2.current = true
          }
        }
      })
    })

    // Configure the observer to watch for attribute changes (specifically style) on the iframe
    observer.observe(modalContentIframe.current, { attributes: true, attributeFilter: ['bis_size', 'style'] })
    modalContent.current.addEventListener('click', onClick)
    init.current = true
  }, [modalDoneOpening])

  // useEffect(() => {
  //   if (showLoginModal) {
  //     const modalContent = document.getElementById('model-content')
  //     console.log('element: ', modalContent)
  //   }
  // }, [showLoginModal])

  const connectToWallet = () => {
    window.mixpanel.track('Rewards Modal -> Connect Wallet Click')
    connectToWalletR()
    setIsWalletModalOpen(false)
    setIsModalOpen(false)
  }

  const hide = () => {
    hideR()
    setIsWalletModalOpen(false)
  }

  const handleLoginSuccess = async (credentialResponse) => {
    const userInfo = credentialResponse.credential
    const decoded = jwtDecode(userInfo)
    await createUser({ ...answer, ...decoded })
    setIsLoginModalOpen(false)
  }

  const handleLoginFailure = (error) => {
    console.error('Login Failed: ', error)
    window.mixpanel.track('Login Failed', {
      error
    })
  }

  const closeRewardsConnectWalletModal = () => {
    setIsModalOpen(false)
    window.mixpanel.track('Rewards Modal(Connect Wallet) -> Close Click')
  }

  if (includeSwipes) {
    return (
      <GoogleOAuthProvider clientId={clientId}>
        <MainScreenSwipeContext.Provider
          value={{
            screenName,
            skipScreen,
            showSearch,
            toggleScreen,
            setShowSearch,
            setSkipScreen,
            setIsModalOpen: setIsModalOpen,
            setIsWalletModalOpen,
            setIsLoginModalOpen,
            setAnswer
          }}
        >
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
              onRequestClose={closeRewardsConnectWalletModal}
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
                      <div onClick={closeRewardsConnectWalletModal} className={styles.close}><h2>Rewards</h2><CloseIcon /></div>
                      <p>To get rewards for asking questions and answering them you need to connect crypto wallet</p>
                      <button style={{ width: '100%', marginTop: 20 }} className={styles.connectButton} onClick={connectToWallet}>Connect</button>
                    </div>
                    )
              }
            </Modal>
            <Modal
              isOpen={showLoginModal}
              onRequestClose={() => setIsLoginModalOpen(false)}
              style={customStyles}
              shouldCloseOnOverlayClick={false}
              onAfterOpen={() => {
                modalContent.current = document.getElementById('model-content')
                console.log('element: ', modalContent)
                modalContentIframe.current = document.getElementById('model-content').querySelector('iframe')
                console.log('iframe: ', modalContentIframe)
                setModalDoneOpening(true)
              }}
            >
              <div className={styles.close}><h2>Login or Sign up</h2></div>
              <div style={{ marginBottom: 20 }}>
                <p style={{ marginBottom: 4 }}>To count your answer we need you to finish registration.</p>
                <p>Otherwise votes wouldn't mean a thing.</p>
              </div>
              {/* <p
                style={{
                  fontSize: 12,
                  marginBottom: 5,
                  color: 'gray'
                }}
              >
                If you're interested in our mission and where this project goes, join our telegram channel:{' '}
                <a target='_blank' href='https://t.me/poll_cc' rel='noreferrer'>https://t.me/poll_cc</a>
              </p>
              <p
                style={{
                  fontSize: 12,
                  marginBottom: 20,
                  color: 'gray'
                }}
              >
                *I'm not looking to scam you or sell you anything. What you see is what you get.
              </p> */}
              <div className={styles.modalContent} id='model-content'>
                <GoogleLogin
                  onSuccess={handleLoginSuccess}
                  onFailure={handleLoginFailure}
                  cookiePolicy='single_host_origin'
                  prompt_parent_id='tester-tester'
                />
              </div>
            </Modal>
            <ContainerWithoutSwipes>
              {children}
            </ContainerWithoutSwipes>
          </div>
        </MainScreenSwipeContext.Provider>
      </GoogleOAuthProvider>
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
