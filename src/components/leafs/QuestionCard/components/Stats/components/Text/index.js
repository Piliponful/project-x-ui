import React from 'react'
import cn from 'classnames'

import Text from '../../../../../../shared/Text'

import styles from './style.styl'

export default ({ children, style, className }) => <Text style={style} className={cn(className, styles.text)}>{children}</Text>
