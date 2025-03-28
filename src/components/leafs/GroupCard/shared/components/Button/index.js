import React from 'react'
import cn from 'classnames'

import Button from '../../../../../shared/Button'
import Text from '../../../../../shared/Text'

import styles from './style.module.scss'

export default ({ children, primary, secondary, onClick, disabled, nobold }) => (
  <Button disabled={disabled} onClick={onClick} className={cn(styles.button, { [styles.primary]: primary, [styles.secondary]: secondary, [styles.nobold]: nobold })}>
    <Text>
      {children}
    </Text>
  </Button>
)
