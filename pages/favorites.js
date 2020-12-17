import Head from 'next/head'
import styles from '../styles/core.module.css'
import Layout from '../components/layout'

const siteTitle = 'Our Favorites'

export default function Favorites() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {siteTitle}
        </h1>

        <p>Why Jamstack?</p>

        <p>Jamstack is an architecture designed to make the web faster, more secure, and easier to scale with help of the following technologies:</p>

        <p>Headless CMS makes content accessible via an API for display on any device.</p>

        <p>REST APIs give us flexibility.</p>

        <p>Cloud computing provides scalability.</p>

        <p>Next.js optimizes your application for the best performance by code splitting, client-side navigation, and prefetching data.</p>

        <p>Ghost is very fast and lightweight headless CMS, excellent choice for blogging. </p>

        <p>Strapi CMS is a wonderful choice for e - commerce solutions and other more complex applications. </p >

      </main>

    </Layout>
  )
}