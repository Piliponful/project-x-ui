import React, { forwardRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import PolyscanSVG from './polyscan.svg'

import styles from './styles.module.styl'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const FirstText = () => (
  <div className={styles.text}>
    <h1 className={styles.name}>Non-anonymous online voting</h1>
    <h2 className={styles.subtitle}>on social and political issues.</h2>
  </div>
)

const SecondText = () => (
  <>
    <div className={styles['second-text-container']}>
      <p>Find your similarities and your differences.</p>
      <p className={styles.smaller}>After you cast your votes you can compare your answers with anyone else on the site.</p>
    </div>
    <div className={styles['mobile-second-text']}>
      <p>Find your similarities</p>
      <p>and your differences.</p>
      <p className={styles.smaller}>After you cast your votes you can compare your answers with anyone else on the site.</p>
    </div>
  </>
)

const ThirdText = () => (
  <>
    <div>
      <p>Get crypto for every question asked, every answer to that question and every question you answer</p>
      <p className={styles.smaller}>You will get reward relative to your follower count on X(if you sign in with it)</p>
      <small>(you have 1000 followers, you'll get 1000 for every question and answer)</small>
      <div><small>It's a custom token. Its value is derived from the fact I will only sell ads(and paid polls) on this app using this token</small></div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={PolyscanSVG} style={{ height: 24, paddingRight: 5 }} />
        <a style={{ fontSize: 14, letterSpacing: '0px' }} href='https://polygonscan.com/token/0x080376D131E2036feF1D321490cF178A3bEEA805'>token on polyscan</a>
      </div>
    </div>
  </>
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
          {/* <>
            <div className={styles.scrollIcon}>
              <i className={styles.scroll} />
            </div>
          </> */}
          <div className={styles.icons}>
            <span className={styles['made-by']}>made by <a href='mailto:piliponful@gmail.com'>piliponful</a></span>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={PolyscanSVG} style={{ height: 18, paddingRight: 5 }} />
              <a
                style={{
                  fontSize: 15,
                  letterSpacing: '0px',
                  textDecoration: 'none',
                  color: 'gray',
                  fontWeight: 200,
                  whiteSpace: 'nowrap'
                }}
                href='https://polygonscan.com/token/0x080376D131E2036feF1D321490cF178A3bEEA805'
              >
                token on polyscan
              </a>
            </div>
            <span className={styles.privacy}><a href='/privacy-policy'>privacy policy</a></span>
          </div>
        </div>
      </div>
    </>
  )
})
