import React, { forwardRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import PolyscanSVG from 'bundle-text:./polyscan.svg'

import styles from './styles.module.styl'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const FirstText = () => (
  <div className={styles.text}>
    <h1 className={styles.name}>Non-anonymous online voting</h1>
    <h2 className={styles.subtitle}>on social and political issues.</h2>
  </div>
)

const textByPageNumber = {
  0: <FirstText />
}

export const Landing = forwardRef(({ jwt }, ref) => {
  useEffect(() => {
    document.querySelector('body > div > div').style['max-height'] = 'unset'
    document.querySelector('body > div > div').style['min-height'] = 'unset'

    return () => {
      document.querySelector('body > div > div').style['max-height'] = '100svh'
      document.querySelector('body > div > div').style['min-height'] = '100svh'
    }
  }, [])

  return (
    <>
      <Helmet encodeSpecialCharacters={false}>
        <title>poll.cc</title>
        <meta name='description' content='Public voting on social or political issues.' />
      </Helmet>
      <div className={styles.slides}>
        <div ref={ref} className={styles.landing}>
          {textByPageNumber[0]}
          <Link replace to={jwt ? '/' : '/app'} className={styles['open-app-button']}>
            Open App <ArrowForwardIosIcon sx={{ marginLeft: '15px', fontSize: 20 }} />
          </Link>
          <div className={styles.icons}>
            <span className={styles['made-by']}><span style={{ fontSize: 15 }}>made by</span> <a href='mailto:piliponful@gmail.com'>piliponful</a></span>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className={styles.svgWrapper} dangerouslySetInnerHTML={{ __html: PolyscanSVG }} />
              <a
                style={{
                  fontSize: 15,
                  letterSpacing: '0px',
                  textDecoration: 'none',
                  color: 'gray',
                  fontWeight: 200,
                  whiteSpace: 'nowrap'
                }}
                target='_blank'
                href='https://polygonscan.com/token/0x080376D131E2036feF1D321490cF178A3bEEA805' rel='noreferrer'
              >
                token on polyscan
              </a>
            </div>
            <span className={styles.privacy}><a href='/privacy-policy' target='_blank'>privacy policy</a></span>
          </div>
        </div>
      </div>
    </>
  )
})
