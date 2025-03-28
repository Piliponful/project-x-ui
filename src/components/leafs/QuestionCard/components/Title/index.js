import React from 'react'

import Text from '../../../../shared/Text'

import styles from './style.module.scss'

export default ({ children, style, id, h1 = false }) => <Text h1={h1} id={id} style={style} className={styles.title}>{children}</Text>
