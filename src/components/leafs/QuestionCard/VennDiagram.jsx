/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-quotes */
import React from 'react'
import cn from 'classnames'

import styles from './style.module.styl'

export default ({ onClick, groupMode }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    id="fi_5932657"
    fill={groupMode ? '#3b3b3b' : '#00000063'}
    marginTop="4"
    onClick={onClick}
    className={cn(styles.icon, { [styles.active]: groupMode })}
  >
    <g id="Icon">
      <path d="M44,14a17.90629,17.90629,0,0,0-11.99988,4.62195,18.00005,18.00005,0,1,0,0,26.7561A17.98812,17.98812,0,1,0,44,14ZM32,42.54749a15.90619,15.90619,0,0,1,0-21.095,15.90619,15.90619,0,0,1,0,21.095ZM4,32A15.97347,15.97347,0,0,1,30.58832,20.03711a17.88927,17.88927,0,0,0,0,23.92578A15.97347,15.97347,0,0,1,4,32ZM44,48a15.916,15.916,0,0,1-10.5882-4.037,17.88993,17.88993,0,0,0,0-23.926A15.98993,15.98993,0,1,1,44,48Z"></path>
    </g>
  </svg>
)
