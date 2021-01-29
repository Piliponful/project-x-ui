import React from 'react'

import styles from './style.styl'

export default ({ children, style }) => <section style={style} className={styles.mainScreen}>{children}</section>
