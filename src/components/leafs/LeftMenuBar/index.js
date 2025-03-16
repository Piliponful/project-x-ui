import React, { useContext } from 'react'
import cn from 'classnames'
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/Person'
import { Tooltip } from '@heroui/tooltip'

import { MainScreenSwipeContext } from '../../shallow/Body'

import VennDiagram from '../QuestionCard/VennDiagram'

import styles from './styles.module.styl'

export const LeftMenuBar = ({ user, showMyHistory }) => {
  const { setShowGroups, showGroups, setShowSearchMenu, showSearchMenu, setIsLoginModalOpen } = useContext(MainScreenSwipeContext)

  return (
    <div className={styles.leftbar}>
      <nav className={styles['nav-icons']}>
        <Tooltip content='Groups' placement='right'>
          <button className={cn(styles['nav-item'], { [styles.active]: showGroups })} style={{ padding: 6 }} onClick={() => setShowGroups(state => !state)}>
            <VennDiagram />
          </button>
        </Tooltip>
        <Tooltip content='Search' placement='right'>
          <button className={cn(styles['nav-item'], { [styles.active]: showSearchMenu })} onClick={() => setShowSearchMenu(state => !state)}>
            <SearchIcon />
          </button>
        </Tooltip>
      </nav>

      <div className={cn(styles['nav-item'], styles.avatar, styles['bottom-avatar'])}>
        <Tooltip content={user?.pictureUrl ? 'Your profile' : 'Login'} placement='right'>
          {user?.pictureUrl
            ? <img src={user?.pictureUrl} alt='User' onClick={showMyHistory} />
            : <PersonIcon
                sx={{ fontSize: 32 }} onClick={() => {
                  setIsLoginModalOpen(true)
                }}
              />}
        </Tooltip>
      </div>
    </div>
  )
}
