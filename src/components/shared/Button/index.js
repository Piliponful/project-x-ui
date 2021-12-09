import React from 'react'
import cn from 'classnames'
import BeatLoader from 'react-spinners/BeatLoader'

import styles from './style.styl'

export default ({ children, className, onClick, disabled, loading }) => {
  return (
    <button disabled={Boolean(disabled)} className={cn(className, styles.button)} onClick={onClick}>
      {loading
        ? <BeatLoader color='#969696' />
        : children}
    </button>
  )
}
