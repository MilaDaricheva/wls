import Head from 'next/head'
import Nav from '../components/nav'
import MainSvg from '../components/mainsvg'
import styles from '../styles/core.module.css'
import { withRouter } from 'next/router'
import coreUtils from '../utils/coreutils'

export const siteTitle = 'WideLine Studio'

function Layout({ router, children }) {

  const pgId = coreUtils.getPageId(router.pathname);

  //console.log("PAGEID", pgId);

  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="Coding modern web designs using modern technologies."></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <Nav />

        <div className={styles.main} >
          {children}
        </div>

        <footer className={styles.footer}>
          WideLine Studio &copy;2020
        </footer>
      </div>
      <MainSvg />
    </div>
  )
}

export default withRouter(Layout)