import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

import style from './style.module.styl'

export default ({ children }) => (
  <div className={style.groupContainer}>
    <Scrollbars
      style={{ width: '100%', height: '100%' }}
      autoHide
    >
      {children}
    </Scrollbars>
  </div>
)
