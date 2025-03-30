import React, { forwardRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import PolyscanSVG from 'bundle-text:./polyscan.svg'

import styles from './styles.module.scss'

export const Landing = forwardRef(({ jwt, isBot, description, title }, ref) => {
  // useEffect(() => {
  //   document.querySelector('body > div > div').style['max-height'] = 'unset'
  //   document.querySelector('body > div > div').style['min-height'] = 'unset'

  //   return () => {
  //     document.querySelector('body > div > div').style['max-height'] = '100svh'
  //     document.querySelector('body > div > div').style['min-height'] = '100svh'
  //   }
  // }, [])

  return (
    <>
      {(title && isBot)
        ? (
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
          )
        : (
          <Helmet encodeSpecialCharacters={false}>
            <title>poll.cc | online polls</title>
            <meta name='description' content='Online polls on social and political issues. Online voting app.' />
            <script type='application/ld+json'>
              {JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebPage',
                name: 'poll.cc | online polls',
                description: 'Online polls on social and political issues. Online voting app.',
                url: 'https://poll.cc/'
              })}
            </script>
          </Helmet>
          )}
      <div className={styles.slides}>
        <div ref={ref} className={styles.landing}>
          {isBot
            ? (
              <section
                className={styles.text}
                style={{
                  fontSize: 39,
                  padding: '0 41px'
                }}
              >
                <h1>{title}</h1>
                <p>{description}</p>
              </section>
              )
            : (
              <div className={styles.text}>
                <h1 className={styles.name}>Non-anonymous online voting</h1>
                <h2 className={styles.subtitle}>on social and political issues.</h2>
              </div>
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
