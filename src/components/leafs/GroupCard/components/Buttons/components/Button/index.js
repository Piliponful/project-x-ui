import React from 'react'
import cn from 'classnames'

import Button from '../../../../../../shared/Button'
import Text from '../../../../../../shared/Text'

import styles from './style.styl'

export default ({ children, primary, secondary, onClick }) => (
  <Button className={cn(styles.button, { [styles.primary]: primary, [styles.secondary]: secondary })}>
    <Text>
      {children}
    </Text>
  </Button>
)
