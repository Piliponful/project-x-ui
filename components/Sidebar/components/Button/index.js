import React from 'react'
import cn from 'classnames'

import Text from '../Text'

import styles from './style.styl'

export default ({ style, children, secondary, height, width, onClick }) => {
  return (
    <button style={{ ...style, height, width }} className={cn(styles.button, { [styles.secondary]: secondary })} onClick={onClick}>
      <Text primary secondary={secondary} button>{children}</Text>
    </button>
  )
}
