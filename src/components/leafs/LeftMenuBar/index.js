import React, { useContext, useState } from 'react'
import cn from 'classnames'
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/Person'
import { Tooltip } from '@heroui/tooltip'
import { useMediaQuery } from 'react-responsive'
import HomeIcon from '@mui/icons-material/Home'

import { MainScreenSwipeContext } from '../../shallow/Body'

import VennDiagram from '../QuestionCard/VennDiagram'

import styles from './styles.module.styl'

export const LeftMenuBar = ({ user, showMyHistory }) => {
  const { setShowGroups, showGroups, setShowSearchMenu, showSearchMenu, setIsLoginModalOpen } = useContext(MainScreenSwipeContext)
  const [isHovered, setIsHovered] = useState(false)
  const isMobile = useMediaQuery({ query: '(max-width: 925px)' })

  return (
    <div className={styles.leftbar}>
      <nav className={styles['nav-icons']}>
        <button className={styles['nav-item']}>
          <a href='/' style={{ lineHeight: 1 }}>
            <HomeIcon sx={{ fill: '#aaa' }} />
          </a>
        </button>
        <Tooltip content='Groups' placement='right'>
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(styles['nav-item'], { [styles.active]: showGroups })}
            style={{ padding: 6 }}
            onClick={() => {
              setShowGroups(state => !state)
              setShowSearchMenu(false)
            }}
          >
            <VennDiagram myHover={showGroups || isHovered} groupMode={showGroups} fill='#aaa' />
          </button>
        </Tooltip>
        <Tooltip content='Search' placement='right'>
          <button
            className={cn(styles['nav-item'], { [styles.active]: showSearchMenu })}
            onClick={(e) => {
              e.stopPropagation()
              setShowSearchMenu(state => !state)
              setShowGroups(false)
            }}
          >
            <SearchIcon />
          </button>
        </Tooltip>
      </nav>

      <div className={cn(styles['nav-item'], styles.avatar, styles['bottom-avatar'])} style={{ marginLeft: isMobile ? 15 : 0 }}>
        <Tooltip content={user?.pictureUrl ? 'Your profile' : 'Login'} placement='right'>
          {user?.pictureUrl
            ? <img
                src={user?.pictureUrl}
                alt='User'
                onClick={showMyHistory}
                style={{
                  borderRadius: '50%',
                  padding: 5
                }}
              />
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
