import Head from 'next/head'
import Nav from '../components/nav'
import styles from '../styles/core.module.css'
import { withRouter } from 'next/router'
import { motion } from "framer-motion"
import getPageId from '../utils/coreutils'

export const siteTitle = 'WideLine Studio'

const textVariants = {
  exit: { opacity: 0, transition: { duration: 3 } },
  enter: {
    opacity: 1,
    transition: { delay: 0.1, duration: 3 }
  }
};

function Layout({ router, children }) {

  const pgId = getPageId(router.pathname);

  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <meta name="Description" content="Coding modern web designs using modern technologies."></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <Nav />

        <motion.div id={pgId} className={styles.main} initial="exit" animate="enter" exit="exit" variants={textVariants}>
          {children}
        </motion.div>

        <footer className={styles.footer}>
          WideLine Studio &copy;2020
        </footer>
      </div>
    </div>
  )
}

export default withRouter(Layout)