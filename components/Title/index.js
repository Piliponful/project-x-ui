import React from 'react'

import styles from './style.styl'

export default ({ children, color }) => <h1 style={{ color }} className={styles.title}>{children}</h1>
