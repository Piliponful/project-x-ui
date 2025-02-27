/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-quotes */
import React, { useState } from 'react'
import cn from 'classnames'

import styles from './style.module.styl'

export default ({ onClick, groupMode }) => {
  const [isHovered, setIsHovered] = useState(groupMode)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      onClick={onClick}
      className={cn(styles.vennDiagramIcon, { [styles.active]: groupMode })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => !groupMode && setIsHovered(false)}
      style={{ cursor: 'pointer' }}
    >
      <defs>
        <linearGradient
          id="gradient-fill"
          gradientUnits="userSpaceOnUse"
          x1="2.044"
          x2="62"
          y1="32"
          y2="32"
        >
          <stop offset="0" stop-color="#0fdcdd" />
          <stop offset="1" stop-color="#46a1e8" />
        </linearGradient>
      </defs>
      <g id="_39_Diagram_Venn" data-name="39 Diagram Venn">
        <path
          d="m44 14a17.723 17.723 0 0 0 -12 4.2 17.762 17.762 0 0 0 -12-4.2c-23.91 0-23.971 36 0 36a17.864 17.864 0 0 0 12.028-4.16 17.756 17.756 0 0 0 11.972 4.16c24.12 0 23.881-36 0-36zm-12 28.958a17.159 17.159 0 0 1 .026-21.958c5.318 5.982 5.283 15.952-.026 21.958zm-12-26.958a15.913 15.913 0 0 1 10.569 3.6c-6.014 6.749-6.035 18.026-.037 24.785a15.821 15.821 0 0 1 -10.532 3.615c-21.254 0-21.307-32 0-32zm24 32a15.8 15.8 0 0 1 -10.5-3.593c6.026-6.749 5.982-18.031-.044-24.792a15.809 15.809 0 0 1 10.544-3.615c21.44 0 21.227 32 0 32z"
          fill={isHovered ? 'url(#gradient-fill)' : '#00000063'}
        />
      </g>
      <animate
        attributeName="fill"
        from="#00000063"
        to="url(#gradient-fill)"
        dur="0.5s"
        begin="mouseover"
        fill="freeze"
      />
      <animate
        attributeName="fill"
        from="url(#gradient-fill)"
        to="#00000063"
        dur="0.5s"
        begin="mouseout"
        fill="freeze"
      />
    </svg>
  )
}
