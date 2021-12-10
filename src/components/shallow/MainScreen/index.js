import React from 'react'
import Media from 'react-media'

import Title from '../../shared/Title'

import Container from './components/Container'

import styles from './style.module.styl'

import { sidebarWidth, smallMainScreenWidth, mediumMainScreenWidth, largeMainScreenWidth } from '../../../constants'

export default ({ children, style }) => (
  <section style={style} className={styles.mainScreen}>
    <Title color='#3d465e'>Questions</Title>
    <Container>
      <Media queries={{
        small: { minWidth: sidebarWidth + smallMainScreenWidth, maxWidth: sidebarWidth + mediumMainScreenWidth },
        medium: { minWidth: sidebarWidth + mediumMainScreenWidth, maxWidth: sidebarWidth + largeMainScreenWidth },
        large: { minWidth: sidebarWidth + largeMainScreenWidth }
      }}
      >
        {matches => (
          <>
            {matches.small ? <>{children.slice(0, 1)}</> : null}
            {matches.medium ? <>{children.slice(0, 2)}</> : null}
            {matches.large ? <>{children.slice(0, 3)}</> : null}
          </>
        )}
      </Media>
    </Container>
  </section>
)
