import React from 'react'

import Button from '../../../../../../shared/Button'
import Text from '../../../../../../shared/Text'

import styles from './style.styl'

export default ({ onClick }) => <Button className={styles.send} onClick={onClick}><Text className={styles.text}>Send</Text></Button>
