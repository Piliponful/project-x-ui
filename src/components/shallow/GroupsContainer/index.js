import React from 'react'

import style from './style.module.styl'

export default ({ children }) => (
  <div className={style.groupContainer}>
    <div style={{ width: '100%', height: '100%' }}>
      {children}
    </div>
  </div>
)
