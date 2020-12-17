import Head from 'next/head'
import Nav from '../components/nav'
import styles from '../styles/core.module.css'

export const siteTitle = 'WideLine Studio'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <meta name="Description" content="Coding modern web designs using modern technologies."></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <Nav></Nav>

        {children}

        <footer className={styles.footer}>
          WideLine Studio &copy;2020
        </footer>
      </div>
    </div>
  )
}