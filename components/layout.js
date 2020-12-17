import Head from 'next/head'
import styles from '../styles/core.module.css'

export const siteTitle = 'WideLine Studio'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>

      <footer className={styles.footer}>
        WideLine Studio &copy;2020
      </footer>

    </div>
  )
}