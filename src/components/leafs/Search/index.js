import React, { useState } from 'react'
import { useDetectClickOutside } from 'react-detect-click-outside'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import styles from './style.module.styl'

export default ({ search }) => {
  const [text, setText] = useState('')
  const [dropdownValue, setDropdownValue] = useState('Questions')
  const [showDropdown, setShowDropdown] = useState(false)
  const ref = useDetectClickOutside({ onTriggered: () => setShowDropdown(false) })

  return (
    <div className={styles.text}>
      <input className={styles.input} onChange={e => setText(e.target.value)} value={text} />
      <div className={styles.dropdownContainer} ref={ref}>
        <div className={styles.dropdownValue} onClick={() => setShowDropdown(true)}>{dropdownValue}</div>
        {showDropdown && (
          <div className={styles.dropdownItemsContainer}>
            <div className={styles.dropdownItem} onClick={() => { setDropdownValue('Users'); setShowDropdown(false) }}>Users</div>
            <div className={styles.dropdownItem} onClick={() => { setDropdownValue('Questions'); setShowDropdown(false) }}>Questions</div>
          </div>
        )}
        <ExpandMoreIcon onClick={() => setShowDropdown(true)} />
      </div>
      <button className={styles.search} onClick={() => search(dropdownValue, text)}>Find</button>
    </div>
  )
}