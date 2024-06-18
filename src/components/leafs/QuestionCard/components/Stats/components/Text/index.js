import React from 'react'
import cn from 'classnames'

import Text from '../../../../../../shared/Text'

import styles from './style.module.styl'

export default ({ children, style, className, onClick }) => <Text onClick={onClick} style={style} className={cn(className, styles.text)}>{children}</Text>
