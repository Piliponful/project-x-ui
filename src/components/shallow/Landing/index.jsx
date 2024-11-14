import React, { forwardRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import styles from './styles.module.styl'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const FirstText = () => (
  <div className={styles.text}>
    <h1 className={styles.name}>Public voting</h1>
    <h2 className={styles.subtitle}>on social or political issues.</h2>
    <h2 className={styles['additional-text']}>This is the place to declare what you stand for or what you believe in.</h2>
    <small>Your votes tied to your twitter profile, everyone can see them.</small>
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
      <p className={styles.smaller}>You will get reward relative to your follower count on X</p>
      <small>(you have 1000 followers, you'll get 1000 for every question and answer)</small>
      <div><small>It's a custom token. Its value is derived from the fact I will only sell ads on this app using this token</small></div>
    </div>
  </>
)

const textByPageNumber = {
  0: <FirstText />,
  1: <SecondText />,
  2: <ThirdText />
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
        {[0, 1, 2].map(pageNumber => (
          <div key={pageNumber} ref={ref} className={styles.landing}>
            {textByPageNumber[pageNumber]}
            <Link replace to={jwt ? '/' : '/app'} className={styles['open-app-button']} style={pageNumber > 0 ? { marginTop: 60 } : {}}>
              Open App <ArrowForwardIosIcon sx={{ marginLeft: '15px', fontSize: 20 }} />
            </Link>
            {pageNumber === 0 && (
              <>
                <div className={styles.scrollIcon}>
                  <i className={styles.scroll} />
                </div>
                <span className={styles['made-by']}>made by <a href='mailto:piliponful@gmail.com'>piliponful</a></span>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  )
})
