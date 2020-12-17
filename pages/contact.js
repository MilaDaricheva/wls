import Head from 'next/head'
import styles from '../styles/core.module.css'
import Layout from '../components/layout'
import Nav from '../components/nav'

const siteTitle = 'Contact Us'

export default function Contact() {
  return (
    <Layout>

      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Nav></Nav>


      <main className={styles.main}>
        <h1 className={styles.title}>
          {siteTitle}
        </h1>

      </main>


    </Layout>

  )
}