import React from 'react'

import Text from '../../../../shared/Text'

import styles from './style.module.styl'

export default ({ children, style, id }) => <Text id={id} style={style} className={styles.title}>{children}</Text>
