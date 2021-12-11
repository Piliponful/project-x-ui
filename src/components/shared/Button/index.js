import React from 'react'
import cn from 'classnames'
import BeatLoader from 'react-spinners/BeatLoader'

import styles from './style.module.styl'

export default ({ children, className, onClick, disabled, loading }) => {
  return (
    <button disabled={Boolean(disabled)} className={cn(className, styles.button, { [styles.loader]: loading })} onClick={onClick}>
      {loading
        ? <BeatLoader color='#ebedf2' />
        : children}
    </button>
  )
}
