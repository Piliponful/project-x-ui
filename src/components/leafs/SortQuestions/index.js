import React, { useState, forwardRef } from 'react'
import { useDetectClickOutside } from 'react-detect-click-outside'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import cn from 'classnames'

import Title from '../GroupCard/components/Title'

import styles from './style.module.styl'

export const SortQuestions = forwardRef(({ sort = 'Most Answered', duration = 'Week', setSort, setDuration, className, style }, ref3) => {
  const [showSortDropdown, setShowSortDropdown] = useState(false)
  const [showDurationDropdown, setShowDurationDropdown] = useState(false)

  const ref = useDetectClickOutside({ onTriggered: () => setShowSortDropdown(false) })
  const ref2 = useDetectClickOutside({ onTriggered: () => setShowDurationDropdown(false) })

  const setDurationAndClose = value => {
    setDuration(value)
    setShowDurationDropdown(false)
  }

  const setSortAndClose = value => {
    setSort(value)
    setShowSortDropdown(false)
  }

  return (
    <div ref={ref3} style={style} className={cn(styles.text, className)}>
      <div className={styles.dropdownWithLabel}>
        <Title>Showing</Title>
        <div className={styles.dropdownContainer} ref={ref}>
          <div className={styles.dropdownValue} onClick={() => setShowSortDropdown(true)}>{sort}</div>
          {showSortDropdown && (
            <div className={styles.dropdownItemsContainer}>
              <div className={styles.dropdownItem} onClick={() => setSortAndClose('Most Answered')}><span>Most Answered</span></div>
              <div className={styles.dropdownItem} onClick={() => setSortAndClose('Latest')}><span>Latest</span></div>
              <div className={styles.dropdownItem} onClick={() => setSortAndClose('Most Controversial')}><span>Most Controversial</span></div>
              <div className={styles.dropdownItem} onClick={() => setSortAndClose('Most Unanimous')}><span>Most Unanimous</span></div>
              <div className={styles.dropdownItem} onClick={() => setSortAndClose('Most Followed Authors')}><span>Most Followed Authors</span></div>
            </div>
          )}
          <ExpandMoreIcon onClick={() => setShowSortDropdown(true)} />
        </div>
      </div>
      <div className={styles.dropdownWithLabel}>
        <Title>Questions {duration === 'All Time' ? 'of' : 'for last'}</Title>
        <div className={styles.dropdownContainer} ref={ref2}>
          <div className={styles.dropdownValue} onClick={() => setShowDurationDropdown(true)}>{duration}</div>
          {showDurationDropdown && (
            <div className={styles.dropdownItemsContainer}>
              <div className={styles.dropdownItem} onClick={() => setDurationAndClose('Day')}><span>Day</span></div>
              <div className={styles.dropdownItem} onClick={() => setDurationAndClose('Week')}><span>Week</span></div>
              <div className={styles.dropdownItem} onClick={() => setDurationAndClose('Month')}><span>Month</span></div>
              <div className={styles.dropdownItem} onClick={() => setDurationAndClose('Year')}><span>Year</span></div>
              <div className={styles.dropdownItem} onClick={() => setDurationAndClose('All Time')}><span>All time</span></div>
            </div>
          )}
          <ExpandMoreIcon onClick={() => setShowDurationDropdown(true)} />
        </div>
      </div>
    </div>
  )
})
