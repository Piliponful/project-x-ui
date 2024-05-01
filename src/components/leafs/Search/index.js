import React, { useState } from 'react'
import { useDetectClickOutside } from 'react-detect-click-outside'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SearchIcon from '@mui/icons-material/Search'
import cn from 'classnames'

import styles from './style.module.styl'

export default ({ search, buttonsOutside = false, className, style }) => {
  const [text, setText] = useState('')
  const [dropdownValue, setDropdownValue] = useState('Questions')
  const [showDropdown, setShowDropdown] = useState(false)
  const ref = useDetectClickOutside({ onTriggered: () => setShowDropdown(false) })

  return (
    <div style={style} className={cn(styles.text, className, { [styles.buttonsOutside]: buttonsOutside })}>
      <input className={styles.input} placeholder='Search here...' onChange={e => setText(e.target.value)} value={text} />
      <div className={styles.dropdownContainer} ref={ref}>
        <div className={styles.dropdownValue} onClick={() => setShowDropdown(true)}>{dropdownValue}</div>
        {showDropdown && (
          <div className={styles.dropdownItemsContainer}>
            <div className={styles.dropdownItem} onClick={() => { setDropdownValue('Questions'); setShowDropdown(false) }}><span>Questions</span></div>
            <div className={styles.dropdownItem} onClick={() => { setDropdownValue('Users'); setShowDropdown(false) }}><span>Users</span></div>
          </div>
        )}
        <ExpandMoreIcon onClick={() => setShowDropdown(true)} />
      </div>
      <button className={styles.search} onClick={() => search(dropdownValue, text)}>
        Find
        <SearchIcon sx={{ fontSize: 16 }} />
      </button>
    </div>
  )
}
