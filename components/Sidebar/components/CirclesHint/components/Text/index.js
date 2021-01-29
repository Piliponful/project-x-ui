import React from 'react'
import cn from 'classnames'

import styles from './style.styl'

export default ({ children }) => <span className={cn(styles.text)}>{children}</span>
