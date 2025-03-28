import React from 'react'
import cn from 'classnames'

import styles from './style.module.scss'

export default ({ children, className, color }) => <h1 style={{ color }} className={cn(styles.title, className)}>{children}</h1>
