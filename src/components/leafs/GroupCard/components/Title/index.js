import React from 'react'

import Text from '../../../../shared/Text'

import styles from './style.module.scss'

export default ({ children, style }) => <Text style={style} className={styles.title}>{children}</Text>
