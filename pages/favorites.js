import Head from 'next/head'
import styles from '../styles/core.module.css'
import staticVars from '../utils/staticvars'
import { motion } from "framer-motion"

const siteTitle = 'Our Favorites'

export default function Favorites(props) {
  console.log(props.dataFromParent);
  return (
    <div>

      <Head>
        <title>{siteTitle}</title>
      </Head>
      <motion.div id="favorites" initial="exit" animate="enter" exit="exit" variants={staticVars.pageTransition}>
        <main>
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
      </motion.div>

    </div>
  )
}