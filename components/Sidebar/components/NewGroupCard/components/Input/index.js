import React from 'react'

import styles from './style.styl'

export default ({ onTitleInput }) => <input className={styles.input} onChange={onTitleInput} />
