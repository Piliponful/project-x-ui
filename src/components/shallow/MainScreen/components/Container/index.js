import React from 'react'
import cn from 'classnames'

import styles from './style.module.scss'

export default ({ children, className }) => <div className={cn(styles.container, className)}>{children}</div>
