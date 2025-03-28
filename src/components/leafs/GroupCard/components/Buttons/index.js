import React, { useContext } from 'react'
import { addToast } from '@heroui/react'

import Button from '../../shared/components/Button'

import { MainScreenSwipeContext } from '../../../../shallow/Body'

import styles from './style.module.scss'

export default ({ disableButtons, select, combine }) => {
  const {
    setIsLoginModalOpen
  } = useContext(MainScreenSwipeContext)

  return (
    <div className={styles.buttons}>
      <Button
        nobold
        secondary
        onClick={() => {
          if (disableButtons) {
            return addToast({
              title: (
                <div style={{ display: 'flex', gap: 8 }}>
                  Please login to combine groups
                  <Button
                    nobold
                    secondary
                    onClick={() => setIsLoginModalOpen(true)}
                  >
                    Login
                  </Button>
                </div>
              )
            })
          }
          select()
        }}
      >
        Select
      </Button>
      {/* <Button nobold secondary onClick={select}>Apply To Answers</Button> */}
      <Button
        nobold
        secondary
        onClick={() => {
          if (disableButtons) {
            return addToast({
              title: (
                <div style={{ display: 'flex', gap: 8 }}>
                  Please login to combine groups
                  <Button
                    nobold
                    secondary
                    onClick={() => setIsLoginModalOpen(true)}
                  >
                    Login
                  </Button>
                </div>
              )
            })
          }
          combine()
        }}
      >
        Combine
      </Button>
    </div>
  )
}
