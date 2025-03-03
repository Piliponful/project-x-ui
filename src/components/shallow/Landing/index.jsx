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

const SeoContent = ({ keyword: title, description }) => (
  <div style={{ fontSize: 33 }}>
    <header>
      <h1>{title}</h1>
    </header>
    <section>
      <h2>Why Use {title}?</h2>
      <p>{description}</p>
    </section>
    <section>
      <h2>How to Create {title}?</h2>
      <ol>
        <li>Enter your question and answer choices.</li>
        <li>Customize poll settings.</li>
        <li>Share your poll via link or embed it on your website.</li>
        <li>Analyze the results in real-time.</li>
      </ol>
    </section>
    <footer>
      <p>&copy; 2025 Poll.cc - The Best Online Polling Tool</p>
    </footer>
  </div>
)

export const Landing = forwardRef(({ jwt, isBot, description, title }, ref) => {
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
      {title && (
        <Helmet>
          <meta name='description' content={description} />
          <meta name='keywords' content={title + ', create polls, online surveys, interactive voting'} />
          <title>{title}</title>
          <script type='application/ld+json'>
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: title,
              description,
              url: `https://poll.cc/${title.replace(/\s+/g, '-').toLowerCase()}`
            })}
          </script>
        </Helmet>
      )}
      <div className={styles.slides}>
        <div ref={ref} className={styles.landing}>
          {textByPageNumber[0]}
          {(isBot && title) && (
            <SeoContent keyword={title} description={description} />
          )}
          <Link replace to={jwt ? '/' : '/app'} className={styles['open-app-button']}>
            Open App <ArrowForwardIosIcon sx={{ marginLeft: '15px', fontSize: 20 }} />
          </Link>
          <div className={styles.icons}>
            <span className={styles['made-by']}><span style={{ fontSize: 15 }}>made by</span> <a href='mailto:piliponful@gmail.com'>piliponful</a></span>
            {window.featureFlags?.rewards && (
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
            )}
            <span className={styles.privacy}><a href='/privacy-policy' target='_blank'>privacy policy</a></span>
          </div>
        </div>
      </div>
    </>
  )
})
