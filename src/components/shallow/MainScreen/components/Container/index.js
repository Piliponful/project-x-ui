import React from 'react'
import cn from 'classnames'

import styles from './style.module.styl'

export default ({ children, className }) => <div className={cn(styles.container, className)}>{children}</div>
