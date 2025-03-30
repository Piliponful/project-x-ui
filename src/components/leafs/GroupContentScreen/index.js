import React, { forwardRef, useContext } from 'react'
import XIcon from '@mui/icons-material/X'
import humanNumber from 'human-number'
import CloseIcon from '@mui/icons-material/Close'
import InfiniteScroll from 'react-infinite-scroll-component'
import cn from 'classnames'
import FlipMove from 'react-flip-move'
// import { Tooltip as ReactTooltip } from 'react-tooltip'
// import 'react-tooltip/dist/react-tooltip.css'
import LinkIcon from '@mui/icons-material/Link'
import { Tooltip } from '@heroui/tooltip'
import LogoutIcon from '@mui/icons-material/Logout'

import styles from './style.module.scss'

import svg from '../UsersSearch/x-check.svg'
import KYCIcon from '../ActionsPanel/kyc.svg'

import { MainScreenSwipeContext } from '../../shallow/Body'

import './styles.css'

export const User = ({ user, onUserClick, children, style, handleTwitterLogin, logout, myHistory }) => {
  const isXConnected = Number.isInteger(user?.followerCount)
  console.log('isXConnected: ', isXConnected)
  console.log('myHistory: ', myHistory)

  const { setShowKYCModal } = useContext(MainScreenSwipeContext)

  return (
    <div style={style} className={styles.userItem} key={user?._id} onClick={() => onUserClick(user)}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className={styles.row}>
          <FlipMove typeName={null} appearAnimation='fade' enterAnimation='fade' leaveAnimation='fade'>
            {user ? <img src={user.pictureUrl} alt={`${user.name} profile picture`} /> : <div className={styles.imgFallback} style={{ background: '#E7E4E2' }} />}
            <div className={styles.column}>
              <FlipMove typeName={null} appearAnimation='fade' enterAnimation='fade' leaveAnimation='fade'>
                <span>{user?.fullName || 'loading'}</span>
                {isXConnected && <small style={{ fontSize: 14, fontWeight: 300, color: 'gray' }}>{humanNumber(user.followerCount)} X followers</small>}
                {isXConnected && <div style={{ display: 'flex', alignItems: 'center', fontSize: 14, fontWeight: 300, color: 'gray' }}><span>X account connected</span><LinkIcon sx={{ height: 20, width: 20, fill: 'gray', marginLeft: '3px', marginTop: '2px' }} /></div>}
                {user?.twitterVerified && user?.twitterVerified !== 'none' && <div style={{ display: 'flex', alignItems: 'center', fontSize: 14, fontWeight: 300, color: 'gray' }}><span>connected X account verified</span><img src={svg} style={{ height: 16, width: 16, paddingLeft: 3, border: 'none' }} /></div>}
                {user?.verifiedKYC && <div style={{ display: 'flex', alignItems: 'center', fontSize: 14, fontWeight: 300, color: 'gray' }}><span>verified by passport</span><img src={KYCIcon} style={{ height: 20, width: 20, paddingLeft: 3, border: 'none' }} /></div>}
              </FlipMove>
            </div>
          </FlipMove>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
          {isXConnected
            ? (
              <Tooltip content='Open connected X account' placement='left'>
                <a
                  onClick={e => {
                    e.stopPropagation()
                    window.mixpanel.track('X Profile Click', { url: `https://twitter.com/${user?.username}` })
                  }}
                  href={`https://twitter.com/${user?.username}`}
                  target='_blank'
                  rel='noreferrer'
                  data-tooltip-id='my-tooltip-1'
                >
                  <XIcon />
                </a>
              </Tooltip>
              )
            : myHistory
              ? (
                <Tooltip content='Connect your X account' placement='left'>
                  <XIcon className={styles['x-icon']} data-tooltip-id='my-tooltip-2' onClick={() => handleTwitterLogin()} />
                </Tooltip>
                )
              : null}
          {!user?.verifiedKYC && myHistory && (
            <Tooltip content='Verify yourself with passport' placement='left'>
              <img className={styles['x-icon']} src={KYCIcon} style={{ height: 28, width: 28 }} onClick={() => setShowKYCModal(true)} />
            </Tooltip>
          )}
          {logout && <Tooltip content='Logout' placement='left'><LogoutIcon sx={{ cursor: 'pointer' }} onClick={logout} /></Tooltip>}
        </div>
      </div>

      {children}
    </div>
  )
}

export default forwardRef(({ users, fetchUsers, hasMore, show, onUserClick, close, style, className, toggleVerifiedByX, toggleVerifiedByKYC }, ref) => {
  return (
    <div id='group-content-search-scroll-target' ref={ref} style={{ ...(show && ({ display: 'flex' })), ...style }} className={cn(styles.screenWithGroupContent, className)}>
      <div className={styles.close}><CloseIcon className={styles.back} onClick={close} /></div>
      <div style={{ marginBottom: 32, display: 'flex', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', fontSize: 14, fontWeight: 300, color: 'gray' }}>
          <div className={styles.checkboxes__row}>
            <div className={styles.checkboxes__item}>
              <label className={`${styles.checkbox} ${styles['style-c']}`}>
                <input type='checkbox' onChange={(e) => toggleVerifiedByX(e.target.checked)} />
                <div className={styles.checkbox__checkmark} />
                <div className={styles.checkbox__body}>
                  <span>twitter verified</span>
                  <img src={svg} style={{ height: 16, width: 16, paddingLeft: 3, border: 'none' }} />
                </div>
              </label>
            </div>
          </div>
          <div className={styles.checkboxes__row}>
            <div className={styles.checkboxes__item}>
              <label className={`${styles.checkbox} ${styles['style-c']}`}>
                <input type='checkbox' onChange={(e) => toggleVerifiedByKYC(e.target.checked)} />
                <div className={styles.checkbox__checkmark} />
                <div className={styles.checkbox__body}>
                  <span>verified by passport</span>
                  <img src={KYCIcon} style={{ height: 16, width: 16, paddingLeft: 3, border: 'none' }} />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <InfiniteScroll
        scrollableTarget='group-content-search-scroll-target'
        dataLength={users.length}
        next={fetchUsers}
        hasMore={hasMore}
        // loader={<h4>Loading...</h4>}
        // endMessage={
        //   <p style={{ textAlign: 'center' }}>
        //     <b>Yay! You have seen it all</b>
        //   </p>
        // }
        className={styles.usersContainer}
      >
        {users.map(user => <User key={user._id} user={user} onUserClick={onUserClick} />)}
      </InfiniteScroll>
    </div>
  )
})
